const persona = {
  nombre: 'Juan',
  edad: 30,
  sexo: 'Masculino'
}

console.log(persona)
console.table(persona)
// Acceso a los valores del objeto con .
console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.sexo)
// Acceso a las claves del objeto []
console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.sexo)
console.log('--- con for in ---')
for (const clave in persona) {
  console.log(`${clave}: ${persona[clave]}`)
}

// Se puede utilizar para recorrer arrays, pero no es recomendable
const comidas = ['Manzana', 'Banana', 'Cereza', 'Damasco']
comidas.vegetariano = true
comidas.propExtra = 'Extra'

for (const clave in comidas) {
  console.log(`${clave}: ${comidas[clave]}`)
}
