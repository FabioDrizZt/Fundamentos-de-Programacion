const prompt = require('prompt-sync')()
// Mostrar solo los numeros impares entre 1 y 100
/* for (let i = 1; i <= 100; i += 2) {
  console.log(i);
}
 */

/* for (let i = 1; i <= 10; i++) {
    console.log('El número es ' + i);
  if (i === 5) {
    console.log('¡Encontramos el 5! Saliendo del bucle...');
    break; // Termina el bucle aquí
  }
}

console.log('Fin del programa.'); */

// Validar contraseña con intentos limitados
/* const maxIntentos = 3;
const contraseñaCorrecta = "123456";
let accesoConcedido = false
for (let intentos = 1; intentos <= maxIntentos; intentos++) {
  const contraseña = prompt("Escriba la contraseña: ");
  if (contraseña === contraseñaCorrecta) {
    console.log("Contraseña Correcta");
    accesoConcedido = true;
    break;
  } else {
    console.log(`Intento ${intentos}/${maxIntentos} fallido`);
  }
}

if (accesoConcedido) {
  console.log("Acceso concedido");
} else {
  console.log("Acceso denegado");
} */

// Adivinar el numero secreto
const numeroSecreto = Math.floor(Math.random() * (10 - 1)) + 1
const maxIntentos = 3
for (let intentos = 1; intentos <= maxIntentos; intentos++) {
  const numero = parseInt(prompt('Adivine el número secreto:'))
  if (isNaN(numero)) {
    console.log('El número ingresado no es un número')
    continue
  }

  if (numero === numeroSecreto) {
    console.log('¡Ganaste! El número secreto es ' + numero)
    break
  } else if (numeroSecreto > numero) {
    console.log('El número secreto es mayor')
  } else {
    console.log('El número secreto es menor')
  }
}
