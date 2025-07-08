const pelisFavoritas = [
  "Star Wars",
  "Star Trek",
  "Batman",
  "Superman",
  "Spider-Man",
  "Fantasia",
];

console.log(pelisFavoritas);

// Insertar elemento en el final
let nuevaCantidad = pelisFavoritas.push("Avengers", "Iron Man", "Thor");
console.log(pelisFavoritas);
console.log({nuevaCantidad})

// Quitar elemento desde el final
let peliEliminada = pelisFavoritas.pop(); // Elimina el ultimo elemento - "Thor"
console.log(pelisFavoritas);
console.log({peliEliminada})
console.log(pelisFavoritas.length)

// Quitar elemento desde el principio
peliEliminada = pelisFavoritas.shift(); // Elimina el primer elemento - "Star Wars"
console.log(pelisFavoritas);
console.log({peliEliminada})

// Agregar elemento al principio
nuevaCantidad = pelisFavoritas.unshift("X-Men", "Hulk", "Captain America");
console.log(pelisFavoritas);
console.log({nuevaCantidad})

// Agregar, quitar, reemplazar, todo en uno --> splice
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// Acepta 3 argumentos: posicion, cantidad de elementos a eliminar y elementos a agregar
console.log(pelisFavoritas)

// Quitar al principio - Shift
peliEliminada = pelisFavoritas.splice(0, 1);
console.log('shift')
console.log(pelisFavoritas)
console.log({peliEliminada})
// Quitar al final - Pop
peliEliminada = pelisFavoritas.splice(pelisFavoritas.length - 1, 1);
console.log('pop')
console.log(pelisFavoritas)
console.log({peliEliminada})
peliEliminada = pelisFavoritas.splice(-1, 1);
console.log('pop')
console.log(pelisFavoritas)
console.log({peliEliminada})
// Agregar al principio - Unshift
//               0  1  2  3  4  5  6
peliEliminada = pelisFavoritas.splice(0, 0, "X-Men");
console.log('unshift')
console.log(pelisFavoritas)
console.log({peliEliminada})
// Agregar al final - push
peliEliminada = pelisFavoritas.splice(pelisFavoritas.length, 0, "Avengers", "Iron Man", "Thor");
console.log('push')
console.log(pelisFavoritas)
console.log({peliEliminada})

// Insertar en el medio de un array
const numeros = [1, 2, 3, 4, 5, 9, 9, 10]
//               0  1  2  3  4  5  6
numeros.splice(5, 1,         6, 7, 8);
console.log(numeros)