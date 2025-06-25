const nombreUsuario = 'Juan'

const sumar = function (n1 = 0, n2 = 0, n3 = 0) {
  const suma = n1 + n2 + n3
  console.log('Hola ' + nombreUsuario)
  console.log('Suma dentro de la funcion: ' + suma)
}

sumar(2, 3)
// console.log("Suma fuera de la funcion: " + suma);
console.log('Hola ' + nombreUsuario)
