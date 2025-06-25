let vuelta = 1
while (vuelta <= 5) {
  console.log('Dando la vuelta número ' + vuelta)
  vuelta++
}

let index = 1
let suma = 0
let contador = 0

while (index <= 100) {
  console.log('iteración n°: ' + index)
  suma += index // suma = suma + index
  index += 2
  contador++
}

console.log('La suma de los numeros pares del 1 al 100 es: ' + suma)
const promedio = suma / contador
console.log('El promedio de los numeros pares del 1 al 100 es: ' + promedio)
