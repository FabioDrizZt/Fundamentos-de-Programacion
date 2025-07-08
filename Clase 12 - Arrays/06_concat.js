// unir dos arrays

const pelisFavoritas = [
  "Star Wars",
  "Star Trek",
  "Batman",
  "Superman",
  "Spider-Man",
  "Fantasia",
];

const pelisFavoritas2 = [
  "Avengers",
  "Iron Man",
  "Thor",
];

console.log(pelisFavoritas);   
console.log(pelisFavoritas2);

const unionPelisFavoritas = pelisFavoritas.concat(pelisFavoritas2);
console.log(unionPelisFavoritas);

// unir con ... (spread operator)
const unionPelisFavoritas2 = [...pelisFavoritas, ...pelisFavoritas2];
console.log(unionPelisFavoritas2);