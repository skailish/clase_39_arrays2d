// Canciones y Artistas

// Crear un programa con las siguientes posibles acciones.Una vez realizada la acción, debe volver al menú de opciones para elegir una nueva.
// AGREGAR CANCION: debe permitir ingresar el nombre de una canción y le artista, separado por coma, por ejemplo: Africa, Toto
// BUSCAR CANCIONES: debe permitir ingresar el nombre de une artiste y mostrar una lista con todas sus canciones que(hay ingresadas)
// LISTAR ARTISTAS: debe mostrar una lista con todes les artistes(solo los nombres)
// SALIR: debe terminar la ejecución del programa

// defino las variables dinámicas
let canciones = []; // la lista de canciones
let ingresoNuevo = []; // lo que ingresa el usuario
let busqueda = ""; // string de busqueda creado por el usuario
let busquedaMensaje = ""; // string de busqueda para MENSAJE
let mensajeBusqueda = ""; // para escribir artista y canción buscada
let quiereSeguir = true; // variable bandera
let descripcion = ""; // variable para describir lo que hizo
let artistaExiste = false;

// defino el mensaje para mostrar todo el array
let muestroArray = "";

// defino el mensaje de opciones
const opciones = `Elija una opción:
1- AGREGAR CANCION
2- BUSCAR ARTISTAS
3- VER LISTA
4- SALIR`;



while (quiereSeguir) {

    let accion = prompt(opciones);

    switch (accion) {
        case "1":

            ingresoNuevo = prompt("Ingresar la canción, seguida del artista; separado por una coma").split(',');
            ingresoNuevo = (ingresoNuevo[1] + "," + ingresoNuevo[0]).split(","); // invierto el orden

            // recorro la lista buscando si YA existe el artista
            if (canciones.length > 0) { // solo si la lista tiene algún contenido
                for (i = 0; i < canciones.length; i++) {
                    if (canciones[i][0] === ingresoNuevo[0]) { // si el artista existe
                        canciones[i].push(ingresoNuevo[1]); // le agrego la canción al artista
                        artistaExiste = true; // para que no corra el IF de "artistaExiste"
                    }

                }
            }
            // else {
            //     canciones.push(ingresoNuevo); // le agrego el array entero, que contiene artista y canción
            // }
            if (!artistaExiste) { // si el artista no existe
                canciones.push(ingresoNuevo); // le agrego el array entero, que contiene artista y canción
            }
            descripcion = `Agregó la canción ${ingresoNuevo[1]}, artista ${ingresoNuevo[0]} a la lista.\n`;
            artistaExiste = false; // lo vuelvo a false, para que no corra en proxima iteración
            break

        case "2":
            busqueda = prompt("Escriba el artista que desea listar");
            // recorro la lista buscando si existe el artista
            for (let i = 0; i < canciones.length; i++) {
                if (canciones[i][0] === busqueda) { // existe el artista
                    descripcion = `Se encontró a ${busqueda} en la lista.\n`
                    busquedaMensaje = "\n---------------------\nARTISTA\n" + canciones[i][0] + "\n---------------------\nCANCIONES\n"; // reseteo busqueda
                    // bucle para recorrer el array y armar el mensaje de la lista
                    for (let j = 1; j < canciones[i].length; j++) {
                        busquedaMensaje += canciones[i][j] + "\n";
                    }
                    artistaExiste = true;
                }
            }

            descripcion += busquedaMensaje;

            if (artistaExiste === false) {
                descripcion = `Lo siento, no se encontró a ${busqueda} en la lista.\n`
            }

            artistaExiste = false; // lo vuelvo a false, para que no corra en proxima iteración
            break

        case "3":
            // bucle para recorrer el array y luego mostrarlo
            muestroArray = ""; // reseteo muestroArray
            for (let i = 0; i < canciones.length; i++) {
                for (let j = 0; j < canciones[i].length; j++) {
                    if (j === 0) {
                        muestroArray += "\n---------------------\nARTISTA\n" + canciones[i][j] + "\n---------------------\nCANCIONES\n";
                    } else {
                        muestroArray += canciones[i][j] + "\n";
                    }
                }
                muestroArray += "\n\n";
            }

            descripcion = `Eligió VER LISTA\n${muestroArray}\n`;
            break

        case "4":
            alert(`Eligió SALIR\nAdios!`);
            quiereSeguir = false;

            break

        default:
            descripcion = "No se eligió una acción válida.\n";
            break
    }

    // ¿Quiere seguir?
    if (quiereSeguir) {
        quiereSeguir = confirm(`${descripcion} ¿Desea realizar otra acción?`)
        if (!quiereSeguir) {
            alert(`Eligió SALIR\nAdios!`);
        }
    }
}