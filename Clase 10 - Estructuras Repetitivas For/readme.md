# 🔁 Clase 10 - Estructuras Repetitivas: `for`, `for...in` y `for...of`

¡Bienvenido/a a la Clase 10! En esta lección, vamos a profundizar en las **estructuras repetitivas**, centrándonos en el versátil bucle `for`. Esta estructura es una de las más utilizadas en programación, ya que nos permite ejecutar un bloque de código un número determinado de veces, iterar sobre colecciones de datos y mucho más.

Hoy exploraremos tres variantes del bucle `for`: el clásico `for`, el `for...of` para iterar sobre valores, y el `for...in` para iterar sobre propiedades de objetos.

---

## 📜 Bucle `for` clásico

El bucle `for` tradicional es ideal cuando sabemos de antemano cuántas veces queremos que se repita una acción. Su sintaxis consta de tres partes clave: inicialización, condición e incremento/decremento.

### Sintaxis
```javascript
for (inicializacion; condicion; incremento) {
  // Código que se ejecuta en cada iteración
}
```
-   **Inicialización:** Se ejecuta una sola vez, antes de empezar. Generalmente se usa para declarar e inicializar una variable contadora (ej: `let i = 0`).
-   **Condición:** Se evalúa antes de cada iteración. Si es `true`, el bucle continúa. Si es `false`, se detiene.
-   **Incremento:** Se ejecuta al final de cada iteración, usualmente para actualizar el contador (ej: `i++`).

### 🧠 Análisis del ejemplo: `for.js`

En nuestro archivo `for.js`, vemos varios usos del bucle `for`:

1.  **Contador simple:**
    ```javascript
    for (let i = 0; i < 10; i++) {
      console.log(`index: ${i}`);
    }
    ```
    Este bucle imprime los números del 0 al 9.

2.  **Recorrer un array:**
    ```javascript
    const frutas = ['Manzana', 'Banana', 'Cereza'];
    for (let i = 0; i < frutas.length; i++) {
      console.log(frutas[i]);
    }
    ```
    Aquí usamos la propiedad `.length` del array para definir la condición de parada, recorriendo e imprimiendo cada elemento.

3.  **Bucles anidados:**
    ```javascript
    for (let i = 1; i <= 10; i++) {
      console.log(`--- Tabla de multiplicación del ${i} ---`);
      for (let j = 1; j <= 12; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
      }
    }
    ```
    Este ejemplo muestra cómo un bucle puede contener otro, una técnica muy útil para trabajar con estructuras de datos complejas o, como en este caso, para generar las tablas de multiplicar.

---

## ✨ Bucle `for...of` (Para iterar sobre valores)

El bucle `for...of` ofrece una sintaxis más limpia y directa para recorrer los **valores** de elementos iterables como arrays, strings, etc. No necesitamos un contador; en cada iteración, obtenemos directamente el elemento.

### Sintaxis
```javascript
for (const elemento of iterable) {
  // Código a ejecutar con cada elemento
}
```

### 🧠 Análisis del ejemplo: `for of.js`

```javascript
const frutas = ['Manzana', 'Banana', 'Cereza'];
for (const fruta of frutas) {
  console.log(fruta);
}
```
Este código hace lo mismo que el ejemplo de array con el `for` clásico, pero de una manera mucho más legible. ¡Es la forma recomendada para recorrer arrays!

---

## 🔍 Bucle `for...in` (Para iterar sobre propiedades)

El bucle `for...in` está diseñado para recorrer las **propiedades** (claves) de un objeto. No se recomienda usarlo para arrays, ya que puede incluir propiedades inesperadas.

### Sintaxis
```javascript
for (const clave in objeto) {
  // Código a ejecutar con cada clave
}
```

### 🧠 Análisis del ejemplo: `for in.js`
```javascript
const persona = {
  nombre: 'Juan',
  edad: 30,
  sexo: 'Masculino'
};

for (const clave in persona) {
  console.log(`${clave}: ${persona[clave]}`);
}
```
En cada iteración, `clave` toma el nombre de una propiedad (`'nombre'`, `'edad'`, `'sexo'`). Luego, usamos la notación de corchetes `persona[clave]` para acceder al valor correspondiente.

---

## 🧩 Bucles y Condicionales

Los bucles se vuelven aún más poderosos cuando los combinamos con estructuras condicionales. Dentro de un bucle, podemos usar sentencias como `break` para detenerlo por completo o `continue` para saltar a la siguiente iteración.

### 🧠 Análisis de ejemplos:
-   **`bucles y condicionales.js`**: Este archivo muestra un juego para adivinar un número. Usa `break` para salir del bucle si el usuario adivina correctamente y `continue` para ignorar entradas no válidas (como texto en lugar de un número).

-   **`Venta de Entradas de Cine.js`**: Este es un excelente caso práctico. Utiliza un bucle `while(true)` que se combina con condicionales `if` para aplicar descuentos y un `break` para terminar el programa cuando el usuario decide no ingresar más clientes.

---

¡Felicidades! Has completado una inmersión profunda en los bucles `for`. Entender sus diferentes variantes y cómo combinarlos con condicionales te da un control enorme sobre el flujo de tus programas. ¡Sigue practicando con los ejemplos! 🚀
