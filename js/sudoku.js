// Sudoku

// Crear un programa que permita ingresar 9 números separados por espacios, y los distribuya en una grilla de 3x3.El programa debe decir si hay algún número que se repite en una fila, columna, o diagonal.Ejemplo
// [
//     [2, 7, 12],
//     [8, 23, 1],
//     [9, 45, 7]
// ] // ✅

// [
//     [2, 7, 12],
//     [8, 23, 1],
//     [23, 45, 7]
// ] // 🚫

// pregunto al usuario por los números
let listaNumeros = prompt("Ingrese 9 numeros separados por espacios").split(" ");

// separo en 3x3
let arregloDimensional = [[], [], []];
arregloDimensional[0] = listaNumeros.splice(0, 3);
arregloDimensional[1] = listaNumeros.splice(0, 3);
arregloDimensional[2] = listaNumeros;

// defino mensaje
let mensaje = "";

// defino el mensaje para mostrar todo el array
let muestroArray = "";
// bucle para recorrer el array y luego mostrarlo
for (let i = 0; i < arregloDimensional.length; i++) {
    for (let j = 0; j < arregloDimensional[i].length; j++) {
        muestroArray += arregloDimensional[i][j] + ", ";
    }
    muestroArray += "\n";
}


// reviso repetición
// ((filas) && (columnas) && (diagonales))
if ((arregloDimensional[0][0] != arregloDimensional[0][1] && arregloDimensional[0][0] != arregloDimensional[0][2] && arregloDimensional[1][0] != arregloDimensional[1][1] && arregloDimensional[1][0] != arregloDimensional[1][2] && arregloDimensional[2][0] != arregloDimensional[2][1] && arregloDimensional[2][0] != arregloDimensional[2][2]) && (arregloDimensional[0][0] != arregloDimensional[1][0] && arregloDimensional[0][0] != arregloDimensional[2][0] && arregloDimensional[0][1] != arregloDimensional[1][1] && arregloDimensional[0][1] != arregloDimensional[2][1] && arregloDimensional[0][2] != arregloDimensional[1][2] && arregloDimensional[0][2] != arregloDimensional[2][2]) && (arregloDimensional[0][0] != arregloDimensional[1][1] && arregloDimensional[0][0] != arregloDimensional[2][2] && arregloDimensional[2][0] != arregloDimensional[1][1] && arregloDimensional[2][0] != arregloDimensional[0][2] && arregloDimensional[0][1] != arregloDimensional[1][0] && arregloDimensional[0][1] != arregloDimensional[1][2] && arregloDimensional[2][1] != arregloDimensional[1][1] && arregloDimensional[2][1] != arregloDimensional[1][2])) {
    mensaje = "✅"
} else {
    mensaje = "🚫"

}

alert(muestroArray + "\n" + mensaje);