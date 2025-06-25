const frutas = ['Manzana', 'Banana', 'Cereza', 'Damasco']

for (const fruta of frutas) {
  console.log(fruta)
}

// podemos recorrer un string
const texto = 'Hola, mundo!'
for (const letra of texto) {
  console.log(letra)
}

const producto = {
  nombre: 'iPhone',
  precio: 1000,
  stock: 10
}

const claves = Object.keys(producto)
console.log(claves)
for (const clave of claves) {
  console.log(`${clave}: ${producto[clave]}`)
}
