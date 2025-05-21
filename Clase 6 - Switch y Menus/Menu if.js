const num1 = parseFloat(prompt("Ingresa el primer número:"));
const num2 = parseFloat(prompt("Ingresa el segundo número:"));

// 1. Mostrar las opciones (podemos usar alert o console.log)
alert("Bienvenido al Mini Calculadora:\n1. Sumar dos números\n2. Restar dos números\n3. Multiplicar dos números");

// 2. Pedir al usuario que ingrese su elección
let opcion = prompt("Por favor, elige una opción (1, 2 o 3):");

// Convertimos la opción a número, ya que prompt devuelve texto
opcion = parseInt(opcion);

if (opcion === 1) {
  alert("La suma es: " + (num1 + num2));
} else if (opcion === 2) {
  alert("La resta es: " + (num1 - num2));
} else if (opcion === 3) {
  alert("La multiplicación es: " + (num1 * num2));
} else {
  alert("Opción no válida. Por favor, reinicia y elige 1, 2 o 3.");
}