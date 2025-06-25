const saludo = () => console.log('Hola mundo')
const saludar = (nombre) => `Hola ${nombre}`

const sumar = (n1 = 0, n2 = 0, n3 = 0) => {
  const suma = n1 + n2 + n3
  return suma
}

const multiplicar = (n1 = 1, n2 = 1, n3 = 1) => n1 * n2 * n3

saludo()
console.log(saludar('Juan'))
console.log(saludar('Maria'))

console.log(multiplicar(2, 3))
console.log(multiplicar(2, 3, 4))

console.log(sumar(2, 3))
console.log(sumar(2, 3, 4))

const obtenerFechaActual = () => {
 const fecha = new Date()
 return fecha.toLocaleDateString() + " " + fecha.toLocaleTimeString()
}

console.log(obtenerFechaActual())
