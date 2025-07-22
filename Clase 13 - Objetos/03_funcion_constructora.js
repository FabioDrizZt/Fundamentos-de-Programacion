// Para crear un objeto usamos la función constructora.
// Por convención, comienzan con mayúsculas.
// Utilizamos 'this' para asignar propiedades al objeto.

function Producto(nombre, precio, stock) {
  // 'this' es una palabra reservada que apunta al objeto actual.
  // 'this crea autoamáticamente las propiedades nombre, precio y stock al usar 'new'.
  this.nombre = nombre;
  this.precio = precio;
  this.stock = stock;

  // Métodos
  this.mostrarInfo = function () {
    console.log(
      `Nombre: ${this.nombre} - Precio: ${this.precio} - Stock: ${this.stock}`
    );
  };
}

// --- Creación de una instancia del objeto---
// Creamos un objeto 'producto' usando la función constructora.
// Usamos la palabra reservada 'new' para crear una nueva instancia del objeto.
const laptop = new Producto("Laptop Dell", 1000, 100);
const teclado = new Producto("Teclado Mecanico Razer", 500, 50);

// --- Ejecución de métodos ---
laptop.mostrarInfo();
teclado.mostrarInfo();