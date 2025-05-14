// Operadores lógicos

// and: y
// Solo es verdadero si ambos operandos son verdaderos
console.log(true && true) // true
console.log(true && false) // false
console.log(false && true) // false
console.log(false && false) // false
const a = true
const b = false
console.log(a && b) // false
console.log(a && a) // true
console.log(b && b) // false
const esMayor = true
const tienePermisoDelPadre = false
console.log(esMayor && tienePermisoDelPadre) // false

// or: o
// solo es falso si ninguno de los operandos son verdaderos
console.log(true || true) // true
console.log(true || false) // true
console.log(false || true) // true
console.log(false || false) // false
console.log(a || b) // true
console.log(a || a) // true
console.log(b || b) // false

// not: !
console.log(!true) // false
console.log(!false) // true
console.log(!a) // false
console.log(!b) // true
