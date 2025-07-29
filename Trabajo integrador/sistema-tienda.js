/**
 * SISTEMA DE GESTIÓN DE TIENDA
 * =============================
 * Trabajo Integrador Final - Fundamentos de Programación
 * 
 * Archivo principal que contiene:
 * - Menú principal del sistema
 * - Funciones de gestión de productos
 * - Funciones de gestión de clientes
 * - Sistema de ventas
 * - Reportes y estadísticas
 */

// ======================================
// IMPORTAR DEPENDENCIAS
// ======================================
const prompt = require('prompt-sync')();
const { Producto, Cliente, Venta } = require('./clases');
const funciones = require('./funciones');
const { 
    cargarProductosIniciales, 
    cargarClientesIniciales,
    obtenerCategorias,
    configuracion 
} = require('./datos');

// ======================================
// VARIABLES GLOBALES DEL SISTEMA
// ======================================
let productos = [];
let clientes = [];
let ventas = [];
let sistemaActivo = true;

// ======================================
// FUNCIÓN PRINCIPAL
// ======================================
function iniciarSistema() {
    console.log("🏪 INICIANDO SISTEMA DE GESTIÓN DE TIENDA...");
    
    // TODO: Cargar datos iniciales
    // productos = cargarProductosIniciales();
    // clientes = cargarClientesIniciales();
    
    console.log("✅ Sistema iniciado correctamente\n");
    
    // Mostrar menú principal
    while (sistemaActivo) {
        mostrarMenuPrincipal();
    }
    
    console.log("👋 ¡Gracias por usar el Sistema de Gestión de Tienda!");
}

// ======================================
// MENÚS DEL SISTEMA
// ======================================

/**
 * Muestra el menú principal y gestiona la navegación
 */
