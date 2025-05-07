console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

// toFixed
let precioDeCompra = 100.515
let porcentajeGanancia = 0.50 // ganancia del 50%
let ganancia = precioDeCompra * porcentajeGanancia
console.log(ganancia);
let precioDeVenta = precioDeCompra + ganancia
console.log(precioDeVenta.toFixed(2));
console.log(precioDeVenta.toPrecision(4));

// Objeto Math

console.log(Math.PI); // Devuelve el valor de pi
console.log(Math.E); // Devuelve el valor de e
console.log(Math.LN2); // Devuelve el logaritmo natural de 2

var absoluteValue = Math.abs(-5); // Devuelve 5
var squareRoot = Math.sqrt(16); // Devuelve 4
var power = Math.pow(2, 3); // Devuelve 8 (2^3)
var roundedDown = Math.floor(4.9); // Devuelve 4
var roundedUp = Math.ceil(4.1); // Devuelve 5
var rounded = Math.round(4.5); // Devuelve 5
var randomNum = Math.random(); // Devuelve un número aleatorio entre 0 y 1

console.log(125 ** (1/3)); // Devuelve 4
console.log(parseInt(Math.random() * 100));
console.log(parseInt(Math.random() * 100));
console.log(parseInt(Math.random() * 100));
console.log(parseInt(Math.random() * 100)); // Devuelve un número aleatorio entre 0 y 100