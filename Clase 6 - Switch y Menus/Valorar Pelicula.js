/*
Valoración de Películas

Usando la estructura switch, pedile al usuario que valore la película que acaba de ver en:

● Muy Mala.
● Mala.
● Mediocre.
● Buena.
● Muy buena.

Acompaña cada valoración con un mensaje que indique si te lamentas o te alegras
por su valoración.

Por ejemplo, "Calificaste la película como Muy Mala. Lo lamentamos mucho.".
En caso de que ingresara un valor distinto, mostrale el mensaje: "Ingresaste un valor
inválido".

Cuando el usuario haya valorado la película, agradecele su visita. */

import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

const pelicula = parseInt(prompt("¿Qué valoras la película? \n1. Muy Mala \n2. Mala \n3. Mediocre \n4. Buena \n5. Muy Buena \nIngrese el número de la opción: "));
let calificacion = "";
switch (pelicula) {
  case 1: calificacion = "Muy Mala. Lo lamentamos mucho."; break;
  case 2: calificacion = "Mala. Lo lamentamos."; break;
  case 3: calificacion = "Mediocre."; break;
  case 4: calificacion = "Buena. Lo agradecemos."; break;
  case 5: calificacion = "Muy Buena. Lo agradecemos mucho."; break;
  default: console.log("Ingresaste un valor inválido");
}

console.log(calificacion ? "Calificaste la película como " + calificacion : "Fin del programa.");