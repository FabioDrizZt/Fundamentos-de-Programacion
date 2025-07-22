const frutas = [
  { nombre: "Manzana", precio: 100, cantidad: 5 },
  { nombre: "Banana", precio: 50, cantidad: 10 },
  { nombre: "Naranja", precio: 80, cantidad: 8 },
  { nombre: "Pera", precio: 120, cantidad: 3 },
  { nombre: "Uva", precio: 200, cantidad: 2 },
  { nombre: "kiwi", precio: 300, cantidad: 5 },
  { nombre: "sandía", precio: 150, cantidad: 4 },
  { nombre: "mango", precio: 250, cantidad: 6 },
  { nombre: "piña", precio: 180, cantidad: 7 },
  { nombre: "cereza", precio: 350, cantidad: 1 },
];

// const nombresFrutas = []
// frutas.forEach(fruta => {
//    nombresFrutas.push(fruta.nombre)
// })

// const nombresFrutas = frutas.map(function(fruta) {
//    return fruta.nombre
// })

// const nombresFrutas = frutas.map(fruta => {
//    return fruta.nombre
// })

const nombresFrutas = frutas.map((fruta) => fruta.nombre);

console.log(nombresFrutas);

// const preciosFrutasConInflacion = frutas.map(frutas => {
//     return frutas.precio * 1.20 // frutas.precio + frutas.precio * 0.20
// })

// const preciosFrutasConInflacion = frutas.map((frutas) => {
//   const frutasConInflacion = {
//     nombre: frutas.nombre,
//     precio: frutas.precio * 1.2,
//     cantidad: frutas.cantidad,
//   };
//   return frutasConInflacion
// });

// const preciosFrutasConInflacion = frutas.map((frutas) => {
//   const frutasConInflacion = { ...frutas };
//   frutasConInflacion.precio = frutas.precio * 1.2;
//   return frutasConInflacion;
// });

// const preciosFrutasConInflacion = frutas.map((frutas) => {
//   const frutasConInflacion = { ...frutas, precio: frutas.precio * 1.2 };
//   return frutasConInflacion;
// });

const preciosFrutasConInflacion = frutas.map((frutas) => {
  return { ...frutas, precio: frutas.precio * 1.2 };
});

console.log(preciosFrutasConInflacion);
