const articulos = [
  {
    id: 452452,
    nombre: "Celular Samsung S24",
    precio: 1000,
    cantidad: 5,
    categoria: "Celulares",
  },
  {
    id: 452453,
    nombre: "Celular Motorola G100",
    precio: 800,
    cantidad: 3,
    categoria: "Celulares",
  },
  {
    id: 78644,
    nombre: "Notebook HP",
    precio: 1500,
    cantidad: 2,
    categoria: "Notebooks",
  },
  {
    id: 785752,
    nombre: "Monitor LG",
    precio: 300,
    cantidad: 4,
    categoria: "Monitores",
  },
  {
    id: 785456,
    nombre: "Mouse Logitech",
    precio: 50,
    cantidad: 10,
    categoria: "Perifericos",
  },
  {
    id: 785457,
    nombre: "Teclado Logitech",
    precio: 80,
    cantidad: 8,
    categoria: "Perifericos",
  },
  {
    id: 785458,
    nombre: "Auriculares Sony",
    precio: 100,
    cantidad: 6,
    categoria: "Perifericos",
  },
  {
    id: 785459,
    nombre: "Parlantes JBL",
    precio: 150,
    cantidad: 4,
    categoria: "Perifericos",
  },
];

function forEachArticulos(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    const elemento = arr[i];
    callback(elemento);
  }
}

function mostrarArticulo(articulo) {
  console.log(
    `ID: ${articulo.id}, Nombre: ${articulo.nombre}, Precio: ${articulo.precio}, Cantidad: ${articulo.cantidad}, Categoria: ${articulo.categoria}`
  );
}

// forEachArticulos(articulos,mostrarArticulo)

// articulos.forEach(mostrarArticulo)

// articulos.forEach(function(articulo) {
//     console.log(`ID: ${articulo.id}, Nombre: ${articulo.nombre}, Precio: ${articulo.precio}, Cantidad: ${articulo.cantidad}, Categoria: ${articulo.categoria}`);
// })

// articulos.forEach((articulo) => {
//      console.log(`ID: ${articulo.id}, Nombre: ${articulo.nombre}, Precio: ${articulo.precio}, Cantidad: ${articulo.cantidad}, Categoria: ${articulo.categoria}`);
//  })

/* articulos.forEach(articulo =>
  console.log(
    `ID: ${articulo.id}, Nombre: ${articulo.nombre}, Precio: ${articulo.precio}, Cantidad: ${articulo.cantidad}, Categoria: ${articulo.categoria}`
  )
); */

/* articulos.forEach((articulo, index) =>
  console.log(
    `${index + 1} - ID: ${articulo.id}, Nombre: ${articulo.nombre}, Precio: ${articulo.precio}, Cantidad: ${articulo.cantidad}, Categoria: ${articulo.categoria}`
  )
); */

articulos.forEach((articulo, index, arr) => {
  console.log(
    `${index + 1} - ID: ${articulo.id}, 
    \nNombre: ${articulo.nombre}, 
    \nPrecio: ${articulo.precio}, 
    \nCantidad: ${articulo.cantidad}, 
    \nCategoria: ${articulo.categoria}`
  );
  console.log(
    `${
      arr[index + 1]
        ? "El siguiente articulo es: " + arr[index + 1]?.nombre
        : "No hay articulo siguiente"
    }` + "\n"
  );
});
