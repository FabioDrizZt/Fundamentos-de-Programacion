const nombre = 'Juan'
const apellido = 'Perez'
console.log(saludo(nombre, apellido))
console.log(saludo(apellido, nombre))
console.log(saludo('Maria', 'Rodriguez'))
console.log(saludo('Pedro', 'Sanchez'))
console.log(saludo())

function saludo (nombre, apellido) {
  return 'Hola ' + nombre + ' ' + apellido
}
