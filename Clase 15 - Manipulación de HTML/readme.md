# 🌐 Clase 15 - Manipulación de HTML con JavaScript (DOM)

¡Bienvenido/a a la Clase 15! Esta es una de las lecciones más emocionantes, porque aquí es donde todo lo que hemos aprendido (variables, bucles, funciones, arrays, objetos) cobra vida y se vuelve visible e interactivo en una página web.

Hoy aprenderemos a manipular el **DOM (Document Object Model)**. El DOM es una representación en forma de árbol de nuestro documento HTML que el navegador crea. JavaScript puede interactuar con este árbol para leer, modificar, agregar o eliminar elementos y contenido de la página dinámicamente.

---

## 1. El Objeto `window` y `document`

El punto de partida para interactuar con el navegador y la página es el objeto global `window`.

-   `window`: Representa la ventana del navegador en sí. Contiene información como el tamaño de la ventana, la URL, etc.
-   `document`: Es una propiedad de `window` que representa el documento HTML cargado en la página. Es nuestro principal punto de acceso al DOM.

### 🧠 Análisis del ejemplo: `01_window_y_object.js`
```javascript
// El objeto 'window' es global, por lo que no es necesario escribirlo
console.log(window.innerWidth); // Ancho de la ventana
console.log(innerHeight);      // Alto de la ventana

// El objeto 'document' es la puerta de entrada al contenido de la página
console.log(document.title); // Muestra el título de la página

// ¡Podemos cambiar el contenido directamente!
document.title = '¡Página Interactiva!';
```

---

## 2. Seleccionar y Crear Elementos Dinámicamente

Para manipular un elemento, primero debemos seleccionarlo. Después, podemos usar métodos para crear nuevo contenido HTML y añadirlo a la página.

### Métodos comunes de selección:
-   `document.getElementById('id-del-elemento')`: Selecciona un único elemento por su `id`.
-   `document.querySelector('selector-css')`: Es muy versátil. Selecciona el **primer** elemento que coincida con un selector CSS (ej: `'#miId'`, `.miClase`, `'h1'`).

### 🧠 Análisis del ejemplo: `02_catalogo_productos.js`
Este ejemplo es la síntesis perfecta de todo lo aprendido:
1.  Tenemos un array de objetos (`productosIniciales`).
2.  Usamos `document.querySelector` para seleccionar el `div` donde mostraremos los productos.
3.  Iteramos sobre el array con `forEach` (Clase 14).
4.  Por cada producto, generamos un string de HTML.
5.  Usamos la propiedad `innerHTML` para insertar todo el HTML generado dentro del `div` contenedor.

```javascript
function construirTarjetaProducto(producto) {
  // Genera un string de HTML para un producto
  return `<div class="card"><h3>${producto.nombre}</h3>...</div>`;
}

function renderizarTodosLosProductos() {
  const contenedor = document.querySelector(".productos-container");
  contenedor.innerHTML = ""; // Limpiamos el contenedor

  productosIniciales.forEach((producto) => {
    const tarjeta = construirTarjetaProducto(producto);
    contenedor.innerHTML += tarjeta; // Añadimos la tarjeta al contenedor
  });
}

renderizarTodosLosProductos();
```

---

## 3. Manejo de Eventos

La interactividad se logra "escuchando" **eventos** que ocurren en la página (clics, movimientos del ratón, pulsaciones de teclas, etc.) y ejecutando una función (*event listener* o *callback*) cuando suceden.

El método principal para esto es `addEventListener('nombre-del-evento', funcionCallback)`.

### 🧠 Análisis del ejemplo: `03_eventos.js`
Este archivo muestra cómo manejar diferentes tipos de eventos:

-   **Eventos de Clic**:
    ```javascript
    const miBoton = document.getElementById("my-event-button");
    miBoton.addEventListener("click", () => {
        console.log("¡Botón clickeado!");
    });
    ```
-   **Eventos del Ratón**:
    -   `mousemove`: Se dispara cuando el ratón se mueve sobre un elemento.
    -   `mousedown` / `mouseup`: Cuando se presiona/suelta un botón del ratón.
    -   `dblclick`: Doble clic.
    -   `contextmenu`: Clic derecho.

-   **Eventos del Teclado**:
    -   `keydown`: Cuando se presiona una tecla.
    -   `keyup`: Cuando se suelta una tecla.
    -   El objeto `event` que recibe el *callback* contiene información útil, como `event.key` (la tecla presionada).

```javascript
const inputTexto = document.getElementById("text-input-field");
inputTexto.addEventListener("keydown", (event) => {
    console.log(`Tecla presionada: ${event.key}`);
    if (event.key === "Enter") {
        alert(`Ingresaste: ${inputTexto.value}`);
    }
});
```
-   **`event.preventDefault()`**: Es un método muy útil dentro de un *listener* para prevenir el comportamiento por defecto del navegador (por ejemplo, evitar que un formulario se envíe o que aparezca el menú contextual).

---
