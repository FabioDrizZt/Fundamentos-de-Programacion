/**
 * CLASES DEL SISTEMA DE GESTIÓN DE TIENDA
 * ========================================
 * Este archivo contiene todas las clases principales del sistema:
 * - Producto: Gestiona la información de productos
 * - Cliente: Gestiona la información de clientes  
 * - Venta: Gestiona las operaciones de venta
 */

// ======================================
// CLASE PRODUCTO
// ======================================
class Producto {
    constructor(id, nombre, precio, stock, categoria) {
        // TODO: Implementar constructor
        // Asignar propiedades: id, nombre, precio, stock, categoria
        // Validar que los parámetros sean válidos
    }

    // Método para aplicar descuento al precio
    aplicarDescuento(porcentaje) {
        // TODO: Implementar aplicación de descuento
        // Validar que el porcentaje esté entre 0 y 100
        // Calcular y devolver el precio con descuento
    }

    // Método para verificar si hay stock suficiente
    verificarStock(cantidad) {
        // TODO: Implementar verificación de stock
        // Devolver true si hay stock suficiente, false si no
    }

    // Método para reducir stock después de una venta
    reducirStock(cantidad) {
        // TODO: Implementar reducción de stock
        // Validar que hay stock suficiente antes de reducir
        // Actualizar la propiedad stock
    }

    // Método para mostrar información del producto
    mostrarInfo() {
        // TODO: Implementar mostrar información
        // Devolver string con toda la información del producto formateada
    }

    // Método para verificar si el stock está bajo
    stockBajo(minimo = 5) {
        // TODO: Implementar verificación de stock bajo
        // Devolver true si el stock es menor al mínimo
    }
}

// ======================================
// CLASE CLIENTE
// ======================================
class Cliente {
    constructor(id, nombre, email, telefono, tipo = 'regular') {
        // TODO: Implementar constructor
        // Asignar propiedades: id, nombre, email, telefono, tipo
        // Validar email usando el método validarEmail()
    }

    // Método para obtener el porcentaje de descuento según el tipo
    obtenerDescuento() {
        // TODO: Implementar obtención de descuento
        // Cliente regular: 0% descuento
        // Cliente premium: 10% descuento
        // Devolver el porcentaje de descuento
    }

    // Método para validar formato de email
    validarEmail() {
        // TODO: Implementar validación de email
        // Usar expresión regular para validar formato
        // Devolver true si es válido, false si no
    }

    // Método para mostrar información del cliente
    mostrarInfo() {
        // TODO: Implementar mostrar información
        // Devolver string con toda la información del cliente formateada
    }

    // Método para verificar si es cliente premium
    esPremium() {
        // TODO: Implementar verificación de tipo premium
        // Devolver true si es premium, false si es regular
    }
}

// ======================================
// CLASE VENTA
// ======================================
class Venta {
    constructor(cliente, productos, fecha = new Date()) {
        // TODO: Implementar constructor
        // productos debe ser un array de objetos: [{producto: Producto, cantidad: number}]
        // Asignar propiedades: cliente, productos, fecha
        // Generar ID único para la venta
    }

    // Método para calcular subtotal (sin descuentos)
    calcularSubtotal() {
        // TODO: Implementar cálculo de subtotal
        // Iterar sobre productos y sumar precio * cantidad
        // Devolver el subtotal
    }

    // Método para aplicar descuentos del cliente
    aplicarDescuentos() {
        // TODO: Implementar aplicación de descuentos
        // Obtener descuento del cliente
        // Aplicar descuento al subtotal
        // Devolver el monto del descuento aplicado
    }

    // Método para calcular total final
    calcularTotal() {
        // TODO: Implementar cálculo de total
        // Calcular subtotal y aplicar descuentos
        // Devolver el total final
    }

    // Método para generar ticket de venta
    generarTicket() {
        // TODO: Implementar generación de ticket
        // Crear string formateado con:
        // - Información del cliente
        // - Lista de productos comprados
        // - Subtotal, descuento, total
        // - Fecha y hora de la venta
        // Devolver el ticket formateado
    }

    // Método para actualizar stock de productos vendidos
    actualizarStock() {
        // TODO: Implementar actualización de stock
        // Iterar sobre productos vendidos
        // Reducir stock de cada producto
        // Manejar errores si no hay stock suficiente
    }
}

// ======================================
// EXPORTAR CLASES
// ======================================
module.exports = {
    Producto,
    Cliente,
    Venta
}; 