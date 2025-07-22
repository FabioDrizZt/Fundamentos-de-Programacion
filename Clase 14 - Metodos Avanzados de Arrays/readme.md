# ⚙️ Clase 14 - Métodos Avanzados de Arrays

¡Bienvenido/a a la Clase 14! En esta lección, llevaremos nuestras habilidades con los arrays al siguiente nivel. Exploraremos una serie de métodos de "orden superior" (`High-Order Functions`) que nos permiten manipular colecciones de datos de una manera mucho más declarativa, concisa y potente que con los bucles tradicionales.

Estos métodos son esenciales en el desarrollo moderno de JavaScript y se basan en pasar una función (conocida como *callback*) como argumento, que se ejecutará para cada elemento del array.

---

## 1. `forEach()` - Para iterar

El método `forEach()` ejecuta una función *callback* una vez por cada elemento del array. Es una alternativa moderna y más legible al bucle `for`. No devuelve nada (`undefined`).

### 🧠 Análisis del ejemplo: `01_forEach.js`
```javascript
const articulos = [
  { nombre: "Celular Samsung", precio: 1000 },
  { nombre: "Notebook HP", precio: 1500 },
];

// El callback recibe el elemento, el índice y el array completo como argumentos
articulos.forEach((articulo, index, arr) => {
  console.log(`${index + 1}: ${articulo.nombre} - $${articulo.precio}`);
});
```

---

## 2. `map()` - Para transformar

El método `map()` es uno de los más utilizados. Crea un **nuevo array** con los resultados de llamar a una función *callback* para cada elemento del array. Es perfecto para transformar datos.

### 🧠 Análisis del ejemplo: `02_map.js`
```javascript
const frutas = [
  { nombre: "Manzana", precio: 100 },
  { nombre: "Banana", precio: 50 },
];

// Creamos un nuevo array solo con los nombres
const nombresFrutas = frutas.map((fruta) => fruta.nombre);
console.log(nombresFrutas); // ["Manzana", "Banana"]

// Creamos un nuevo array de objetos con el precio aumentado
const conInflacion = frutas.map((fruta) => {
  return { ...fruta, precio: fruta.precio * 1.2 };
});
console.log(conInflacion); // [{ nombre: "Manzana", precio: 120 }, ...]
```
**Diferencia clave con `forEach`**: `map` devuelve un nuevo array, `forEach` no.

---

## 3. `filter()` - Para filtrar

El método `filter()` crea un **nuevo array** con todos los elementos que pasen la prueba implementada por la función *callback*. El *callback* debe devolver un valor booleano (`true` o `false`).

### 🧠 Análisis del ejemplo: `03_filter.js`
```javascript
const frutas = [
  { nombre: "Manzana", precio: 100 },
  { nombre: "Pera", precio: 120 },
  { nombre: "kiwi", precio: 300 },
];

// Creamos un nuevo array solo con las frutas caras
const frutasCaras = frutas.filter(fruta => fruta.precio > 150);
console.table(frutasCaras); // [{ nombre: "kiwi", precio: 300 }]
```

---

## 4. `reduce()` - Para reducir a un solo valor

El método `reduce()` ejecuta una función *callback* "reductora" sobre cada elemento de un array, para devolver un **único valor** resultante (por ejemplo, una suma, un promedio, etc.).

El *callback* de `reduce` recibe dos argumentos principales:
1.  `acumulador`: El valor resultante de la iteración anterior.
2.  `elementoActual`: El elemento del array que se está procesando.

### 🧠 Análisis del ejemplo: `04_reduce.js`
```javascript
const carrito = [
  { nombre: "Manzana", precio: 100, cantidad: 2 }, // 200
  { nombre: "Banana", precio: 50, cantidad: 3 },  // 150
];

// El '0' final es el valor inicial del acumulador
const totalAPagar = carrito.reduce((acumulador, fruta) => {
  return acumulador + fruta.precio * fruta.cantidad;
}, 0);

console.log(totalAPagar); // 350
```

---

## 5. `find()` y `some()` - Para buscar y verificar

-   `find()`: Devuelve el **valor del primer elemento** del array que cumple la función de prueba. Si no encuentra nada, devuelve `undefined`.
-   `findIndex()`: Igual que `find`, pero devuelve el **índice** en lugar del valor (-1 si no lo encuentra).
-   `some()`: Comprueba si **al menos un elemento** del array cumple con la condición. Devuelve `true` o `false`.

### 🧠 Análisis de ejemplos: `05_find.js` y `06_some.js`
```javascript
const frutas = [
  { nombre: "kiwi", precio: 300 },
  { nombre: "mango", precio: 250 },
];

const frutaEncontrada = frutas.find(fruta => fruta.nombre === "kiwi");
console.log(frutaEncontrada); // { nombre: "kiwi", precio: 300 }

const hayFrutasCaras = frutas.some(fruta => fruta.precio > 280);
console.log(hayFrutasCaras); // true
```

---

## 6. `sort()` - Ordenamiento avanzado

Como vimos en la Clase 12, `sort()` por sí solo no funciona bien con números. Para ordenar correctamente números u objetos, debemos pasarle una función de comparación.

### 🧠 Análisis del ejemplo: `07_sort.js`
La función de comparación recibe dos elementos (`a` y `b`) y debe devolver:
-   Un valor **negativo** si `a` debe ir antes que `b`.
-   Un valor **positivo** si `b` debe ir antes que `a`.
-   `0` si son iguales.

```javascript
const numeros = [5, 10, 2, 8];
// Para ordenar números, simplemente restamos b de a (o viceversa)
numeros.sort((a, b) => a - b); // [2, 5, 8, 10] (ascendente)
numeros.sort((a, b) => b - a); // [10, 8, 5, 2] (descendente)

// Para ordenar objetos
frutas.sort((a, b) => a.precio - b.precio); // Ordena por precio ascendente
```

---