const { Libro, Usuario } = require('./clases.js');

// ======================================
// DATOS INICIALES DE LIBROS
// ======================================
const librosIniciales = [
    {
        id: 1,
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        categoria: "Literatura",
        disponibles: 5,
        total: 5
    },
    {
        id: 2,
        titulo: "JavaScript para principiantes",
        autor: "John Smith",
        categoria: "Programación",
        disponibles: 6,
        total: 6
    },
    {
        id: 3,
        titulo: "El Quijote",
        autor: "Miguel de Cervantes",
        categoria: "Clásicos",
        disponibles: 3,
        total: 3
    },
    {
        id: 4,
        titulo: "Historia de la ciencia",
        autor: "Carl Sagan",
        categoria: "Ciencia",
        disponibles: 2,
        total: 2
    },
    {
        id: 5,
        titulo: "El principito",
        autor: "Antoine de Saint-Exupéry",
        categoria: "Infantil",
        disponibles: 7,
        total: 7
    }
];

// ======================================
// DATOS INICIALES DE USUARIOS
// ======================================
const usuariosIniciales = [
    {
        id: 1,
        nombre: "Ana García",
        email: "ana@universidad.edu",
        tipo: "estudiante"
    },
    {
        id: 2,
        nombre: "Dr. Carlos López",
        email: "carlos@universidad.edu",
        tipo: "profesor"
    },
    {
        id: 3,
        nombre: "María Rodríguez",
        email: "maria@estudiante.edu",
        tipo: "estudiante"
    },
    {
        id: 4,
        nombre: "Luis Martínez",
        email: "luis@estudiante.edu",
        tipo: "estudiante"
    }
];

// ======================================
// CATEGORÍAS Y TIPOS
// ======================================
const categoriasDisponibles = [
    "Literatura",
    "Programación",
    "Ciencia",
    "Historia",
    "Clásicos",
    "Infantil"
];

const tiposUsuario = [
    "estudiante",
    "profesor"
];

function cargarLibrosIniciales() {
    return librosIniciales.map(libro => new Libro(
        libro.id,
        libro.titulo,
        libro.autor,
        libro.categoria,
        libro.disponibles,
        libro.total
    ));
}

function cargarUsuariosIniciales() {
    return usuariosIniciales.map(usuario => new Usuario(
        usuario.id,
        usuario.nombre,
        usuario.email,
        usuario.tipo
    ));
}

function obtenerCategorias() {
    return categoriasDisponibles;
}

function obtenerTiposUsuario() {
    return tiposUsuario;
}

module.exports = {
    cargarLibrosIniciales,
    cargarUsuariosIniciales,
    obtenerCategorias,
    obtenerTiposUsuario
};