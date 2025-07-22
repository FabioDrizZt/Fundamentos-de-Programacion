# 🔢 Clase 12 - Arrays en JavaScript

¡Bienvenido/a a la Clase 12! En esta lección nos sumergiremos en los **arrays**, una de las estructuras de datos más fundamentales y utilizadas en JavaScript. Un array es una colección ordenada de valores, que pueden ser de cualquier tipo: números, strings, booleanos, objetos e incluso otros arrays.

Aprender a manipular arrays es esencial para cualquier desarrollador, y hoy veremos los métodos más comunes para crearlos, acceder a sus datos y modificarlos.

---

## 1. Creación y Acceso

Un array se crea con corchetes `[]`, y sus elementos se separan por comas. Para acceder a un elemento, usamos su **índice** (su posición), que siempre empieza en `0`.

### 🧠 Análisis del ejemplo: `01_creacion_y_acceso.js`
```javascript
// Creación de un array de strings
let pelisFavoritas = ["Star Wars", "Star Trek", "Batman"];

// Acceso a los elementos
console.log(pelisFavoritas[0]); // "Star Wars"
console.log(pelisFavoritas[2]); // "Batman"

// La propiedad .length nos da el número de elementos
console.log(pelisFavoritas.length); // 3

// El método .at() nos permite usar índices negativos para acceder desde el final
console.log(pelisFavoritas.at(-1)); // "Batman" (el último elemento)
```

---

## 2. Búsqueda de Elementos

JavaScript nos ofrece varios métodos para saber si un elemento existe en un array o en qué posición se encuentra.

### 🧠 Análisis del ejemplo: `02_indexOf.js`
-   `indexOf(elemento)`: Devuelve el **primer índice** donde se encuentra un elemento. Si no lo encuentra, devuelve `-1`.
-   `lastIndexOf(elemento)`: Devuelve el **último índice** de un elemento. También devuelve `-1` si no lo encuentra.
-   `includes(elemento)`: Devuelve `true` si el elemento existe en el array, y `false` si no.

```javascript
const numeros = [1, 5, 3, 5, 9];
console.log(numeros.indexOf(5));    // 1 (la primera aparición)
console.log(numeros.lastIndexOf(5)); // 3 (la última aparición)
console.log(numeros.includes(3));   // true
console.log(numeros.includes(8));   // false
```

---

## 3. Extracción de Partes de un Array (`slice`)

El método `slice()` devuelve una **copia superficial** de una porción de un array en un nuevo array. Es importante destacar que **no modifica el array original**.

### 🧠 Análisis del ejemplo: `03_slice.js`
```javascript
const numeros = [1, 2, 3, 4, 5];
//               0  1  2  3  4

// slice(inicio, fin) - el 'fin' no se incluye
const subArray1 = numeros.slice(1, 4); // [2, 3, 4]

// Si se omite el final, va hasta el último elemento
const subArray2 = numeros.slice(2); // [3, 4, 5]

console.log(numeros); // [1, 2, 3, 4, 5] (el original no cambió)
```

---

## 4. Agregar y Quitar Elementos (Mutabilidad)

Estos métodos **modifican el array original**.

### 🧠 Análisis del ejemplo: `04_agregar_y_quitar_elementos.js`
-   `push(elem)`: Agrega uno o más elementos **al final** del array.
-   `pop()`: Quita el **último** elemento del array y lo devuelve.
-   `unshift(elem)`: Agrega uno o más elementos **al principio** del array.
-   `shift()`: Quita el **primer** elemento del array y lo devuelve.

El método `splice()` es el más versátil:
-   `splice(inicio, cantAEliminar, ...itemsAAgregar)`: Cambia el contenido de un array eliminando, reemplazando o agregando elementos.

```javascript
const frutas = ["banana", "manzana"];

frutas.push("pera");      // ["banana", "manzana", "pera"]
frutas.shift();         // ["manzana", "pera"]

// Elimina 1 elemento desde el índice 1 y agrega "kiwi" y "uva"
frutas.splice(1, 1, "kiwi", "uva"); // ["manzana", "kiwi", "uva"]
```

---

## 5. Otros Métodos Útiles

### `join()`
Convierte todos los elementos de un array en un **string**, uniéndolos con un separador que especifiquemos.

#### 🧠 Análisis del ejemplo: `05_join.js`
```javascript
const correos = ["test@mail.com", "otro@mail.com"];
console.log(correos.join("; ")); // "test@mail.com; otro@mail.com"
```

### `concat()` y Spread Operator (`...`)
Unen dos o más arrays, devolviendo un **nuevo array**.

#### 🧠 Análisis del ejemplo: `06_concat.js`
```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const combinado1 = arr1.concat(arr2);   // [1, 2, 3, 4]
const combinado2 = [...arr1, ...arr2];    // [1, 2, 3, 4] (forma moderna)
```

### `sort()` y `reverse()`
-   `reverse()`: Invierte el orden de los elementos del array (muta el original).
-   `sort()`: Ordena los elementos del array (muta el original). ¡Cuidado! Por defecto, ordena los valores como si fueran strings. Para números, se necesita un paso extra que veremos en la Clase 14.

#### 🧠 Análisis del ejemplo: `07_sort_y_reverse.js`
```javascript
const nombres = ["Zaira", "Ana", "Carlos"];
nombres.sort();    // ["Ana", "Carlos", "Zaira"]
nombres.reverse(); // ["Zaira", "Carlos", "Ana"]
```

También existen las versiones que **no mutan** el array original:
- `toReversed()` y `toSorted()` devuelven un nuevo array invertido u ordenado.
