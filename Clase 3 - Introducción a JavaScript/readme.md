# 🚀 Introducción a JavaScript

---

## 🌐 ¿Qué es JavaScript?
JavaScript es un **lenguaje de programación** que se utiliza principalmente en el desarrollo web. Fue creado por Brendan Eich en 1995 mientras trabajaba para Netscape Communications Corporation. Inicialmente, se llamó Mocha, luego LiveScript y finalmente JavaScript.

En los primeros días de la web, los navegadores solo podían mostrar contenido estático. JavaScript permitió a los desarrolladores agregar **interactividad y animación** a las páginas web, lo que llevó a la creación de aplicaciones web más sofisticadas.

Hoy en día, JavaScript es uno de los lenguajes más populares del mundo. Se utiliza para:
- Crear aplicaciones web complejas
- Aplicaciones móviles híbridas
- Juegos en línea
- Automatización y mucho más

> 📈 **Dato:** Su popularidad ha impulsado la creación de muchas bibliotecas y frameworks que simplifican el desarrollo web (React, Angular, Vue, etc).

---

## 📜 ECMAScript: El estándar de JavaScript
**ECMAScript** es el estándar que define cómo debe funcionar JavaScript. Fue creado por la European Computer Manufacturers Association (ECMA).

- La primera versión se lanzó en 1997.
- Cada nueva versión agrega características y mejoras.
- La versión más reciente es ECMAScript 2022 (lanzada en 2021).

> 🧑‍💻 **Importante:** ECMAScript asegura que el código JavaScript funcione de manera similar en todos los navegadores y plataformas.

---

## 🖥️ Node.js: JavaScript fuera del navegador
Además de los navegadores, JavaScript también se puede ejecutar en servidores gracias a **Node.js**.

- Node.js está construido sobre el motor V8 de Google Chrome.
- Permite ejecutar JavaScript en el backend (servidor).
- Así, puedes programar tanto el frontend como el backend usando el mismo lenguaje.

### 🔧 Instalando Node.js
1. Descarga Node.js desde [nodejs.org/es](https://nodejs.org/es)
2. Se instalará también el gestor de paquetes **npm**.
3. Verifica la instalación en la terminal:
   ```bash
   node -v
   npm -v
   ```
4. Crea un archivo `prueba.js` y escribe:
   ```js
   console.log('¡Probando NodeJS!');
   ```
5. Ejecuta en la terminal:
   ```bash
   node prueba.js
   ```

---

## 🛠️ Herramientas para programar en JavaScript
- **DevTools:** Herramientas de desarrollo integradas en los navegadores (F12 o Ctrl+Shift+I).
- **RunJS:** IDE de escritorio para probar código JavaScript rápidamente.
- **Visual Studio Code (VSCode):** Editor de código recomendado para proyectos JavaScript.

> 💡 **Tip:** Aprende a usar la consola del navegador para depurar y probar fragmentos de código.

---

## 🔗 Integración de JavaScript en HTML
### Vinculación interna
Permite escribir código JS directamente en el archivo HTML:
```html
<body>
  ...
  <script>
    console.log("Hola Mundo!");
  </script>
</body>
```

### Vinculación externa
La forma más recomendada. Se enlaza un archivo `.js` externo:
```html
<body>
  ...
  <script src="./js/script.js"></script>
</body>
```
> ✅ **Ventaja:** Facilita el mantenimiento y la organización del código.

---

## 💬 Cuadros de Diálogo en JavaScript
Los **cuadros de diálogo** permiten interactuar con el usuario:
- `alert()`: Muestra un mensaje simple.
- `confirm()`: Muestra un mensaje con opciones Aceptar/Cancelar.
- `prompt()`: Solicita al usuario que ingrese un dato.

> 📝 **Ejemplo:**
> ```js
> alert('¡Bienvenido!');
> let nombre = prompt('¿Cómo te llamas?');
> let continuar = confirm('¿Deseas continuar?');
> ```

---

## 🖥️ Mensajes por consola
- `console.log()`: Imprime mensajes o variables en la consola.
- `console.warn()`: Imprime advertencias.
- `console.error()`: Imprime errores.
- `console.table()`: Muestra datos en formato de tabla.

> 🧑‍🔧 **Usa la consola para depurar y entender el flujo de tu programa!**

---

## 📦 Las Variables en JavaScript
> "Las variables son espacios de memoria donde podemos almacenar distintos tipos de datos."

### Declaración de variables: `var`, `let` y `const`
- **`var`**: Ámbito de función, puede causar problemas de alcance. Evitar en código moderno.
- **`let`**: Ámbito de bloque, permite reasignación. Usar para variables que cambian.
- **`const`**: Ámbito de bloque, no permite reasignación. Usar para valores constantes.

> 🟢 **Recomendación:** Usa `const` por defecto y `let` solo si necesitas cambiar el valor. Evita `var` salvo casos muy específicos.

---

## 🧮 Tipos de datos en JavaScript
- **Number (Número):** Enteros o decimales. Ej: `let edad = 25;`
- **String (Cadena de texto):** Secuencias de caracteres. Ej: `let nombre = "Ana";`
- **Boolean (Booleano):** Solo `true` o `false`. Ej: `let esMayor = true;`

> 📚 **Existen otros tipos como undefined, null, object, array y function, que veremos más adelante.**

---

## 🏪 Ejercicio: Viaje a la fiambrería
Piensa en las variables necesarias para ir a comprar queso:
1. Temperatura (número)
2. ¿Está lloviendo? (booleano)
3. Piso del ascensor (número)
4. Hora actual, hora de apertura y cierre (números)
5. Cantidad de queso (número)
6. Deuda con Mónica (número)

> 💡 **Actividad:** Piensa dos situaciones cotidianas e identifica las variables involucradas. Escribe esas variables en un archivo `.js` y decide cuáles puede ingresar el usuario (usa `prompt`).

---

## 🔄 Intercambio de variables
Supongamos que serviste dos vasos de bebida, pero pusiste cerveza en la copa y vino en el otro vaso. ¡Un horror! 😱

¿Cómo harías para invertir los contenidos?

### Ejemplo de intercambio de variables en JavaScript:
```js
let copa = 'cerveza';
let vaso = 'vino';
let temp = copa;
copa = vaso;
vaso = temp;
console.log('Copa:', copa); // vino
console.log('Vaso:', vaso); // cerveza
```

> 🧪 **Prueba este código y experimenta con tus propios ejemplos!**

---

## 📝 Resumen y próximos pasos
- JavaScript es esencial para la web moderna.
- Aprende a usar variables, tipos de datos y cuadros de diálogo.
- Practica integrando JS en HTML y usando la consola.
- ¡Experimenta y no tengas miedo de equivocarte!

> 💬 **¿Listo para escribir tus primeros programas en JavaScript?**


