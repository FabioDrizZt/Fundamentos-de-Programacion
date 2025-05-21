/* Traductor Condicional
Usando la estructura switch, crea un programa en el que, si un usuario ingresa "casa",
  "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma inglés.

En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le
informe que la palabra ingresada es incorrecta. */
// librería para usar prompt
import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });
// instalar la librería con el comando:
// npm install prompt-sync

const palabra = prompt("Ingrese una palabra: ")
switch (palabra) {
  case "casa": console.log("house"); break;
  case "perro": console.log("dog"); break;
  case "pelota": console.log("ball"); break;
  case "árbol": console.log("tree"); break;
  case "genio": console.log("genius"); break;
  default: console.log("Palabra incorrecta");
}