// Viborita

// Crear un programa que permita controlar una viborita.
// El programa debe mostrar el tablero en todo momento.
// Debe permitir ingresar las direcciones para donde desea mover la víbora: ARRIBA, DERECHA, ABAJO, IZQUIERDA, y moverla en consecuencia.
// El objetivo es comer todas las manzanas, el juego termina cuando no hay más manzanas.
// Para comer una manzana, debe moverse hacia ella.
// Si la vibora llega esta en el borde del tablero, y se mueve hacia este, debe aparecer del otro lado del mismo.
// Si se intenta avanzar a un casillero bloqueado(en el ejemplo, un ladrillo) no debe poder avanzar.
// En vez de emojis se pueden usar letras.
// const tablero =
//     [
//         ['🌱', '🌱', '🍎', '🌱', '🌱'],
//         ['🍎', '🧱', '🌱', '🧱', '🍎'],
//         ['🌱', '🧱', '🐍', '🌱', '🌱'],
//         ['🌱', '🍎', '🌱', '🧱', '🌱'],
//         ['🍎', '🌱', '🌱', '🍎', '🧱'],
//         ['🌱', '🌱', '🌱', '🌱', '🍎'],
//     ]



// DEFINO TABLERO
const tablero =
    [
        ['🌱', '🌱', '🍎', '🌱', '🌱'],
        ['🍎', '🧱', '🌱', '🧱', '🍎'],
        ['🌱', '🧱', '🐍', '🌱', '🌱'],
        ['🌱', '🍎', '🌱', '🧱', '🌱'],
        ['🍎', '🌱', '🌱', '🍎', '🧱'],
        ['🌱', '🌱', '🌱', '🌱', '🍎'],
    ];

// defino variables de elementos
let brote = "🌱";
let manzana = "🍎";
let ladrillo = "🧱";
let vibora = "🐍";

// DEFINO VARIABLES DINAMICAS
// defino las variables para concatenar en el mensaje
let muestroArray = "";
const opciones = `
1- ARRIBA
2- DERECHA
3- ABAJO
4- IZQUIERDA`;

// encuentro vibora
let viboraIndexI = "";
let viboraIndexJ = "";

// lo que ingresará el usuario
let movimiento = "";


// variable para sumar manzanas
let quedanManzanas = 0;

// recorro el array para contar las manzanas y definir el tablero original
for (let i = 0; i < tablero.length; i++) {
    for (let j = 0; j < tablero[i].length; j++) {
        if (tablero[i][j] === manzana) {
            quedanManzanas++;
        }
        muestroArray += tablero[i][j] + " "; // defino el muestroArray para el mensaje
    }
    muestroArray += "\n";
}



