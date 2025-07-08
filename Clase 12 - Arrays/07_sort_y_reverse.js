// Ordenar un array

const numeros = [51, 22, 32, 41, 25, 39, 10]
const numerosOrdenados = numeros.toSorted();
console.log({numerosOrdenados});
console.log({numeros});
numeros.sort();
console.log({numeros});

// invertir el orden de un array
const numerosInvertidos = numeros.toReversed();
console.log({numerosInvertidos});
console.log({numeros})
numeros.reverse();
console.log({numeros})

// ordenar arrays de strings
const nombres = ["Fabio", "Anana", "Marcos", "Jorge", "Juan"]
const nombresOrdenados = nombres.toSorted();
console.log({nombresOrdenados});
console.log({nombres})
nombres.sort();
console.log({nombres})

// invertir el orden de un array de strings
const nombresInvertidos = nombres.toReversed();
console.log({nombresInvertidos});
console.log({nombres})
nombres.reverse();  
console.log({nombres})