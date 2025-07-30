const { obtenerCategorias } = require('./datos.js');

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

const validarTitulo = (titulo) => {
  // validar que el titulo tenga al menos 3 caracteres
  return titulo.length >= 3;
}

const validarAutor = (autor) => {
  // validar que el autor tenga al menos 3 caracteres
  return autor.length >= 3;
}

const validarCategoria = (categoria) => {
  // validar que la categoria sea una de las disponibles
  return obtenerCategorias().includes(categoria);
}

const validarTotal = (total) => {
  // validar que el total sea un número positivo
  const num = parseInt(total);
  return !isNaN(num) && num > 0 && num < 100
}

module.exports = {
  pausar,
  buscarLibrosPorTitulo,
  buscarLibrosPorCategoria,
  validarTitulo,
  validarAutor,
  validarCategoria,
  validarTotal
}