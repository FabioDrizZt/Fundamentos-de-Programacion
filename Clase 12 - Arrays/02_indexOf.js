// Indice de la primera aparicion de un elemento

const numeros = [1, 2, 3, 4, 5, 9, 5, 10, 9]
//               0  1  2  3  4  5  6  7   8
const indice5 = numeros.indexOf(5);
console.log({indice5})
const indice9 = numeros.indexOf(9);
console.log({indice9})
const indice8 = numeros.indexOf(8);
console.log({indice8})

// Indice de la ultima aparicion de un elemento
const ultimaIndice = numeros.lastIndexOf(5);
console.log({ultimaIndice})
const ultimaIndice2 = numeros.lastIndexOf(9);
console.log({ultimaIndice2})    
const ultimoIndice8 = numeros.lastIndexOf(8);
console.log({ultimoIndice8})

// include 
const include5 = numeros.includes(5);
console.log({include5})
const include9 = numeros.includes(9);
console.log({include9})
const include8 = numeros.includes(8);
console.log({include8})