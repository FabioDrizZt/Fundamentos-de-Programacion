const frutas = [
  { nombre: "Manzana", precio: 100, cantidad: 5, color: "rojo" },
  { nombre: "Banana", precio: 50, cantidad: 10, color: "amarillo" },
  { nombre: "Naranja", precio: 80, cantidad: 8, color: "naranja" },
  { nombre: "Pera", precio: 120, cantidad: 3, color: "verde" },
  { nombre: "Uva", precio: 200, cantidad: 2, color: "morado" },
  { nombre: "kiwi", precio: 300, cantidad: 5, color: "verde" },
  { nombre: "sandía", precio: 150, cantidad: 4, color: "verde" },
  { nombre: "mango", precio: 250, cantidad: 6, color: "naranja" },
  { nombre: "piña", precio: 180, cantidad: 7, color: "amarillo" },
  { nombre: "cereza", precio: 350, cantidad: 1, color: "rojo" },
];

// const frutasCaras = [];
// frutas.forEach(f =>  f.precio > 150 ? frutasCaras.push(f) : null)

const frutasCaras = frutas.filter(fruta => fruta.precio > 150)
console.log("--- frutas caras ---");
console.table(frutasCaras);

const frutasPocoStock = frutas.filter((fruta) => fruta.cantidad < 3);
console.log("--- frutas con poco stock ---");
console.table(frutasPocoStock);

const frutasRojas = frutas.filter((fruta) => fruta.color === "rojo");
console.log("--- frutas rojas ---");
console.table(frutasRojas);

const frutasAmarillas = frutas.filter((fruta) => fruta.color === "amarillo");
console.log("--- frutas amarillas ---");
console.table(frutasAmarillas);

const frutasNaranjas = frutas.filter((fruta) => fruta.color === "naranja");
console.log("--- frutas naranjas ---");
console.table(frutasNaranjas);

const frutasVerdes = frutas.filter((fruta) => fruta.color === "verde");
console.log("--- frutas verdes ---");
console.table(frutasVerdes);
