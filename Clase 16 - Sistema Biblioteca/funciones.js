/**
 * FUNCIONES AUXILIARES - EJEMPLO SIMPLIFICADO
 * ===========================================
 * EJEMPLO RESUELTO PARA ESTUDIANTES
 * 
 * Funciones esenciales que muestran los conceptos clave
 */

// ======================================
// FUNCIONES DE VALIDACIÓN
// ======================================

/**
 * Valida que un texto no esté vacío
 */
function validarTexto(texto, minimo = 2) {
    return texto && texto.trim().length >= minimo;
}

/**
 * Valida que un número sea positivo
 */
function validarNumeroPositivo(numero) {
    const num = Number(numero);
    return !isNaN(num) && num > 0;
}

/**
 * Valida formato básico de email
 */
function validarEmail(email) {
    return email && email.includes('@') && email.includes('.');
}

// ======================================
// FUNCIONES DE BÚSQUEDA
// ======================================

/**
 * Busca un libro por ID
 */
function buscarLibroPorId(libros, id) {
    return libros.find(libro => libro.id === Number(id)) || null;
}

/**
 * Busca libros por título
 */
function buscarLibrosPorTitulo(libros, titulo) {
    return libros.filter(libro => 
        libro.titulo.toLowerCase().includes(titulo.toLowerCase())
    );
}

/**
 * Busca libros por categoría
 */
function buscarLibrosPorCategoria(libros, categoria) {
    return libros.filter(libro => 
        libro.categoria.toLowerCase() === categoria.toLowerCase()
    );
}

/**
 * Busca un usuario por ID
 */
function buscarUsuarioPorId(usuarios, id) {
    return usuarios.find(usuario => usuario.id === Number(id)) || null;
}

/**
 * Busca usuarios por nombre
 */
function buscarUsuariosPorNombre(usuarios, nombre) {
    return usuarios.filter(usuario => 
        usuario.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
}

/**
 * Busca préstamo por ID
 */
function buscarPrestamoPorId(prestamos, id) {
    return prestamos.find(prestamo => prestamo.id === Number(id)) || null;
}

// ======================================
// FUNCIONES DE CÁLCULO
// ======================================

/**
 * Obtiene préstamos activos
 */
function obtenerPrestamosActivos(prestamos) {
    return prestamos.filter(prestamo => prestamo.estado === 'activo');
}

/**
 * Obtiene préstamos vencidos
 */
function obtenerPrestamosVencidos(prestamos) {
    return prestamos.filter(prestamo => prestamo.estaVencido());
}

/**
 * Obtiene libros disponibles
 */
function obtenerLibrosDisponibles(libros) {
    return libros.filter(libro => libro.hayDisponible());
}

/**
 * Cuenta préstamos por usuario
 */
function contarPrestamosPorUsuario(prestamos) {
    const conteo = {};
    prestamos.forEach(prestamo => {
        const userId = prestamo.usuario.id;
        conteo[userId] = (conteo[userId] || 0) + 1;
    });
    return conteo;
}

/**
 * Obtiene el libro más prestado
 */
function obtenerLibroMasPrestado(prestamos) {
    if (prestamos.length === 0) return null;
    
    const conteo = {};
    prestamos.forEach(prestamo => {
        const libroId = prestamo.libro.id;
        conteo[libroId] = (conteo[libroId] || 0) + 1;
    });

    let maxPrestamos = 0;
    let libroMasPrestado = null;
    
    for (const [libroId, cantidad] of Object.entries(conteo)) {
        if (cantidad > maxPrestamos) {
            maxPrestamos = cantidad;
            libroMasPrestado = prestamos.find(p => p.libro.id === Number(libroId))?.libro;
        }
    }

    return { libro: libroMasPrestado, cantidad: maxPrestamos };
}

// ======================================
// FUNCIONES DE UTILIDAD
// ======================================

/**
 * Pausa la ejecución
 */
function pausar(mensaje = "\nPresiona Enter para continuar...") {
    const prompt = require('prompt-sync')();
    prompt(mensaje);
}

/**
 * Limpia la consola
 */
function limpiarConsola() {
    console.clear();
}

/**
 * Capitaliza texto
 */
function capitalizarTexto(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

/**
 * Genera un ID único simple
 */
function generarId() {
    return Date.now() + Math.floor(Math.random() * 100);
}

/**
 * Muestra una lista simple
 */
function mostrarLista(items, mostrarInfo = (item) => item.toString()) {
    if (items.length === 0) {
        console.log("❌ No hay elementos para mostrar.");
        return;
    }

    items.forEach((item, index) => {
        console.log(`${index + 1}. ${mostrarInfo(item)}`);
    });
}

// ======================================
// EXPORTAR FUNCIONES
// ======================================
module.exports = {
    // Validaciones
    validarTexto,
    validarNumeroPositivo,
    validarEmail,
    
    // Búsquedas
    buscarLibroPorId,
    buscarLibrosPorTitulo,
    buscarLibrosPorCategoria,
    buscarUsuarioPorId,
    buscarUsuariosPorNombre,
    buscarPrestamoPorId,
    
    // Cálculos
    obtenerPrestamosActivos,
    obtenerPrestamosVencidos,
    obtenerLibrosDisponibles,
    contarPrestamosPorUsuario,
    obtenerLibroMasPrestado,
    
    // Utilidades
    pausar,
    limpiarConsola,
    capitalizarTexto,
    generarId,
    mostrarLista
}; 