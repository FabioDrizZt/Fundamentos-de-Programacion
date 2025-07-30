function pausar(){
  const prompt = require('prompt-sync')({ sigint: true });
  prompt("Presione Enter para continuar...");
}

const buscarLibrosPorTitulo = (libros, titulo) => {
  return libros.filter(libro => libro.titulo.includes(titulo));
}

const buscarLibrosPorCategoria = (libros, categoria) => {
  return libros.filter(libro => libro.categoria === categoria);
}

module.exports = {
  pausar,
  buscarLibrosPorTitulo,
  buscarLibrosPorCategoria
}