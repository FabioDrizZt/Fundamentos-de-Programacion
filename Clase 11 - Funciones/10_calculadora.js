const suma = (n1 = 0, n2 = 0) => n1 + n2
const resta = (n1 = 0, n2 = 0) => n1 - n2
const multiplicacion = (n1 = 1, n2 = 1) => n1 * n2
const division = (n1 = 1, n2 = 1) => n1 / n2

const calculadora = (operacion, n1 = 0, n2 = 0) => {
  if (typeof operacion === 'function'){
    return operacion(n1, n2)
  }
  return "Operacion debe ser una funcion"
}

console.log(typeof suma)
console.log(typeof resta)
console.log("Suma: " + calculadora(suma, 2, 3))
console.log("Resta: " + calculadora(resta, 2, 3))
console.log("division: " + calculadora(division, 4, 2))
console.log("multiplicacion: " + calculadora(multiplicacion, 2, 3))
console.log("exponenciación: " + calculadora((n1,n2) => n1 ** n2, 2, 3))
