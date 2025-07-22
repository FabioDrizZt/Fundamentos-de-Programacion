# 🧩 Clase 11 - Funciones en JavaScript

¡Bienvenido/a a la Clase 11! Hoy nos adentramos en uno de los conceptos más importantes y poderosos de la programación: las **funciones**. Una función es un bloque de código reutilizable diseñado para realizar una tarea específica. Nos ayudan a organizar nuestro código, hacerlo más legible, evitar la repetición y facilitar su mantenimiento.

A lo largo de esta clase, exploraremos desde la declaración básica hasta conceptos más avanzados como las funciones flecha y el alcance de las variables.

---

## 1. Declaración de una Función

Una función se define con la palabra clave `function`, seguida de un nombre, un par de paréntesis `()` y un bloque de código `{}`. Para que se ejecute, debemos "llamarla" por su nombre.

### 🧠 Análisis del ejemplo: `01_declaracion.js`
```javascript
function saludo () {
  console.log('Hola mundo');
}

saludo(); // Llama a la función, que imprimirá "Hola mundo"
```

---

## 2. Parámetros

Los parámetros son variables que se declaran en la definición de una función. Nos permiten pasarle datos (argumentos) para que trabaje con ellos.

### 🧠 Análisis del ejemplo: `02_parametro.js`
```javascript
function saludo (nombre) {
  console.log('Hola ' + nombre);
}

saludo('Juan');    // 'Juan' es el argumento que se asigna al parámetro 'nombre'
saludo('Maria');   // 'Maria' es el argumento
```

---

## 3. Retorno de Valores (`return`)

Una función puede procesar datos y devolver un resultado usando la palabra clave `return`. Cuando se ejecuta `return`, la función termina y devuelve el valor especificado.

### 🧠 Análisis del ejemplo: `03_retorno.js`
```javascript
function saludo (nombre) {
  return 'Hola ' + nombre; // Devuelve el string en lugar de imprimirlo
}

const mensaje = saludo('Pedro'); // El valor devuelto se guarda en 'mensaje'
console.log(mensaje);            // Imprime "Hola Pedro"
```

---

## 4. Múltiples Parámetros y Valores por Defecto

Una función puede aceptar múltiples parámetros, separados por comas. También podemos asignarles **valores por defecto** usando el signo `=`, que se usarán si no se proporciona un argumento para ese parámetro.

### 🧠 Análisis de ejemplos:
-   **`04_multiples_parametros.js`**: Muestra una función que acepta `nombre` y `apellido`.
-   **`05_valores_por_defecto.js`**: Mejora la función anterior asignando valores por defecto.

```javascript
// Ejemplo de 05_valores_por_defecto.js
function saludo (nombre = 'Visitante', apellido = 'Anónimo') {
  return 'Hola ' + nombre + ' ' + apellido;
}

console.log(saludo('Maria', 'Rodriguez')); // Hola Maria Rodriguez
console.log(saludo('Pedro'));             // Hola Pedro Anónimo
console.log(saludo());                    // Hola Visitante Anónimo
```

---

## 5. Funciones Expresadas vs. Declaradas

Además de la declaración tradicional, podemos crear funciones asignándolas a variables. A esto se le llama **función expresada**. Una diferencia clave es el *hoisting* (elevación): las funciones declaradas se pueden llamar antes de definirlas, pero las expresadas no.

### 🧠 Análisis del ejemplo: `07_funciones_expresadas.js`
```javascript
// Función expresada
const sumar = function (n1, n2) {
  return n1 + n2;
};

// Función declarada
function restar(n1, n2) {
  return n1 - n2;
}
```

---

## 6. Alcance o Ámbito (*Scope*)

El *scope* define la accesibilidad de las variables. Las variables declaradas fuera de cualquier función tienen un **alcance global**. Las declaradas dentro de una función tienen un **alcance local** y solo se puede acceder a ellas desde dentro de esa función.

### 🧠 Análisis del ejemplo: `08_alcance_ambito_scope.js`
```javascript
const nombreUsuario = 'Juan'; // Variable global

function mostrarSuma (n1, n2) {
  const suma = n1 + n2;      // Variable local
  console.log('Hola ' + nombreUsuario); // OK: Puede acceder a la global
  console.log(suma);                  // OK: Puede acceder a la local
}

mostrarSuma(2, 3);
// console.log(suma); // Error: 'suma' no está definida en el alcance global
```

---

## 7. Funciones Flecha (`=>`)

Las funciones flecha son una sintaxis más corta y moderna para escribir funciones expresadas. Son muy populares en el JavaScript actual.

### 🧠 Análisis del ejemplo: `09_funciones_flecha.js`
```javascript
// Función expresada tradicional
const multiplicar = function (n1, n2) {
  return n1 * n2;
};

// Función flecha equivalente
const multiplicarFlecha = (n1, n2) => n1 * n2;

// Si tiene más de una línea, necesita llaves y un return explícito
const sumarFlecha = (n1, n2) => {
  const resultado = n1 + n2;
  return resultado;
};
```

---

## 🚀 Ejemplo Práctico: `10_calculadora.js`

Este archivo es un excelente ejemplo de cómo podemos llevar las funciones a otro nivel, pasándolas como argumentos a otras funciones (un concepto llamado *High-Order Functions*).

### 🧠 Análisis del ejemplo:
```javascript
const suma = (n1, n2) => n1 + n2;
const resta = (n1, n2) => n1 - n2;

// 'calculadora' recibe una función como primer argumento
const calculadora = (operacion, n1, n2) => {
  if (typeof operacion === 'function') {
    return operacion(n1, n2); // Ejecuta la función recibida
  }
  return "Operacion debe ser una funcion";
};

console.log("Suma: " + calculadora(suma, 2, 3));    // Pasa la función 'suma'
console.log("Resta: " + calculadora(resta, 2, 3));   // Pasa la función 'resta'
// Incluso podemos pasar una función anónima directamente
console.log("Expo: " + calculadora((a, b) => a ** b, 2, 3));
```
Este patrón es increíblemente flexible y potente.

---
