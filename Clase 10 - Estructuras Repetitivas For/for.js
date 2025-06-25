let i
for (i = 0; i < 10; i++) {
  // console.log('index: ' + (i+1));
  console.log(`index: ${i}`)
}
console.log(`index fuera del bucle: ${i}`)
console.log('Fin del programa.')

// Decremento de i
for (let i = 10; i > 0; i--) {
  console.log(`i: ${i}`)
}
console.log('¡Despegue! 🚀')

//                  0          1          2          3          4          5          6          7          8          9
const frutas = ['Manzana', 'Banana', 'Cereza', 'Damasco']
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])
console.log(frutas[5])
console.log(frutas)
console.table(frutas)
console.log(`El array tiene ${frutas.length} elementos.`)
for (let index = 0; index < frutas.length; index++) {
  console.log(frutas[index])
}

// Tablas de multiplicación del 1 al 10 y cada una hasta el n° 12
for (let i = 1; i <= 10; i++) {
  console.log(`--- Tabla de multiplicación del ${i} ---`)
  for (let j = 1; j <= 12; j++) {
    const multiplicacion = i * j
    console.log(`${i} x ${j} = ${multiplicacion}`)
  }
}

// Buscar dos numeros que sumen 15
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    const suma = i + j
    if (suma === 15) {
      console.log(`Los números son ${i} y ${j}`)
    }
  }
}
