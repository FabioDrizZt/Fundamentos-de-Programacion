# 🟦 Estructuras Secuenciales en JavaScript

---

## 📦 Tipos de Datos Primitivos

> "Los tipos de datos le permiten a JavaScript conocer las características que estarán disponibles para esa variable / dato."

### 🔢 Number (Número)
- Representa valores numéricos, enteros o decimales.
- Permite realizar operaciones aritméticas.

```js
let edad = 35; // número entero
let precio = 150.65; // decimales
let malaDivision = "35" / 2; // NaN - Not a Number
```

### 📝 String (Cadena de texto)
- Almacena y manipula secuencias de caracteres.
- Se escribe entre comillas simples (' '), dobles (" ") o invertidas (`` ` ``).

```js
let nombre = 'Mamá Luchetti';
let ocupacion = "Master of the sopas";
```

### 🔘 Boolean (Booleano)
- Representa un valor lógico: `true` o `false`.
- Se usa para evaluaciones y control de flujo.

```js
let laCharlaEstaReCopada = true;
let hayAsadoAlFinal = false;
```

---

## ❓ Tipos Especiales: NaN, undefined y null

### ❌ NaN (Not-A-Number)
- Representa un valor que no es un número, aunque sea de tipo `number`.

```js
let nombre = "Fabio";
console.log("Fabio"-1); // NaN
```

### 🕳️ undefined
- Una variable declarada pero no inicializada es `undefined`.

```js
let saludo; // undefined
saludo = "¡Hola!"; // Ahora tiene valor
```

### 🚫 null
- Ausencia intencional de valor.

```js
let temperatura = null; // No llegó un dato, algo falló
```

---

## 🧩 Tipos de Datos Objetos

### 🗂️ Object (Objeto)
- Colección de propiedades y métodos relacionados.

```js
let persona = {
  nombre: "Ana",
  edad: 30
};
console.log(persona.nombre); // "Ana"
```

### 📚 Array (Arreglo)
- Secuencia ordenada de elementos.

```js
let frutas = ["manzana", "banana", "pera"];
console.log(frutas[1]); // "banana"
```

### 🛠️ Function (Función)
- Las funciones son tratadas como variables.

```js
function saludar() {
  console.log("¡Hola!");
}
```

---

## ➕ Operadores Aritméticos

- **Suma (+):** Suma números o concatena cadenas.
- **Resta (-):** Resta valores.
- **Multiplicación (*):** Multiplica valores.
- **División (/):** Divide valores.
- **Módulo (%):** Resto de una división.
- **Incremento (++):** Suma 1 a la variable.
- **Decremento (--):** Resta 1 a la variable.

```js
let suma = 5 + 3; // 8
let resta = 10 - 4; // 6
let multiplicacion = 6 * 7; // 42
let division = 20 / 4; // 5
let modulo = 15 % 2; // 1
```

### Ejemplo de incremento y decremento
```js
let num = 5;
console.log(++num); // 6 (pre-incremento)
console.log(num++); // 6 (post-incremento, luego num es 7)
console.log(--num); // 6 (pre-decremento)
console.log(num--); // 6 (post-decremento, luego num es 5)
```

---

## 📝 Operadores de Asignación

- **=** Asignación básica
- **+=** Suma y asigna
- **-=** Resta y asigna
- ***=** Multiplica y asigna
- **/=** Divide y asigna
- **%=** Módulo y asigna

```js
let x = 10;
x += 5; // 15
x -= 3; // 12
x *= 2; // 24
x /= 4; // 6
x %= 4; // 2
```

---

## 🔢 Propiedades y Métodos de Números

### Propiedades
- `Number.MAX_VALUE`: Número más grande representable.
- `Number.MIN_VALUE`: Número positivo más pequeño.
- `Number.POSITIVE_INFINITY` y `Number.NEGATIVE_INFINITY`: Infinito positivo/negativo.
- `Number.NaN`: Not a Number.

### Métodos
- `toFixed(decimales)`: Redondea a decimales.
- `toPrecision(precision)`: Notación de longitud fija o científica.
- `toString(base)`: Convierte a cadena en base especificada.

```js
let num = 3.14159;
console.log(num.toFixed(2)); // "3.14"
console.log(num.toPrecision(4)); // "3.142"
console.log((255).toString(16)); // "ff"
```

---

## 🔄 Métodos de Conversión (Parseo)

- `parseInt()`: Convierte cadena a entero.
- `parseFloat()`: Convierte cadena a decimal.
- `Number()`: Convierte cadena a número (entero o decimal).
- `String()`: Convierte valor a cadena.

```js
let str = "123";
let num = parseInt(str); // 123
let num2 = parseFloat("3.14"); // 3.14
let num3 = Number("42"); // 42
let str2 = String(42); // "42"
```

---

## 🧮 Objeto Math

El objeto `Math` tiene propiedades y métodos para constantes y funciones matemáticas.

### Propiedades
- `Math.PI`, `Math.E`, `Math.LN2`, etc.

### Métodos
- `Math.abs(x)`: Valor absoluto
- `Math.sqrt(x)`: Raíz cuadrada
- `Math.pow(x, y)`: Potencia
- `Math.floor(x)`: Redondea hacia abajo
- `Math.ceil(x)`: Redondea hacia arriba
- `Math.round(x)`: Redondea al entero más cercano
- `Math.random()`: Número aleatorio entre 0 y 1

```js
console.log(Math.PI); // 3.141592...
console.log(Math.abs(-5)); // 5
console.log(Math.sqrt(16)); // 4
console.log(Math.pow(2, 3)); // 8
console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1)); // 5
console.log(Math.round(4.5)); // 5
console.log(Math.random()); // Ejemplo: 0.12345
```

> 📚 Más información: [Math - JavaScript | MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math)

---

## 🏋️‍♂️ Ejercitación

### 1. Conversión de peso
Teniendo el peso de una persona en gramos, determinar ese peso en kilogramos.

### 2. Conversión de temperaturas
Escribe un algoritmo que permita al usuario ingresar una temperatura en grados Celsius y la convierta a grados Fahrenheit. Fórmula: °F = (°C * 9/5) + 32.

### 3. Cálculo del área de un triángulo
Diseña un algoritmo que calcule el área de un triángulo a partir de su base y altura, ingresadas por el usuario. Muestra el resultado con un mensaje claro.

### 4. Costo de una llamada telefónica
Crea un algoritmo que calcule el costo de una llamada telefónica. El usuario ingresa la duración de la llamada en minutos y el costo por minuto. El algoritmo debe mostrar el costo total.

### 5. Promedio de pacientes
En un centro de salud se desea determinar el promedio de pacientes atendidos en los primeros tres meses del año. Para dicho cálculo, se cuenta con las cantidades mensuales de pacientes que fueron atendidos, de enero a marzo, por los profesionales de la salud del lugar.

### 6. Costo de terreno
Calcular el costo de un terreno rectangular, teniendo como dato la anchura y la longitud en metros, y el costo del metro cuadrado.

### 7. Cálculo de tiempo de viaje
Diseña un algoritmo que calcule el tiempo que tarda un vehículo en recorrer una distancia, dado que el usuario ingresa la distancia (en km) y la velocidad promedio (en km/h). Muestra el tiempo en horas y minutos.

### 8. Porcentaje de inversión
Tres personas deciden invertir sus ahorros para iniciar un emprendimiento. Cada una de ellas invierte una cantidad distinta de dinero. Determinar el porcentaje invertido por cada una de las personas con respecto a la cantidad total invertida.

---

## 📦 Ejercitación práctica en GitHub

Para la próxima entrega de ejercicios de Introducción a JavaScript, utilizaremos un repositorio en GitHub que contiene los archivos necesarios y las pruebas para verificar sus soluciones.

### 🔗 El Repositorio
[Ejercitaciones-JS-Variables-y-operadores](https://github.com/FabioDrizZt/Ejercitaciones-JS-Variables-y-operadores)

### 📝 Instrucciones para Completar y Entregar los Ejercicios
1. **Forkear el Repositorio:**
   - Ve a la página del repositorio en GitHub.
   - Haz clic en "Fork" (esquina superior derecha). Esto crea una copia en tu cuenta.
2. **Clonar tu Repositorio Forkeado:**
   - Clónalo a tu máquina local con:
     ```bash
     git clone https://github.com/TU_USUARIO/Ejercitaciones-JS-Variables-y-operadores.git
     ```
3. **Completar los Ejercicios:**
   - Navega dentro de la carpeta clonada.
   - Escribe el código en los archivos `.js` correspondientes.
4. **Verificar tus Soluciones (Opcional pero Recomendado):**
   - Asegúrate de tener Node.js y npm instalados.
   - Ejecuta en la terminal:
     ```bash
     npm install
     npm test
     ```
5. **Guardar tus Soluciones:**
   - Una vez satisfecho, guarda los cambios y sube tu trabajo.

> ❓ ¡No dudes en consultar si tienes alguna pregunta durante el proceso!

---

## 🎯 Resumen
- Comprendiste los tipos de datos y operadores en JavaScript.
- Aprendiste a usar métodos y propiedades útiles para números y conversiones.
- Practicaste con ejercicios reales y aprendiste a usar GitHub para entregar tus soluciones.

¡Éxito con los ejercicios y sigue practicando! 💪

