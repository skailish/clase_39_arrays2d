// Cantidad

// Crear un programa que dado un array 2d de strings, indique cuál es la cantidad de una de sus ítems.El programa debe dar la posibilidad de ingresar qué item se desea buscar.Ejemplo:
// [
//     ['🍎', '🍏', '🍌', '🍌'],
//     ['🍌', '🍎'],
//     ['🍎', '🍏', '🍌'],
//     ['🍏', '🍌', '🍎', '🍌']
// ]

// // Cantidad de 🍎: 4

// defino array 2d
const frutas = [
    ['🍎', '🍏', '🍌', '🍌'],
    ['🍌', '🍎'],
    ['🍎', '🍏', '🍌'],
    ['🍏', '🍌', '🍎', '🍌']
]

// pregunto cuál fruta quiere buscar 
let buscar = prompt("Elija qué buscar: '🍎', '🍏' o '🍌'");

// variable para ir sumando
let suma = 0;


// recorro el array
for (let i = 0; i < frutas.length; i++) {
    for (let j = 0; j < frutas[i].length; j++) {
        if (frutas[i][j] === buscar) {
            suma++;
        }
    }
}

alert(`Cantidad de ${buscar}: ${suma}`)