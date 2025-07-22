console.log("El DOM ha sido completamente cargado y parseado.");

const miBoton = document.getElementById("my-event-button");
console.log(miBoton);
const contadorClicsSpan = document.getElementById("click-count");
console.log(contadorClicsSpan)
let contadorClics = 0; // Usando un contador (tema visto previamente)

miBoton.addEventListener("click", () => {
    contadorClics++; // Incrementamos el contador
    contadorClicsSpan.textContent = contadorClics; // Actualizamos el DOM
    console.log("Botón clickeado. Clicks:", contadorClics);

    if (contadorClics % 5 === 0) {
        alert(`¡Has hecho clic ${contadorClics} veces!`);
    }
})

const areaInteractiva = document.getElementById("interactive-area");
const mousePosDisplay = document.getElementById("mouse-position");
const clickStatus = document.getElementById("click-status");
const doubleClickStatus = document.getElementById("double-click-status");

// mousemove: Se dispara cuando el puntero se mueve sobre un elemento
areaInteractiva.addEventListener("mousemove", (event) => {
    // event.offsetX y event.offsetY dan las coordenadas respecto al elemento
    mousePosDisplay.textContent = `Posición: X=${event.offsetX}, Y=${event.offsetY}`;
    // Cambiar el color de fondo dinámicamente
    areaInteractiva.style.backgroundColor = `rgb(${event.offsetX % 255}, ${event.offsetY % 255}, 150)`;
})

// mousedown: Cuando un botón del ratón es presionado sobre un elemento
areaInteractiva.addEventListener("mousedown", () => {
    clickStatus.textContent = "Ratón PRESIONADO";
    clickStatus.style.color = "var(--pico-color-danger-700)";
})

// mouseup: Cuando un botón del ratón es soltado sobre un elemento
areaInteractiva.addEventListener("mouseup", () => {
    clickStatus.textContent = "Ratón SOLTADO";
    clickStatus.style.color = "var(--pico-color-success-700)";
})

// dblclick: Doble clic rápido
areaInteractiva.addEventListener("dblclick", () => {
    doubleClickStatus.textContent = "¡Doble clic detectado!";
    setTimeout(() => {
        doubleClickStatus.textContent = "";
    }, 1500); // Borrar mensaje después de 1.5 segundos
})

// contextmenu: Clic derecho (abre el menú contextual por defecto)
areaInteractiva.addEventListener("contextmenu", (event) => {
    event.preventDefault(); // Evita que aparezca el menú contextual del navegador
    alert("Clic derecho detectado. ¡Menú contextual prevenido!");
})

const inputTexto = document.getElementById("text-input-field");
const lastKeyPressedDisplay = document.getElementById("last-key-pressed");
const typedTextDisplay = document.getElementById("typed-text-display");

// keydown: Se dispara cuando una tecla es presionada
inputTexto.addEventListener("keydown", (event) => {
    console.log(`Keydown: Tecla "${event.key}" (Código: ${event.code})`);
    lastKeyPressedDisplay.textContent = `Última tecla presionada: ${event.key}`;

    if (event.key === "Enter") {
        console.log("¡Enter presionado!");
        inputTexto.blur(); // Quitar el foco del input
        alert(`Has terminado de escribir: "${inputTexto.value}"`);
    }
})

// keyup: Se dispara cuando una tecla es liberada
inputTexto.addEventListener("keyup", (event) => {
    console.log(`Keyup: Tecla "${event.key}" liberada`);
    typedTextDisplay.textContent = `Texto actual: ${event.target.value}`;
})