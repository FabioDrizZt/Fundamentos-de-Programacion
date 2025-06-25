// Tipos de datos

// Number (número)
let edad = 37
edad = 35
console.log('La edad de la persona es', edad)

const deuda = -1000
console.log('La deuda de la persona es ' + deuda)

const precio = 10.515
console.log('El precio de el articulo es: $' + precio)

// String (cadena de caracteres)
let nombre
nombre = 'Fabio' // comillas dobles
console.log("El 'nombre' de la persona es " + nombre)

const apellido = 'Argañaraz' // comillas simples
console.log('El "apellido" de la persona es', apellido)

console.log(`El "nombre" del jugador es ${nombre} y el 'apellido' es ${apellido}`)
console.log(`El precio del jugador es $${2000 + 1000 + 0.95} pesos`)

const corazon = '♥'
console.log(corazon)
const felicidad = '😁😀😄'
console.log(felicidad)

// Boolean (booleano)
const esVerdadero = 1 > 0 // true
console.log({ esVerdadero })
const esFalso = 0 > 1 // false
console.log({ esFalso })

// undefined (no definido)
console.log(undefined)
let variableIndifinida
console.log(variableIndifinida)

// null (no existe)
console.log(null)
const variableVacia = null
console.log(variableVacia)

// NaN (no es un número)
console.log(NaN)
console.log('diez' - 10)
console.log('diez' / 10)
console.log('10' + 10)

// typeof
console.log(typeof NaN)
console.log(typeof 'diez')
console.log(typeof 10)
console.log(typeof true)
console.log(typeof false)
console.log(typeof undefined)
console.log(typeof null)

// Object (objeto)
const persona = {
  nombre: 'Fabio',
  edad: 37,
  precio: 10.515,
  direccion: {
    calle: 'Av. Juan XXIII',
    numero: 123,
    ciudad: 'Buenos Aires'
  },
  tieneLicencia: true
}

console.log(persona)
console.log(persona.nombre)
console.log(persona.nombre)
const propiedad = 'nombre'
console.log(persona[propiedad])
console.log(typeof persona)

// Array (arreglo/lista/vector)
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.table(numeros)
console.log(numeros[0])
const frutas = ['manzana', 'pera', 'lima', 'anana']
console.log(frutas)
console.log(frutas[0])
const arregloHeterogeneo = [1, 'dos', true, false, undefined, null, NaN]
console.log(arregloHeterogeneo)
const arregloDeObjetos = [
  { nombre: 'Fabio', edad: 37 },
  { nombre: 'Maria', edad: 30 },
  { nombre: 'Pedro', edad: 25 }
]
console.table(arregloDeObjetos)
console.log(typeof arregloDeObjetos)

// Function (función)

function saludar () {
  console.log('Hola mundo!')
  console.log('Hola mundo!')
  console.log('Hola mundo!')
  console.log('Hola mundo!')
}

saludar()

console.log(typeof saludar())
