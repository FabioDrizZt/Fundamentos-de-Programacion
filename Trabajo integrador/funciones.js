/**
 * FUNCIONES GLOBALES DEL SISTEMA
 * ===============================
 * Este archivo contiene todas las funciones auxiliares del sistema:
 * - Funciones de validación
 * - Funciones de búsqueda
 * - Funciones de cálculo y estadísticas
 * - Funciones de utilidad
 */

// ======================================
// FUNCIONES DE VALIDACIÓN
// ======================================

/**
 * Valida que un texto no esté vacío y tenga mínimo caracteres requeridos
 * @param {string} texto - Texto a validar
 * @param {number} minimo - Cantidad mínima de caracteres (default: 2)
 * @returns {boolean} - true si es válido, false si no
 */
function validarTexto(texto, minimo = 2) {
    // TODO: Implementar validación de texto
    // Verificar que no sea null, undefined o vacío
    // Verificar que tenga al menos 'minimo' caracteres
    // Devolver true/false
}

/**
 * Valida que un número sea positivo
 * @param {number} numero - Número a validar
 * @returns {boolean} - true si es positivo, false si no
 */
function validarNumeroPositivo(numero) {
    // TODO: Implementar validación de número positivo
    // Verificar que sea un número válido
    // Verificar que sea mayor a 0
    // Devolver true/false
}

/**
 * Valida formato de email usando expresión regular
 * @param {string} email - Email a validar
 * @returns {boolean} - true si es válido, false si no
 */
function validarEmail(email) {
    // TODO: Implementar validación de email
    // Usar expresión regular para validar formato
    // Ejemplo: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // Devolver true/false
}

/**
 * Valida que el stock sea suficiente para una venta
 * @param {Object} producto - Producto a validar
 * @param {number} cantidad - Cantidad solicitada
 * @returns {boolean} - true si hay stock suficiente, false si no
 */
function validarStock(producto, cantidad) {
    // TODO: Implementar validación de stock
    // Verificar que la cantidad sea válida (positiva)
    // Verificar que el producto tenga stock suficiente
    // Devolver true/false
}

// ======================================
// FUNCIONES DE BÚSQUEDA
// ======================================

/**
 * Busca un producto por su ID
 * @param {Array} productos - Array de productos
 * @param {number} id - ID del producto a buscar
 * @returns {Object|null} - Producto encontrado o null
 */
function buscarProductoPorId(productos, id) {
    // TODO: Implementar búsqueda por ID
    // Usar método find() del array
    // Devolver el producto encontrado o null
}

/**
 * Busca productos por categoría
 * @param {Array} productos - Array de productos
 * @param {string} categoria - Categoría a buscar
 * @returns {Array} - Array de productos de la categoría
 */
function buscarProductosPorCategoria(productos, categoria) {
    // TODO: Implementar búsqueda por categoría
    // Usar método filter() del array
    // Comparación insensible a mayúsculas/minúsculas
    // Devolver array de productos filtrados
}

/**
 * Busca un cliente por su ID
 * @param {Array} clientes - Array de clientes
 * @param {number} id - ID del cliente a buscar
 * @returns {Object|null} - Cliente encontrado o null
 */
function buscarClientePorId(clientes, id) {
    // TODO: Implementar búsqueda de cliente por ID
    // Usar método find() del array
    // Devolver el cliente encontrado o null
}

/**
 * Filtra productos con stock bajo
 * @param {Array} productos - Array de productos
 * @param {number} minimo - Stock mínimo (default: 5)
 * @returns {Array} - Array de productos con stock bajo
 */
function obtenerProductosStockBajo(productos, minimo = 5) {
    // TODO: Implementar filtro de stock bajo
    // Usar método filter() del array
    // Devolver productos con stock menor al mínimo
}

/**
 * Busca productos por nombre (búsqueda parcial)
 * @param {Array} productos - Array de productos
 * @param {string} nombre - Nombre o parte del nombre a buscar
 * @returns {Array} - Array de productos que coinciden
 */
function buscarProductosPorNombre(productos, nombre) {
    // TODO: Implementar búsqueda por nombre
    // Usar método filter() y includes()
    // Búsqueda insensible a mayúsculas/minúsculas
    // Devolver array de productos que coinciden
}

// ======================================
// FUNCIONES DE CÁLCULO Y ESTADÍSTICAS
// ======================================

/**
 * Calcula el total de ventas del día
 * @param {Array} ventas - Array de ventas
 * @param {Date} fecha - Fecha a consultar (default: hoy)
 * @returns {number} - Total de ventas del día
 */