while (quedanManzanas > 0) {

    movimiento = Number(prompt(muestroArray + "Ingrese el movimiento" + opciones));

    /// busco la vibora en el tablero y defino su index
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            if (tablero[i][j] === vibora) {
                viboraIndexI = i;
                viboraIndexJ = j;
            }
        }
    }

    switch (movimiento) {


        case (1): // arriba

            if (viboraIndexI === 0) { // si está arriba de todo
                if (tablero[tablero.length - 1][viboraIndexJ] !== ladrillo) { // si NO hay un ladrillo delotro lado
                    if (tablero[tablero.length - 1][viboraIndexJ] === manzana) { // si el lugar a donde irá la vibora es una manzana
                        quedanManzanas--;
                    }
                    tablero[tablero.length - 1][viboraIndexJ] = vibora; // pasa "al otro lado" y reemplazo la casilla
                    tablero[viboraIndexI][viboraIndexJ] = brote; // donde estaba la vibora queda un brote
                } else { // si hay un ladrillo
                    alert("Camino bloquedao. Elige otro movimiento");
                }
            } else if (tablero[viboraIndexI - 1][viboraIndexJ] === manzana) { // si no hay pared, pero hay una manzana arriba de la vibora
                quedanManzanas--;
                tablero[viboraIndexI - 1][viboraIndexJ] = vibora; // sube y reemplazo la casilla
                tablero[viboraIndexI][viboraIndexJ] = brote; // donde estaba la vibora queda un brote

            } else if (tablero[viboraIndexI - 1][viboraIndexJ] === brote) { // hay un brote
                tablero[viboraIndexI - 1][viboraIndexJ] = vibora; // sube y reemplazo la casilla
                tablero[viboraIndexI][viboraIndexJ] = brote; // donde estaba la vibora queda un brote

            } else if (tablero[viboraIndexI - 1][viboraIndexJ] === ladrillo) { // si hay un ladrillo arriba

                alert("Camino bloquedao. Elige otro movimiento");
            }

            break

        case (2): // derecha
            if (viboraIndexJ === (tablero[viboraIndexI].length) - 1) { // si está a la derecha
                if (tablero[viboraIndexI][0] !== ladrillo) { // si NO hay un ladrillo del otro lado

                    if (tablero[viboraIndexI][0] === manzana) { // si el lugar a donde irá la vibora es una manzana
                        quedanManzanas--;
                    }
                    tablero[viboraIndexI][0] = vibora; // pasa "al otro lado" y reemplazo la casilla
                    tablero[viboraIndexI][viboraIndexJ] = brote; // donde estaba la vibora queda un brote
                } else {
                    alert("Camino bloquedao. Elige otro movimiento");

                }
            } else if (tablero[viboraIndexI][viboraIndexJ + 1] === manzana) { // si no hay pared, pero hay una manzana a la derecha de la vibora
                quedanManzanas--;
                tablero[viboraIndexI][viboraIndexJ + 1] = vibora; // sube y reemplazo la casilla
                tablero[viboraIndexI][viboraIndexJ] = brote; // donde estaba la vibora queda un brote

            } else if (tablero[viboraIndexI][viboraIndexJ + 1] === brote) { // hay un brote
                tablero[viboraIndexI][viboraIndexJ + 1] = vibora; // sube y reemplazo la casilla
                tablero[viboraIndexI][viboraIndexJ] = brote; // donde estaba la vibora queda un brote

            } else if (tablero[viboraIndexI][viboraIndexJ + 1] === ladrillo) {

                alert("Camino bloquedao. Elige otro movimiento");
            }

            break

        case (3): // abajo
            if (viboraIndexI === tablero.length - 1) { // si está abajo de todo
                if (tablero[0][viboraIndexJ] != ladrillo) { // NO hay ladrillo del otro lado
                    if (tablero[0][viboraIndexJ] === manzana) { // si el lugar a donde irá la vibora es una manzana
                        quedanManzanas--;
                    }
                    tablero[0][viboraIndexJ] = vibora; // pasa "al otro lado" y reemplazo la casilla
                    tablero[viboraIndexI][viboraIndexJ] = brote; // donde estaba la vibora queda un brote
                } else { // hay ladrillo del otro lado
                    alert("Camino bloquedao. Elige otro movimiento");
                }
            } else if (tablero[viboraIndexI + 1][viboraIndexJ] === manzana) { // si no hay pared, pero hay una manzana abajo de la vibora
                quedanManzanas--;
                tablero[viboraIndexI + 1][viboraIndexJ] = vibora; // baja y reemplazo la casilla
                tablero[viboraIndexI][viboraIndexJ] = brote; // donde estaba la vibora queda un brote

            } else if (tablero[viboraIndexI + 1][viboraIndexJ] === brote) { // hay un brote
                tablero[viboraIndexI + 1][viboraIndexJ] = vibora; // baja y reemplazo la casilla
                tablero[viboraIndexI][viboraIndexJ] = brote; // donde estaba la vibora queda un brote

            } else if (tablero[viboraIndexI + 1][viboraIndexJ] === ladrillo) {

                alert("Camino bloquedao. Elige otro movimiento");
            }

            break

        case (4): // izquierda            
            if (viboraIndexJ === 0) { // si está a la izquierda
                if (tablero[viboraIndexI][tablero[viboraIndexI].length - 1] !== ladrillo) { // si no hay un ladrillo del otro lado

                    if (tablero[viboraIndexI][tablero[viboraIndexI].length - 1] === manzana) { // si el lugar a donde irá la vibora es una manzana
                        quedanManzanas--;
                    }
                    tablero[viboraIndexI][tablero[viboraIndexI].length - 1] = vibora; // pasa "al otro lado" y reemplazo la casilla
                    tablero[viboraIndexI][viboraIndexJ] = brote; // donde estaba la vibora queda un brote
                } else {
                    alert("Camino bloquedao. Elige otro movimiento");
                }
            } else if (tablero[viboraIndexI][viboraIndexJ - 1] === manzana) { // si no hay pared, pero hay una manzana a la izquierda de la vibora
                quedanManzanas--;
                tablero[viboraIndexI][viboraIndexJ - 1] = vibora; // sube y reemplazo la casilla
                tablero[viboraIndexI][viboraIndexJ] = brote; // donde estaba la vibora queda un brote

            } else if (tablero[viboraIndexI][viboraIndexJ - 1] === brote) { // hay un brote
                tablero[viboraIndexI][viboraIndexJ - 1] = vibora; // sube y reemplazo la casilla
                tablero[viboraIndexI][viboraIndexJ] = brote; // donde estaba la vibora queda un brote

            } else if (tablero[viboraIndexI][viboraIndexJ - 1] === ladrillo) {

                alert("Camino bloquedao. Elige otro movimiento");
            }

            break

        default:
            alert("No ingresaste una acción válida");
    }

    // actualizo tablero
    muestroArray = "";
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            muestroArray += tablero[i][j] + " ";
        }
        muestroArray += "\n";
    }

    if (quedanManzanas === 0) {
        alert(muestroArray + "GANASTE!")
    }
}

