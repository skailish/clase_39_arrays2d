// Columnas

// Crear un programa que dado un array 2d de números, indique cuál es la suma de una de sus columnas.El programa debe dar la posibilidad de ingresar qué columna se desea elegir.El array debe estar guardado en una variable(no hace falta ingresarlo).Ejemplo:
// [
//     [2, 7, 12, 1],
//     [8, 23],
//     [9, 45, 7],
//     [22, 3, 24, 4]
// ]

// // Suma de columna 3: 43

// defino array 2d
const numeros = [
    [2, 7, 12, 1],
    [8, 23],
    [9, 45, 7],
    [22, 3, 24, 4]
];

// defino variable dinámica de suma
let suma = 0;

// defino el mensaje para mostrar todo el array
let muestroArray = "";
// bucle para recorrer el array y luego mostrarlo
for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros[i].length; j++) {
        muestroArray += numeros[i][j] + ", ";
    }
    muestroArray += "\n";
}


// pregunto al usuario qué columna quiere
let columna = Number(prompt("Ingrese la columna que quiere sumar\n" + muestroArray));


// bucle para sumar
for (let i = 0; i < numeros.length; i++) {
    if (columna > (numeros[i].length)) {
        alert(`Elementos:\n${muestroArray}\nNo existe un elemento en la columna ${columna} del grupo ${i + 1}. Se sumará a valor '0'`);
    } else {
        suma += numeros[i][columna - 1];
    }
}

alert(`Suma de columna ${columna}: ${suma}`);