function calcularVentasDelDia(ventas, fecha = new Date()) {
    // TODO: Implementar cálculo de ventas del día
    // Filtrar ventas por fecha
    // Usar reduce() para sumar totales
    // Devolver el total
}

/**
 * Encuentra el producto más vendido
 * @param {Array} ventas - Array de ventas
 * @returns {Object} - Objeto con producto y cantidad vendida
 */
function obtenerProductoMasVendido(ventas) {
    // TODO: Implementar búsqueda de producto más vendido
    // Crear objeto para contar ventas por producto
    // Iterar sobre todas las ventas y productos
    // Encontrar el producto con mayor cantidad vendida
    // Devolver {producto: Object, cantidad: number}
}

/**
 * Calcula el promedio de compra por cliente
 * @param {Array} ventas - Array de ventas
 * @returns {number} - Promedio de compra por cliente
 */
function calcularPromedioCompraCliente(ventas) {
    // TODO: Implementar cálculo de promedio
    // Sumar todos los totales de ventas
    // Contar clientes únicos
    // Calcular promedio
    // Devolver el promedio
}

/**
 * Genera estadísticas generales del sistema
 * @param {Array} productos - Array de productos
 * @param {Array} clientes - Array de clientes
 * @param {Array} ventas - Array de ventas
 * @returns {Object} - Objeto con estadísticas generales
 */
function generarEstadisticas(productos, clientes, ventas) {
    // TODO: Implementar generación de estadísticas
    // Calcular múltiples estadísticas:
    // - Total productos, clientes, ventas
    // - Producto más vendido
    // - Cliente que más compró
    // - Promedio de venta
    // - Productos con stock bajo
    // Devolver objeto con todas las estadísticas
}

/**
 * Encuentra el cliente que más dinero gastó
 * @param {Array} ventas - Array de ventas
 * @returns {Object} - Cliente que más gastó y el monto
 */
function clienteQueMasGasto(ventas) {
    // TODO: Implementar búsqueda de cliente que más gastó
    // Agrupar ventas por cliente
    // Sumar gastos por cliente
    // Encontrar el cliente con mayor gasto
    // Devolver {cliente: Object, total: number}
}

// ======================================
// FUNCIONES DE UTILIDAD
// ======================================

/**
 * Formatea un número como moneda
 * @param {number} numero - Número a formatear
 * @returns {string} - Número formateado como moneda
 */
function formatearMoneda(numero) {
    // TODO: Implementar formateo de moneda
    // Usar toLocaleString() o método similar
    // Devolver string formateado (ej: "$1.234.567")
}

/**
 * Formatea una fecha
 * @param {Date} fecha - Fecha a formatear
 * @returns {string} - Fecha formateada
 */
function formatearFecha(fecha) {
    // TODO: Implementar formateo de fecha
    // Formatear como DD/MM/AAAA HH:MM
    // Devolver string formateado
}

/**
 * Genera un ID único
 * @returns {number} - ID único
 */
function generarId() {
    // TODO: Implementar generación de ID único
    // Puede usar timestamp + número aleatorio
    // O implementar contador incremental
    // Devolver ID único
}

/**
 * Pausa la ejecución y espera que el usuario presione Enter
 * @param {string} mensaje - Mensaje a mostrar (opcional)
 */
function pausar(mensaje = "\nPresiona Enter para continuar...") {
    // TODO: Implementar pausa
    // Usar prompt-sync para esperar input del usuario
    // Mostrar mensaje y esperar Enter
}

/**
 * Limpia la consola
 */
function limpiarConsola() {
    // TODO: Implementar limpieza de consola
    // Usar console.clear() o método similar
}

// ======================================
// EXPORTAR FUNCIONES
// ======================================
module.exports = {
    // Funciones de validación
    validarTexto,
    validarNumeroPositivo,
    validarEmail,
    validarStock,
    
    // Funciones de búsqueda
    buscarProductoPorId,
    buscarProductosPorCategoria,
    buscarClientePorId,
    obtenerProductosStockBajo,
    buscarProductosPorNombre,
    
    // Funciones de cálculo
    calcularVentasDelDia,
    obtenerProductoMasVendido,
    calcularPromedioCompraCliente,
    generarEstadisticas,
    clienteQueMasGasto,
    
    // Funciones de utilidad
    formatearMoneda,
    formatearFecha,
    generarId,
    pausar,
    limpiarConsola
}; 