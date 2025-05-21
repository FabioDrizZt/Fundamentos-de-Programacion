/* Calificar a estudiantes

Escribe un algoritmo que permita al usuario ingresar el nombre del estudiante 
y la nota del examen final. Asignar la calificación de acuerdo a las notas de la tabla,
 hacer el algoritmo y ejecutar las pruebas como se nota en la figura: */

// librería para usar prompt
import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

const nombre = prompt("Ingrese el nombre del estudiante: ");
const nota = parseInt(prompt("Ingrese la nota final: "));

let calificacion = "";
switch (nota) {
  case 10: calificacion = "Sobresaliente"; break;
  case 9: case 8: calificacion = "Distinguido"; break;
  case 7: case 6: calificacion = "Bueno"; break;
  case 5: case 4: calificacion = "Suficiente"; break;
  case 3: case 2: case 1: calificacion = "Insuficiente"; break;
  case 0: calificacion = "Reprobado"; break;
  default: calificacion = "Nota inválida"; break;
}

console.log(`El estudiante ${nombre} fue calificado ${calificacion}`);