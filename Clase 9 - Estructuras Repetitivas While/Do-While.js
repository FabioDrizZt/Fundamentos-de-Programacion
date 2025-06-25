const prompt = require('prompt-sync')()
let edad

do {
  edad = prompt('Dime tu edad: ')
  if (edad < 0) {
    console.log('La edad no puede ser negativa')
  } else if (edad > 110) {
    console.log('La edad no puede ser mayor a 110')
  }
} while (edad < 0 || edad > 110)

if (edad < 18) {
  console.log('Eres menor de edad')
} else {
  console.log('Eres mayor de edad')
}
