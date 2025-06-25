# 🔄 Clase 9 - Estructuras Repetitivas: `while` y `do-while`

¡Bienvenido/a a la Clase 9! En esta sección, exploraremos las **estructuras repetitivas** o **bucles**. Estas herramientas son fundamentales en la programación porque nos permiten ejecutar un bloque de código varias veces mientras se cumpla una condición, ahorrándonos la necesidad de escribir el mismo código una y otra vez.

Hoy nos enfocaremos en dos tipos de bucles: `while` y `do-while`.

---

## 📜 Bucle `while`

El bucle `while` (mientras) ejecuta un bloque de código repetidamente **mientras** una condición especificada sea verdadera. La particularidad de este bucle es que la condición se evalúa **antes** de ejecutar el código. Si la condición es falsa desde el principio, el bucle nunca se ejecutará.

### Sintaxis
```javascript
while (condicion) {
  // Código que se ejecuta mientras la condición sea verdadera
}
```

### 🧠 Análisis del ejemplo: `While.js`

En nuestro archivo `While.js`, tenemos dos ejemplos prácticos:

1.  **Contador simple:**
    ```javascript
    let vuelta = 1
    while (vuelta <= 5) {
      console.log('Dando la vuelta número ' + vuelta)
      vuelta++
    }
    ```
    - **Inicialización:** La variable `vuelta` comienza en `1`.
    - **Condición:** El bucle se ejecutará mientras `vuelta` sea menor o igual a `5`.
    - **Ejecución:** En cada "vuelta", se imprime el número de la vuelta y luego se incrementa la variable `vuelta` en `1` (`vuelta++`).
    - **Fin:** Cuando `vuelta` llega a `6`, la condición `6 <= 5` es falsa, y el bucle termina.

2.  **Suma de números:**
    ```javascript
    let index = 1
    let suma = 0
    while (index <= 100) {
      suma += index // suma = suma + index
      index += 2
    }
    console.log('La suma es: ' + suma)
    ```
    Este bucle calcula la suma de los números impares del 1 al 99. Comienza con `index = 1` y en cada paso, suma el valor de `index` a `suma` y luego incrementa `index` en `2`, pasando por `1, 3, 5, ...`.

---

## 🔁 Bucle `do-while`

El bucle `do-while` (hacer... mientras) es muy similar a `while`, pero con una diferencia clave: la condición se evalúa **después** de ejecutar el bloque de código. Esto garantiza que el código dentro del bucle se ejecute **al menos una vez**, sin importar si la condición inicial es verdadera o falsa.

### Sintaxis
```javascript
do {
  // Código que se ejecuta al menos una vez
} while (condicion);
```

### 🧠 Análisis del ejemplo: `Do-While.js`

Este bucle es ideal para situaciones donde necesitas que una acción ocurra por lo menos una vez, como validar la entrada de un usuario.

```javascript
const prompt = require('prompt-sync')()
let edad

do {
  edad = prompt('Dime tu edad: ')
} while (edad < 0 || edad > 110)

if (edad < 18) {
  console.log('Eres menor de edad')
} else {
  console.log('Eres mayor de edad')
}
```
- **Ejecución garantizada:** El programa primero **pide la edad** (`prompt`).
- **Condición:** Después, evalúa si la edad ingresada es inválida (menor que 0 o mayor que 110).
- **Repetición:** Si la edad es inválida, el bucle se repite y vuelve a pedirla. Si es válida, el bucle termina y el programa continúa.

---

## 🛒 Ejemplo práctico: `tiendaProductos.js`

En este archivo, combinamos lo aprendido en un caso de uso real: una pequeña tienda que calcula el total de una compra.

```javascript
const prompt = require('prompt-sync')()
let condicion; let total = 0
do {
  do {
    precio = prompt('Dime el precio del producto: $')
    cantidad = prompt('Dime la cantidad que quieres comprar: ')
  } while (precio <= 0 || cantidad <= 0)
  total += precio * cantidad
  condicion = prompt('Desea continuar cargando productos? (S/N): ')
} while (condicion.toLowerCase() === 's')

console.log('Total a pagar: $' + total)
```
Aquí vemos dos bucles `do-while` anidados:
1.  **Bucle interno:** Se asegura de que el `precio` y la `cantidad` ingresados sean números positivos. Si el usuario ingresa un valor inválido, se lo vuelve a pedir.
2.  **Bucle externo:** Después de agregar un producto al `total`, pregunta al usuario si desea continuar. El bucle se repetirá mientras la respuesta sea 's' (sí), sin importar si es mayúscula o minúscula gracias a `.toLowerCase()`.

---

¡Excelente trabajo! Ahora tienes una base sólida sobre cómo funcionan los bucles `while` y `do-while`. ¡Abre los archivos, experimenta con ellos y sigue practicando! 🚀
