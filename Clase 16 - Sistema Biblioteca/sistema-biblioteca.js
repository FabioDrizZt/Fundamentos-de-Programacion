const prompt = require('prompt-sync')({ sigint: true });
const funciones = require('./funciones.js');
const {
    cargarLibrosIniciales,
    cargarUsuariosIniciales,
    obtenerCategorias,
    obtenerTiposUsuario
} = require('./datos.js');

// ======================================
// VARIABLES GLOBALES DEL SISTEMA
// ======================================

let libros = []
let usuarios = []
let prestamos = []
let sistemaActivo = true;

// ======================================
// FUNCIÓN PRINCIPAL
// ======================================

function iniciarSistema() {
    console.log("🏪 INICIANDO SISTEMA DE BIBLIOTECA...")

    // Cargar datos iniciales
    libros = cargarLibrosIniciales();
    usuarios = cargarUsuariosIniciales();

    // Mostrar menú principal
    while (sistemaActivo) {
        mostrarMenuPrincipal();
    }

    console.log("👋 ¡Gracias por usar el Sistema de Biblioteca!");
}

// ======================================
// MENÚS DEL SISTEMA
// ======================================

function mostrarMenuPrincipal() {
    console.clear()
    console.log("================================");
    console.log("📚   SISTEMA DE BIBLIOTECA");
    console.log("================================");
    console.log("1. Gestión de Libros");
    console.log("2. Gestión de Usuarios");
    console.log("3. Gestión de Prestamos");
    console.log("4. Reportes y Estadísticas");
    console.log("5. Configuración");
    console.log("0. Salir del Sistema");
    console.log("================================");

 const opcion = prompt("Seleccione una opción: ");
    
    switch (opcion) {
        case '1':
            menuLibros();
            break;
        case '2':
            menuUsuarios();
            break;
        case '3':
            menuPrestamos();
            break;
        case '4':
            menuReportes();
            break;
        case '5':
            menuConfiguracion();
            break;
        case '0':
            sistemaActivo = false;
            break;
        default:
            console.log("❌ Opción no válida. Intente nuevamente.");
            funciones.pausar();
    }
}

function menuLibros() {
  let volver = false;
  do {
    console.clear()
    console.log("================================");
    console.log("📚   GESTIÓN DE LIBROS");
    console.log("================================");
    console.log("1. Listar Libros");
    console.log("2. Buscar Libros");
    console.log("3. Agregar Libros");
    console.log("0. Volver");
    console.log("================================");

    const opcion = prompt("Seleccione una opción: ");
    
    switch (opcion) {
        case '1':
            listarLibros();
            break;
        case '2':
            buscarLibros();
            break;
        case '3':
            agregarLibros();
            break;
        case '0':
            volver = true;
            break;
        default:
            console.log("❌ Opción no válida. Intente nuevamente.");
            funciones.pausar();
    }
  } while (!volver);
}

function listarLibros() {
  console.log("🚧 Función en desarrollo...");
  funciones.pausar();
}

function buscarLibros() {
  console.log("🚧 Función en desarrollo...");
  funciones.pausar();
}

function agregarLibros() {
  console.log("🚧 Función en desarrollo...");
  funciones.pausar();
}

function menuUsuarios() {
  let volver = false;
  do {
    console.clear()
    console.log("================================");
    console.log("👥   GESTIÓN DE USUARIOS");
    console.log("================================");
    console.log("1. Listar Usuarios");
    console.log("2. Buscar Usuario");
    console.log("3. Agregar Usuario");
    console.log("0. Volver");
    console.log("================================");

    const opcion = prompt("Seleccione una opción: ");
    
    switch (opcion) {
        case '1':
            listarUsuario();
            break;
        case '2':
            buscarUsuario();
            break;
        case '3':
            agregarUsuario();
            break;
        case '0':
            volver = true;
            break;
        default:
            console.log("❌ Opción no válida. Intente nuevamente.");
            funciones.pausar();
    }
  } while (!volver);
}

function listarUsuario() {
  console.log("🚧 Función en desarrollo...");
  funciones.pausar();
}

function buscarUsuario() {
  console.log("🚧 Función en desarrollo...");
  funciones.pausar();
}

function agregarUsuario() {
  console.log("🚧 Función en desarrollo...");
  funciones.pausar();
}

function menuPrestamos() {
   let volver = false;
  do {
    console.clear()
    console.log("================================");
    console.log("📋   GESTIÓN DE PRESTAMOS");
    console.log("================================");
    console.log("1. Realizar un Prestamo");
    console.log("2. Devolver un libro");
    console.log("3. Listar Prestamos Activos");
    console.log("4. Ver Prestamos Vencidos");
    console.log("0. Volver");
    console.log("================================");

    const opcion = prompt("Seleccione una opción: ");
    
    switch (opcion) {
        case '1':
            realizarPrestamo();
            break;
        case '2':
            devolverLibro();
            break;
        case '3':
            listarPrestamosActivos();
            break;
        case '4':
            mostrarPrestamosVencidos();
            break;
        case '0':
            volver = true;
            break;
        default:
            console.log("❌ Opción no válida. Intente nuevamente.");
            funciones.pausar();
    }
  } while (!volver);
}

function realizarPrestamo() {
  console.log("🚧 Función en desarrollo...");
  funciones.pausar();
}

function devolverLibro() {
  console.log("🚧 Función en desarrollo...");
  funciones.pausar();
}

function listarPrestamosActivos() {
  console.log("🚧 Función en desarrollo...");
  funciones.pausar();
}

function mostrarPrestamosVencidos() {
  console.log("🚧 Función en desarrollo...");
  funciones.pausar();
}

function menuReportes() {
  console.clear()
  console.log("================================");
  console.log("📊   REPORTES Y ESTADÍSTICAS");
  console.log("================================");

  console.log('Total de Libros: ' + libros.length);
  console.log('Total de Usuarios: ' + usuarios.length);
  console.log('Total de Prestamos: ' + prestamos.length);
  console.log('Prestamos Activos: ' + "Función en desarrollo...");
  console.log('Prestamos Vencidos: ' + "Función en desarrollo...");
  console.log('Libros disponibles: ' + "Función en desarrollo...");
  console.log('Libro mas prestado: ' + "Función en desarrollo...");
  console.log('Usuarios con mas prestamos: ' + "Función en desarrollo...");
  funciones.pausar();
}

function menuConfiguracion() {
    console.log("🚧 Función en desarrollo...");
    funciones.pausar();
}

// ======================================
// INICIAR APLICACIÓN
// ======================================

iniciarSistema(); 
