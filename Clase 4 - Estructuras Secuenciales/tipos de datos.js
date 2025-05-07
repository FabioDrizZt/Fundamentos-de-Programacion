// Tipos de datos

// Number (número)
let edad = 37
edad = 35
console.log('La edad de la persona es', edad);

let deuda = -1000
console.log('La deuda de la persona es ' + deuda);

let precio = 10.515
console.log('El precio de el articulo es: $' + precio);

// String (cadena de caracteres)
let nombre
nombre = "Fabio" // comillas dobles
console.log("El 'nombre' de la persona es " + nombre);

let apellido = 'Argañaraz' // comillas simples
console.log('El "apellido" de la persona es', apellido);

console.log(`El "nombre" del jugador es ${nombre} y el 'apellido' es ${apellido}`);
console.log(`El precio del jugador es $${2000 + 1000 + 0.95} pesos`);

let corazon = "♥"
console.log(corazon);
let felicidad = "😁😀😄"
console.log(felicidad);

// Boolean (booleano)
let esVerdadero = 1 > 0 // true
console.log({ esVerdadero });
let esFalso = 0 > 1 // false 
console.log({ esFalso });

// undefined (no definido)
console.log(undefined);
let variableIndifinida
console.log(variableIndifinida);

// null (no existe)
console.log(null);
let variableVacia = null
console.log(variableVacia);

// NaN (no es un número)
console.log(NaN);
console.log('diez' - 10);
console.log('diez' / 10);
console.log('10' + 10);


// typeof
console.log(typeof NaN)
console.log(typeof 'diez')
console.log(typeof 10);
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);

// Object (objeto)
let persona = {
  nombre: "Fabio",
  edad: 37,
  precio: 10.515,
  direccion: {
    calle: "Av. Juan XXIII",
    numero: 123,
    ciudad: "Buenos Aires"
  },
  tieneLicencia: true
}

console.log(persona);
console.log(persona.nombre);
console.log(persona['nombre']);
const propiedad = 'nombre'
console.log(persona[propiedad]);
console.log(typeof persona);

// Array (arreglo/lista/vector)
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.table(numeros);
console.log(numeros[0]);
let frutas = ['manzana', 'pera', 'lima', 'anana']
console.log(frutas);
console.log(frutas[0]);
let arregloHeterogeneo = [1, 'dos', true, false, undefined, null, NaN]
console.log(arregloHeterogeneo);
let arregloDeObjetos = [
  { nombre: "Fabio", edad: 37 },
  { nombre: "Maria", edad: 30 },
  { nombre: "Pedro", edad: 25 }
]
console.table(arregloDeObjetos);
console.log(typeof arregloDeObjetos);

// Function (función)

function saludar() {
  console.log('Hola mundo!');
  console.log('Hola mundo!');
  console.log('Hola mundo!');
  console.log('Hola mundo!');
}

saludar()

console.log(typeof saludar());