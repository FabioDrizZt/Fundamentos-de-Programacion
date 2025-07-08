// Slice: significa corte
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
const numeros = [1, 2, 3, 4, 5, 9, 10]
//               0  1  2  3  4  5  6
const slice1 = numeros.slice(0, 3);
console.log({slice1})
const slice2 = numeros.slice(3, 5);
console.log({slice2})
const slice3 = numeros.slice(3);
console.log({slice3})