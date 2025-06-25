// Operadores Comparativos

console.log('1' - 1) // 0 - js tiene tipado debil

// ==: Igualdad
console.log(1 === 1) // true
console.log(1 == '1') // true
console.log(1 === 2) // false
const contraseñaCorrecta = 'secreto'
const contraseñaIngresada = 'secreto'
console.log(contraseñaCorrecta == contraseñaIngresada) // true

// ===: Igualdad con tipado
console.log(1 === 1) // true
console.log(1 === '1') // false
console.log(1 === 2) // false
console.log(contraseñaCorrecta === contraseñaIngresada) // true

// !=: Desigualdad o Inequalidad
console.log(1 !== 1) // false
console.log(1 != '1') // false
console.log(1 !== 2) // true
console.log(contraseñaCorrecta != contraseñaIngresada) // false

// !==: No igualdad con tipado o desigualdad estricta
console.log(1 !== 1) // false
console.log(1 !== '1') // true
console.log(1 !== 2) // true
console.log(contraseñaCorrecta !== contraseñaIngresada) // false

// >: Mayor que
console.log(1 > 1) // false
console.log(1 > '1') // false
console.log(1 > 2) // false
console.log(2 > 1) // true
const nivelAgua = 30
const nivelCritico = 20
console.log(nivelAgua > nivelCritico) // true
console.log('manzana' > 'pera') // false
console.log('manzana' > 'mango') // true

// >=: Mayor o igual que
console.log(1 >= 1) // true
console.log(1 >= '1') // true
console.log(1 >= 2) // false
console.log(2 >= 1) // true
console.log('manzana' >= 'pera') // false
console.log('manzana' >= 'mango') // true

// <=: Menor o igual que
console.log(1 <= 1) // true
console.log(1 <= '1') // true
console.log(1 <= 2) // true
console.log(2 <= 1) // false
console.log('manzana' <= 'pera') // true