function mostrarMenuPrincipal() {
    console.log("================================");
    console.log("    SISTEMA DE GESTIÓN TIENDA");
    console.log("================================");
    console.log("1. Gestión de Productos");
    console.log("2. Gestión de Clientes");
    console.log("3. Realizar Venta");
    console.log("4. Reportes y Estadísticas");
    console.log("5. Configuración");
    console.log("0. Salir del Sistema");
    console.log("================================");
    
    const opcion = prompt("Seleccione una opción: ");
    
    switch (opcion) {
        case '1':
            menuGestionProductos();
            break;
        case '2':
            menuGestionClientes();
            break;
        case '3':
            procesarVenta();
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

/**
 * Muestra el submenú de gestión de productos
 */
function menuGestionProductos() {
    let volverMenu = false;
    
    while (!volverMenu) {
        console.log("\n===============================");
        console.log("     GESTIÓN DE PRODUCTOS");
        console.log("===============================");
        console.log("1. Listar todos los productos");
        console.log("2. Buscar producto");
        console.log("3. Agregar nuevo producto");
        console.log("4. Modificar producto");
        console.log("5. Eliminar producto");
        console.log("6. Productos con stock bajo");
        console.log("0. Volver al menú principal");
        console.log("===============================");
        
        const opcion = prompt("Seleccione una opción: ");
        
        switch (opcion) {
            case '1':
                listarProductos();
                break;
            case '2':
                buscarProducto();
                break;
            case '3':
                agregarProducto();
                break;
            case '4':
                modificarProducto();
                break;
            case '5':
                eliminarProducto();
                break;
            case '6':
                mostrarProductosStockBajo();
                break;
            case '0':
                volverMenu = true;
                break;
            default:
                console.log("❌ Opción no válida.");
        }
        
        if (!volverMenu) funciones.pausar();
    }
}

/**
 * Muestra el submenú de gestión de clientes
 */
function menuGestionClientes() {
    // TODO: Implementar menú de gestión de clientes
    // Similiar a menuGestionProductos pero para clientes
    // Opciones: listar, buscar, agregar, modificar, eliminar
    console.log("🚧 Función en desarrollo...");
    funciones.pausar();
}

/**
 * Muestra el menú de reportes y estadísticas
 */
function menuReportes() {
    // TODO: Implementar menú de reportes
    // Opciones: ventas del día, productos más vendidos, estadísticas generales, etc.
    console.log("🚧 Función en desarrollo...");
    funciones.pausar();
}

/**
 * Muestra el menú de configuración
 */
function menuConfiguracion() {
    // TODO: Implementar menú de configuración
    // Opciones: cambiar stock mínimo, cargar datos de prueba, resetear sistema, etc.
    console.log("🚧 Función en desarrollo...");
    funciones.pausar();
}

// ======================================
// FUNCIONES DE GESTIÓN DE PRODUCTOS
// ======================================

/**
 * Lista todos los productos del sistema
 */
function listarProductos() {
    console.log("\n📦 LISTA DE PRODUCTOS");
    console.log("======================");
    
    if (productos.length === 0) {
        console.log("❌ No hay productos registrados en el sistema.");
        return;
    }
    
    // TODO: Implementar listado de productos
    // Mostrar información de cada producto usando mostrarInfo()
    // Usar console.table() para mejor visualización
    console.log("🚧 Función en desarrollo...");
}

/**
 * Busca productos por diferentes criterios
 */
function buscarProducto() {
    console.log("\n🔍 BUSCAR PRODUCTO");
    console.log("==================");
    console.log("1. Buscar por ID");
    console.log("2. Buscar por nombre");
    console.log("3. Buscar por categoría");
    
    const opcion = prompt("Seleccione tipo de búsqueda: ");
    
    switch (opcion) {
        case '1':
            // TODO: Implementar búsqueda por ID
            break;
        case '2':
            // TODO: Implementar búsqueda por nombre
            break;
        case '3':
            // TODO: Implementar búsqueda por categoría
            break;
        default:
            console.log("❌ Opción no válida.");
    }
}

/**
 * Agrega un nuevo producto al sistema
 */
function agregarProducto() {
    console.log("\n➕ AGREGAR NUEVO PRODUCTO");
    console.log("==========================");
    
    // TODO: Implementar agregado de producto
    // Solicitar datos: nombre, precio, stock, categoría
    // Validar datos usando funciones de validación
    // Generar ID único
    // Crear instancia de Producto y agregarlo al array
    // Mostrar confirmación
    
    console.log("🚧 Función en desarrollo...");
}

/**
 * Modifica un producto existente
 */
function modificarProducto() {
    // TODO: Implementar modificación de producto
    // Mostrar lista de productos
    // Solicitar ID del producto a modificar
    // Mostrar datos actuales
    // Solicitar nuevos datos (permitir mantener actuales)
    // Validar y actualizar
    console.log("🚧 Función en desarrollo...");
}

/**
 * Elimina un producto del sistema
 */
function eliminarProducto() {
    // TODO: Implementar eliminación de producto
    // Mostrar lista de productos
    // Solicitar ID del producto a eliminar
    // Confirmar eliminación
    // Eliminar del array
    console.log("🚧 Función en desarrollo...");
}

/**
 * Muestra productos con stock bajo
 */
function mostrarProductosStockBajo() {
    // TODO: Implementar visualización de productos con stock bajo
    // Usar función obtenerProductosStockBajo()
    // Mostrar productos con alerta de stock bajo
    console.log("🚧 Función en desarrollo...");
}

// ======================================
// FUNCIONES DE GESTIÓN DE CLIENTES
// ======================================

/**
 * Lista todos los clientes
 */
function listarClientes() {
    // TODO: Implementar listado de clientes
    console.log("🚧 Función en desarrollo...");
}

/**
 * Agrega un nuevo cliente
 */
function agregarCliente() {
    // TODO: Implementar agregado de cliente
    // Solicitar datos: nombre, email, teléfono, tipo
    // Validar email
    // Crear instancia y agregar al array
    console.log("🚧 Función en desarrollo...");
}

// ======================================
// SISTEMA DE VENTAS
// ======================================

/**
 * Procesa una nueva venta
 */
function procesarVenta() {
    console.log("\n💰 PROCESAR VENTA");
    console.log("==================");
    
    // TODO: Implementar procesamiento de venta
    // 1. Seleccionar cliente
    // 2. Agregar productos al carrito
    // 3. Calcular totales
    // 4. Confirmar venta
    // 5. Actualizar stock
    // 6. Generar ticket
    // 7. Guardar venta
    
    console.log("🚧 Función en desarrollo...");
    funciones.pausar();
}

/**
 * Selecciona un cliente para la venta
 */
function seleccionarCliente() {
    // TODO: Implementar selección de cliente
    // Mostrar lista de clientes
    // Permitir buscar por ID o nombre
    // Devolver cliente seleccionado
}

/**
 * Agrega productos al carrito de venta
 */
function agregarProductosCarrito() {
    // TODO: Implementar carrito de compras
    // Mostrar productos disponibles
    // Permitir agregar múltiples productos
    // Validar stock disponible
    // Devolver array de productos para la venta
}

// ======================================
// FUNCIONES DE REPORTES
// ======================================

/**
 * Genera reporte de ventas del día
 */
function reporteVentasDelDia() {
    // TODO: Implementar reporte de ventas del día
    console.log("🚧 Función en desarrollo...");
}

/**
 * Muestra estadísticas generales
 */
function mostrarEstadisticasGenerales() {
    // TODO: Implementar estadísticas generales
    // Usar función generarEstadisticas()
    console.log("🚧 Función en desarrollo...");
}

// ======================================
// FUNCIONES DE UTILIDAD
// ======================================

/**
 * Muestra mensaje de bienvenida
 */
function mostrarBienvenida() {
    console.log("🏪=================================🏪");
    console.log("   SISTEMA DE GESTIÓN DE TIENDA");
    console.log("   Trabajo Integrador Final");
    console.log("   Fundamentos de Programación");
    console.log("🏪=================================🏪");
    console.log("");
}

// ======================================
// INICIAR APLICACIÓN
// ======================================

// Mostrar bienvenida y iniciar sistema
mostrarBienvenida();
iniciarSistema(); 