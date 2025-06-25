console.log(saludo('Maria', 'Rodriguez'))
console.log(saludo('Pedro'))
console.log(saludo())

function saludo (nombre = 'Visitante', apellido = 'Anonimo') {
  return 'Hola ' + nombre + ' ' + apellido
}
