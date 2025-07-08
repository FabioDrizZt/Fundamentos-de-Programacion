const arrayVacio = [];

console.log(arrayVacio);
console.log(typeof arrayVacio);
console.log(Boolean(arrayVacio));

// Valores booleanos falsos
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));

// Arrays heterogeneos: cada elemento puede ser de cualquier tipo
const miArray = ["Star Wars", true, 23, ["anana"], { nombre: "Fabio" }];

// Arrays homogeneos: todos los elementos deben ser del mismo tipo
let pelisFavoritas = [
  "Star Wars",
  "Star Trek",
  "Batman",
  "Superman",
  "Spider-Man",
  "Fantasia",
];

console.log(pelisFavoritas)
console.table(pelisFavoritas)
console.log(`Peli en indice 0 es: ${pelisFavoritas[0]}`);
console.log(`Peli en indice 1 es: ${pelisFavoritas[1]}`);
console.log(`Peli en indice 2 es: ${pelisFavoritas[2]}`);
// ... 
console.log(`Peli en indice 5 es: ${pelisFavoritas[5]}`);
console.log(`Peli en indice 6 es: ${pelisFavoritas[6]}`);
console.log(`Peli en indice -1 es: ${pelisFavoritas[-1]}`);

console.log(`Peli en indice -1 o ultima es: ${pelisFavoritas.at(-1)}`);
console.log(`Peli en indice -2 o anteultima es: ${pelisFavoritas.at(-2)}`);
console.log(`Peli en indice 0 es: ${pelisFavoritas.at(0)}`);
console.log(`Peli en indice 1 es: ${pelisFavoritas.at(1)}`);
console.log(`Peli en indice 2 es: ${pelisFavoritas.at(2)}`);

console.log(`cantidad de elementos: ${pelisFavoritas.length}`);

for (let index = 0; index < pelisFavoritas.length; index++) {
    const peli = pelisFavoritas[index];
    console.log(`peli en indice ${index} es: ${peli}`);
}

