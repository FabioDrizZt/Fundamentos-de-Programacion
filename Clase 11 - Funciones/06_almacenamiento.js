function sumar (n1 = 0, n2 = 0, n3 = 0) { // <-- parametros n1, n2, n3
  return n1 + n2 + n3
}
function multiplicar (n1 = 1, n2 = 1, n3 = 1) { // <-- parametros
  return n1 * n2 * n3
}

let suma = sumar(2, 3) // <-- argumentos 2,3
console.log(suma)
suma = sumar(5, 6)// <-- argumentos 5,6
console.log(suma)
suma = sumar(5)// <-- argumento
console.log(suma)
suma = sumar(5, 5, 5) // <-- argumentos
console.log(suma)

let mult = multiplicar(2, 3)
console.log('2*3=' + mult)
mult = multiplicar(5, 6)
console.log('5*6=' + mult)
mult = multiplicar(5)
console.log('5=' + mult)
mult = multiplicar(5, 5, 5)
console.log('5*5*5=' + mult)
console.log(`5*5*5=${mult}`)
