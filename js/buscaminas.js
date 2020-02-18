// Buscaminas

// Crear un programa que dado un array 2d permita ingresar una coordenada(representando los índices del array), y mostrar si era una casilla vacía o tenía una mina.En caso de que tenga una casilla vacía, debe poder seguir jugando e ingresando casillas.Si descubre todas las casillas vacías o elige una con una mina, el juego debe terminar, e indicar si perdió o ganó.Las minas y casillas vacías(ocultas y descubiertas) pueden representarse con emojis con con números o letras.
// const tablero =
//     [
//         ['📦', '💣', '💣'],
//         ['📦', '📦', '📦'],
//         ['💣', '📦', '📦']
//     ]

// 📦 📦 📦
// 📦 📦 📦
// 📦 📦 📦

// // Ingrese una coordenada: 0,0
// // La caja está vacía!

// 💨 📦 📦
// 📦 📦 📦
// 📦 📦 📦

// // Ingrese una coordenada: 0,1
// // ¡Oh no!¡Has encontrado una bomba!

// 💨 💥 📦
// 📦 📦 📦
// 📦 📦 📦


// defino tablero
const tablero = [
    ['📦', '📦', '💣'],
    ['📦', '💣', '📦'],
    ['💣', '📦', '📦']
];


// defino tablero para el usuario
let tableroUsuario = [
    ['📦', '📦', '📦'],
    ['📦', '📦', '📦'],
    ['📦', '📦', '📦']
];

// defino variables de elementos
let bomba = "💣";
let caja = "📦";
let vacio = "💨";
let explosion = "💥";

// calculo cuántas bombas hay
let calculoBombas = 0;
// recorro el array
for (let i = 0; i < tablero.length; i++) {
    for (let j = 0; j < tablero[i].length; j++) {
        if (tablero[i][j] === bomba) {
            calculoBombas++;
        }
    }
}

// defino el mensaje para mostrar todo el array
let mensaje = " ";
let muestroArray = "";

// lo que ingresará el usuario
let coordenadas = "";

// variables de comparación
let comparacion = "";
let cajasQuedan = 0; // para hacer la suma de las cajas que quedan

// control ()mientras no toque bomba o no se abran todas las cajas vacías)
let gameContinues = true;

while (gameContinues) {
    // pregunto al usuario las coordenadas
    coordenadas = prompt(mensaje + "Ingrese las coordenadas, separadas por un espacio\n").split(" ");

    // armo la variable de comparación
    comparacion = tablero[Number(coordenadas[0])][Number(coordenadas[1])];

    // defino resultado de ronda
    if (comparacion === bomba) {
        tableroUsuario[Number(coordenadas[0])][Number(coordenadas[1])] = explosion;
        mensaje = "Encontraste una bomba\n";

    } else if (comparacion === caja) {
        tableroUsuario[Number(coordenadas[0])][Number(coordenadas[1])] = vacio;
        mensaje = "La caja estaba vacía!\n";
    } else if (comparacion === vacio) {
        mensaje = "Ya destapaste anteriormente esa caja\n";
    } else {
        mensaje = "Ingresaste mal las coordenadas. Volvé a intentarlo\n";
    }

    // bucle para recorrer el array
    muestroArray = ""; // reseteo el muestroArray
    cajasQuedan = 0; // reseteo cajas

    for (let i = 0; i < tableroUsuario.length; i++) {
        for (let j = 0; j < tableroUsuario[i].length; j++) {
            if (tableroUsuario[i][j] === caja) {// en busca de las cajas que queden

                cajasQuedan++;
            }
            muestroArray += tableroUsuario[i][j] + ", "; // actualizo el muestroArray para el mensaje
        }
        muestroArray += "\n";
    }

    mensaje += muestroArray;

    // defino si gameContinues
    if (cajasQuedan === calculoBombas) {
        // cambio a bombas
        muestroArray = ""; // reseteo el muestroArray
        for (let i = 0; i < tableroUsuario.length; i++) {
            for (let j = 0; j < tableroUsuario[i].length; j++) {
                if (tableroUsuario[i][j] === caja) {// cambio a bomba
                    tableroUsuario[i][j] = bomba;
                }
                muestroArray += tableroUsuario[i][j] + ", "; // actualizo el muestroArray para el mensaje
            }
            muestroArray += "\n";
        }
        alert(`${muestroArray}
        GANASTE`);

        gameContinues = false;
    } else if (comparacion === bomba) {
        alert(`${mensaje}
        PERDISTE`);
        gameContinues = false;
    }





}