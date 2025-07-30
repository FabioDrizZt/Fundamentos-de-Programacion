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
}

// ======================================
// CLASE USUARIO
// ======================================

class Usuario {
  constructor(id, nombre, email, tipo) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.tipo = tipo;
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
    this.estado = "activo"; // "activo", "devuelto"
  }

  calcularFechaLimite() {
    const dias = this.usuario.tipo === 'profesor' ? 30 : 15
    const fechaLimite = new Date(this.fechaPrestamo);
    fechaLimite.setDate(fechaLimite.getDate() + dias);
    return fechaLimite;
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