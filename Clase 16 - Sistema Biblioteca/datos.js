/**
 * CLASES DEL SISTEMA DE BIBLIOTECA - EJEMPLO SIMPLIFICADO
 * =======================================================
 * EJEMPLO RESUELTO PARA ESTUDIANTES
 * 
 * Clases simplificadas que muestran los conceptos esenciales
 */

// ======================================
// CLASE LIBRO
// ======================================
class Libro {
    constructor(id, titulo, autor, categoria, disponibles, total) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.categoria = categoria;
        this.disponibles = disponibles;
        this.total = total;
    }

    // Verifica si hay ejemplares disponibles
    hayDisponible() {
        return this.disponibles > 0;
    }

    // Presta un ejemplar
    prestar() {
        if (this.hayDisponible()) {
            this.disponibles--;
            return true;
        }
        return false;
    }

    // Devuelve un ejemplar
    devolver() {
        if (this.disponibles < this.total) {
            this.disponibles++;
            return true;
        }
        return false;
    }

    // Muestra información del libro
    mostrarInfo() {
        const estado = this.hayDisponible() ? "✅ Disponible" : "❌ No disponible";
        return `📖 ${this.titulo} - ${this.autor}
   Categoría: ${this.categoria}
   Disponibles: ${this.disponibles}/${this.total}
   Estado: ${estado}`;
    }

    // Información resumida para listas
    infoResumida() {
        return `[${this.id}] ${this.titulo} - ${this.autor} (${this.disponibles}/${this.total})`;
    }
}

// ======================================
// CLASE USUARIO
// ======================================
class Usuario {
    constructor(id, nombre, email, tipo = 'estudiante') {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.tipo = tipo; // 'estudiante', 'profesor'
        this.prestamosActivos = [];
    }

    // Obtiene el límite de préstamos según el tipo
    obtenerLimitePrestamos() {
        return this.tipo === 'profesor' ? 10 : 5;
    }

    // Verifica si puede realizar más préstamos
    puedePrestar() {
        return this.prestamosActivos.length < this.obtenerLimitePrestamos();
    }

    // Agrega un préstamo activo
    agregarPrestamo(prestamo) {
        this.prestamosActivos.push(prestamo);
    }

    // Quita un préstamo activo
    quitarPrestamo(prestamoId) {
        this.prestamosActivos = this.prestamosActivos.filter(p => p.id !== prestamoId);
    }

    // Muestra información del usuario
    mostrarInfo() {
        return `👤 ${this.nombre}
   Email: ${this.email}
   Tipo: ${this.tipo}
   Préstamos activos: ${this.prestamosActivos.length}/${this.obtenerLimitePrestamos()}`;
    }

    // Información resumida
    infoResumida() {
        return `[${this.id}] ${this.nombre} - ${this.tipo} (${this.prestamosActivos.length} préstamos)`;
    }
}

// ======================================
// CLASE PRESTAMO
// ======================================
class Prestamo {
    constructor(id, usuario, libro) {
        this.id = id;
        this.usuario = usuario;
        this.libro = libro;
        this.fechaPrestamo = new Date();
        this.fechaLimite = this.calcularFechaLimite();
        this.estado = 'activo'; // 'activo', 'devuelto'
    }

    // Calcula la fecha límite (15 días para estudiantes, 30 para profesores)
    calcularFechaLimite() {
        const dias = this.usuario.tipo === 'profesor' ? 30 : 15;
        const fechaLimite = new Date(this.fechaPrestamo);
        fechaLimite.setDate(fechaLimite.getDate() + dias);
        return fechaLimite;
    }

    // Verifica si está vencido
    estaVencido() {
        return new Date() > this.fechaLimite && this.estado === 'activo';
    }

    // Procesa la devolución
    devolver() {
        if (this.estado === 'activo') {
            this.estado = 'devuelto';
            this.libro.devolver();
            this.usuario.quitarPrestamo(this.id);
            return true;
        }
        return false;
    }

    // Genera ticket simple
    generarTicket() {
        return `
================================
        TICKET DE PRÉSTAMO
================================
ID: ${this.id}
Usuario: ${this.usuario.nombre}
Libro: ${this.libro.titulo}
Fecha: ${this.fechaPrestamo.toLocaleDateString()}
Fecha límite: ${this.fechaLimite.toLocaleDateString()}
Estado: ${this.estado}
================================`;
    }

    // Información resumida
    infoResumida() {
        const estadoEmoji = this.estaVencido() ? '🔴' : '🟢';
        return `${estadoEmoji} [${this.id}] ${this.libro.titulo} → ${this.usuario.nombre}`;
    }
}

// ======================================
// EXPORTAR CLASES
// ======================================
module.exports = {
    Libro,
    Usuario,
    Prestamo
}; 