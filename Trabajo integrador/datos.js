/**
 * DATOS DE PRUEBA DEL SISTEMA
 * ============================
 * Este archivo contiene los datos iniciales para probar el sistema:
 * - Productos iniciales
 * - Clientes iniciales
 * - Funciones para cargar datos de prueba
 */

const { Producto, Cliente } = require('./clases');

// ======================================
// DATOS INICIALES DE PRODUCTOS
// ======================================
const productosIniciales = [
    {
        id: 1,
        nombre: "Laptop HP Pavilion",
        precio: 800000,
        stock: 5,
        categoria: "Electrónicos"
    },
    {
        id: 2,
        nombre: "Mouse Logitech MX Master",
        precio: 25000,
        stock: 20,
        categoria: "Accesorios"
    },
    {
        id: 3,
        nombre: "Teclado Gaming Razer",
        precio: 45000,
        stock: 3,
        categoria: "Gaming"
    },
    {
        id: 4,
        nombre: "Monitor Samsung 24''",
        precio: 180000,
        stock: 8,
        categoria: "Electrónicos"
    },
    {
        id: 5,
        nombre: "Audífonos Sony WH-1000XM4",
        precio: 35000,
        stock: 15,
        categoria: "Audio"
    },
    {
        id: 6,
        nombre: "Webcam Logitech C920",
        precio: 12000,
        stock: 12,
        categoria: "Accesorios"
    },
    {
        id: 7,
        nombre: "SSD Samsung 1TB",
        precio: 95000,
        stock: 7,
        categoria: "Almacenamiento"
    },
    {
        id: 8,
        nombre: "Router TP-Link AC1750",
        precio: 18000,
        stock: 4,
        categoria: "Redes"
    },
    {
        id: 9,
        nombre: "Silla Gaming DXRacer",
        precio: 320000,
        stock: 2,
        categoria: "Muebles"
    },
    {
        id: 10,
        nombre: "Impresora HP LaserJet",
        precio: 150000,
        stock: 6,
        categoria: "Impresión"
    }
];

// ======================================
// DATOS INICIALES DE CLIENTES
// ======================================
const clientesIniciales = [
    {
        id: 1,
        nombre: "Juan Pérez",
        email: "juan.perez@email.com",
        telefono: "123456789",
        tipo: "regular"
    },
    {
        id: 2,
        nombre: "María García",
        email: "maria.garcia@email.com",
        telefono: "987654321",
        tipo: "premium"
    },
    {
        id: 3,
        nombre: "Carlos López",
        email: "carlos.lopez@email.com",
        telefono: "456789123",
        tipo: "regular"
    },
    {
        id: 4,
        nombre: "Ana Martínez",
        email: "ana.martinez@email.com",
        telefono: "789123456",
        tipo: "premium"
    },
    {
        id: 5,
        nombre: "Pedro Rodríguez",
        email: "pedro.rodriguez@email.com",
        telefono: "321654987",
        tipo: "regular"
    },
    {
        id: 6,
        nombre: "Laura Fernández",
        email: "laura.fernandez@email.com",
        telefono: "654987321",
        tipo: "premium"
    },
    {
        id: 7,
        nombre: "Miguel Torres",
        email: "miguel.torres@email.com",
        telefono: "147258369",
        tipo: "regular"
    },
    {
        id: 8,
        nombre: "Carmen Jiménez",
        email: "carmen.jimenez@email.com",
        telefono: "963852741",
        tipo: "regular"
    }
];

// ======================================
// CATEGORÍAS DISPONIBLES
// ======================================
const categoriasDisponibles = [
    "Electrónicos",
    "Accesorios",
    "Gaming",
    "Audio",
    "Almacenamiento",
    "Redes",
    "Muebles",
    "Impresión",
    "Software",
    "Cables"
];

// ======================================
// FUNCIONES PARA CARGAR DATOS
// ======================================

/**
 * Carga los productos iniciales y los convierte en instancias de la clase Producto
 * @returns {Array} Array de instancias de Producto
 */
function cargarProductosIniciales() {
    // TODO: Implementar carga de productos
    // Iterar sobre productosIniciales
    // Crear instancia de Producto para cada elemento
    // Devolver array de instancias
    return [];
}

/**
 * Carga los clientes iniciales y los convierte en instancias de la clase Cliente
 * @returns {Array} Array de instancias de Cliente
 */
function cargarClientesIniciales() {
    // TODO: Implementar carga de clientes
    // Iterar sobre clientesIniciales
    // Crear instancia de Cliente para cada elemento
    // Devolver array de instancias
    return [];
}

/**
 * Obtiene las categorías disponibles
 * @returns {Array} Array de categorías
 */
function obtenerCategorias() {
    return [...categoriasDisponibles];
}

/**
 * Genera datos de prueba adicionales (opcional)
 */
function generarDatosPrueba() {
    // TODO: Opcional - Generar más datos de prueba
    // Productos adicionales
    // Clientes adicionales
    // Ventas de ejemplo
}

/**
 * Resetea los datos a los valores iniciales
 */
function resetearDatos() {
    // TODO: Implementar reset de datos
    // Restaurar productos y clientes iniciales
    // Limpiar ventas
}

// ======================================
// DATOS DE CONFIGURACIÓN
// ======================================
const configuracion = {
    stockMinimo: 5,
    descuentoPremium: 10,
    impuesto: 0, // Porcentaje de impuesto (0 = sin impuesto)
    moneda: "$",
    formatoFecha: "DD/MM/AAAA HH:MM"
};

// ======================================
// EXPORTAR DATOS Y FUNCIONES
// ======================================
module.exports = {
    // Datos iniciales (objetos planos)
    productosIniciales,
    clientesIniciales,
    categoriasDisponibles,
    configuracion,
    
    // Funciones para cargar datos
    cargarProductosIniciales,
    cargarClientesIniciales,
    obtenerCategorias,
    generarDatosPrueba,
    resetearDatos
}; 