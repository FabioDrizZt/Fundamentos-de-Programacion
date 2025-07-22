const productosIniciales = [
  {
    id: 1,
    nombre: "Teclado Mecánico RGB",
    precio: 85.99,
    stock: 10,
    categoria: "Periféricos",
  },
  {
    id: 2,
    nombre: 'Monitor Ultra Ancho 34"',
    precio: 499.99,
    stock: 5,
    categoria: "Monitores",
  },
  {
    id: 3,
    nombre: "Mouse Ergonómico Inalámbrico",
    precio: 45.0,
    stock: 15,
    categoria: "Periféricos",
  },
  {
    id: 4,
    nombre: "Cámara Web Full HD",
    precio: 60.0,
    stock: 8,
    categoria: "Accesorios",
  },
  {
    id: 5,
    nombre: "Disco SSD 1TB NVMe",
    precio: 95.5,
    stock: 12,
    categoria: "Almacenamiento",
  },
];

function construirTarjetaProducto(producto) {
  return `
    <div class="card">
      <h3>${producto.nombre}</h3>
      <p>Precio: ${producto.precio.toFixed(2)}</p>
      <p>Stock: ${producto.stock}</p>
      <p>Categoría: ${producto.categoria}</p>
    </div>
  `
}

function renderizarTodosLosProductos() {
  const contenedorProductos = document.querySelector(".productos-container");

  contenedorProductos.innerHTML = "";

  // Iterar sobre nuestro array de productos
  productosIniciales.forEach((producto) => {
    // Crear una nueva tarjeta de producto
    const tarjetaProducto = construirTarjetaProducto(producto);
    // Agregar la tarjeta al contenedor
    contenedorProductos.innerHTML += tarjetaProducto;
  });
}

renderizarTodosLosProductos()