// Mayor número

// Crear un programa que dado un array 2d de números, indique cuál es el mayor de ellos.El array debe estar guardado en una variable(no hace falta ingresarlo).Array de ejemplo:
// [
//     [2, 7, 12, 1],
//     [8, 23],
//     [9, 45, 7],
//     [22, 3, 24, 4]
// ]

// defino array 2d
const arreglo = [
    [1, 4, 66, 7],
    [4, 523, 6, 124],
    [21, 1000, 54, 67],
    [12, 457, 865, 31]
];

// habilito variable numero mayor
let elMayor = 0;



// inicia recorrido
for (let i = 0; i < arreglo.length; i++) {
    for (let j = 0; j < arreglo[i].length; j++) {
        if (arreglo[i][j] > elMayor) {
            elMayor = arreglo[i][j];
        }
    }
}

alert("El número mayor es el " + elMayor);