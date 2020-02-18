// Sublistas

// Crear un programa que permita agregar listas de tareas y agruparlas en categorias.El programa debe hacer lo siguiente:
// Permitir ingresar el nombre de una categoría
// Permitir ingresar una tarea
// Preguntar si desea ingresar otra tarea
// Si responde que si, volver al punto 2
// Si responde que no, preguntar si desea ingresar otra categoría
// Si responde que sí, volver al punto 1
// Si responde que no, terminar el programa En todo momento(en cada mensaje), el programa debe mostrar las tareas agrupadas por categorías.Las categorías deben diferenciarse de las tareas(se pueden usar divisores, emojis, espacios, etc).Ejemplo:
// Lista de Tareas

// SUPERMERCADO
// ----------------------
// 👉 Comprar harina
// 👉 Comprar gaseosa
// 👉 Comprar aceite

// FACULTAD
// ----------------------
// 👉 Sacar apuntes
// 👉 Anotarse para final

// MICHI
// ----------------------
// 👉 Comprar comida
// 👉 Llevar a veterinaria 

// Crear un programa que permita agregar listas de tareas y agruparlas en categorias.El programa debe hacer lo siguiente:
// Permitir ingresar el nombre de una categoría
// Permitir ingresar una tarea
// Preguntar si desea ingresar otra tarea
// Si responde que si, volver al punto 2
// Si responde que no, preguntar si desea ingresar otra categoría
// Si responde que sí, volver al punto 1
// Si responde que no, terminar el programa

// inicializo variables dinamicas
let tareas = "";
let ingresaTarea = "";
let ingresaCategoria = "";
let aceptoTarea = true; // desea ingresar otra tarea?
let aceptoCategoria = true; // desea ingresar otra categoria?
let indexCategoria = 0;
// defino el mensaje para mostrar todo el array
let muestroArray = "";
let mensaje = "";


// empiezo primer lista de tareas
tareas = [[prompt("Para comenzar, ingrese el nombre de una categoría")]];

while (aceptoCategoria) {
    if (!aceptoTarea) {
        tareas.push([prompt(mensaje + "Ingrese el nombre de una categoría")]);
        aceptoTarea = true;
    }

    while (aceptoTarea) {
        tareas[indexCategoria].push(prompt("Ingrese una tarea"));

        // bucle para recorrer el array y luego mostrarlo
        muestroArray = ""; // reseteo muestroArray
        for (let i = 0; i < tareas.length; i++) {
            for (let j = 0; j <= tareas[i].length; j++) {
                if (j === 0) {
                    muestroArray += tareas[i][j] + "\n---------------------\n";
                } else {
                    muestroArray += tareas[i][j] + ", ";
                }
            }
            muestroArray += "\n\n";
        }
        mensaje = "Lista: \n" + muestroArray; // reseteo mensaje
        aceptoTarea = confirm(mensaje + "¿Desea ingresar otra tarea?");
    }

    aceptoCategoria = confirm(mensaje + "¿Desea ingresar otra categoría?");

    if (aceptoCategoria) {
        indexCategoria++;
    }

}

