// Operadores Lógicos

// operacion binaria de multiplicación
// 1: true
// 0: false
// 1*1 = 1
// 1*0 = 0
// 0*1 = 0
// 0*0 = 0

// &&: AND lógico - Y lógico
// Solo devuelve true si ambos operandos son verdaderos
console.log(true && true) // true
console.log(true && false) // false
console.log(false && true) // false
console.log(false && false) // false
const tieneLicencia = true
const sabeManejar = true
const tieneCedulaVerde = true
console.log(tieneLicencia && sabeManejar && tieneCedulaVerde) // true
console.log(tieneLicencia && sabeManejar) // true

// operacion binaria de suma
// 1: true
// 0: false
// 1+1 = 1
// 1+0 = 1
// 0+1 = 1
// 0+0 = 0

// ||: OR lógico - O lógico
// Solo devuelve falso ambos operandos son falsos
console.log(true || true) // true
console.log(true || false) // true
console.log(false || true) // true
console.log(false || false) // false
const esFinDeSemana = true
const estoyDeVacaciones = true
console.log(esFinDeSemana || estoyDeVacaciones) // true

// !: NOT lógico
// Devuelve true si el operando es falso, y viceversa
console.log(!true) // false
console.log(!false) // true
const estasLloviendo = false
console.log(!estasLloviendo) // true --> esta agradable

// Se utilizan en combinación con los operadores lógicos y comparativos
const edad = 25
console.log(edad >= 18 && edad < 110) // true --> tiene edad entre 18 y 99
// console.log(edad < 18 || edad >= 110); // false --> edad fuera de rango
console.log(!(edad >= 18 && edad < 110))

{
  // bloque de codigo
}
