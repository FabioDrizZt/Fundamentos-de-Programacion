# 🟨 Estructuras Condicionales en JavaScript

---

## 🤔 ¿Qué son las Estructuras Condicionales?
Las **estructuras condicionales** permiten que un programa tome decisiones y ejecute diferentes bloques de código según se cumplan o no ciertas condiciones. Son fundamentales para que nuestros programas sean inteligentes y respondan a distintas situaciones.

---

## 🧮 Operadores de Comparación
En JavaScript, los **operadores de comparación** se utilizan para comparar valores y devuelven un resultado booleano (`true` o `false`).

- `==` Igualdad (compara valores, no tipos)
- `===` Igualdad estricta (compara valores y tipos)
- `!=` Desigualdad
- `!==` Desigualdad estricta
- `>` Mayor que
- `<` Menor que
- `>=` Mayor o igual que
- `<=` Menor o igual que

```js
console.log(5 == '5'); // true
console.log(5 === '5'); // false
console.log(10 > 3); // true
```

---

## 🔗 Operadores Lógicos
Permiten combinar y evaluar múltiples expresiones lógicas:
- `&&` (AND lógico): Verdadero si ambas condiciones son verdaderas.
- `||` (OR lógico): Verdadero si al menos una condición es verdadera.
- `!` (NOT lógico): Invierte el valor lógico.

```js
let edad = 20;
let tieneLicencia = true;
console.log(edad >= 18 && tieneLicencia); // true
console.log(!(edad < 18)); // true
```

---

## 🏗️ Condicionales en JavaScript
Las **estructuras condicionales** más comunes son `if`, `else if`, `else` y el operador ternario. Permiten ejecutar diferentes bloques de código según el resultado de una condición.

### Estructura básica `if`
```js
if (condición) {
  // Código a ejecutar si la condición es verdadera
}
```

### Estructura `if-else`
```js
if (condición) {
  // Código si la condición es verdadera
} else {
  // Código si la condición es falsa
}
```

### Estructura `else if`
Permite evaluar múltiples condiciones en secuencia.
```js
if (condición1) {
  // Código si condición1 es verdadera
} else if (condición2) {
  // Código si condición2 es verdadera
} else {
  // Código si ninguna condición es verdadera
}
```

### If anidado
Puedes colocar un `if` dentro de otro para evaluar condiciones jerárquicas.
```js
if (edad >= 18) {
  if (tieneLicencia) {
    console.log("Puede conducir un automóvil.");
  } else {
    console.log("No tiene licencia de conducir.");
  }
} else {
  console.log("Es menor de edad.");
}
```

### Operador ternario
Una forma abreviada de escribir un `if-else`.
```js
condición ? valorSiVerdadero : valorSiFalso;
// Ejemplo:
let acceso = edad >= 18 ? "Bienvenido" : "No puedes pasar";
```

> 💡 **Tip:** El operador ternario es ideal para asignaciones rápidas o mensajes cortos.

---

## 📝 Actividades y Ejercicios

### 1. Cambios en el control de acceso
Revisa y modifica el siguiente código para cumplir con las consignas:
```js
let edad = 20;
if (edad < 18) {
  console.log("No puede pasar al bar.");
} else if (edad < 21) {
  console.log("Puede pasar al bar, pero no puede tomar alcohol.");
} else {
  console.log("Puede pasar al bar y tomar alcohol.");
}
```
**Consignas:**
- Si la edad es negativa, mostrar: "Error, edad inválida. Por favor ingrese un número válido." (No mostrar ningún otro mensaje)
- Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a la mayoría de edad.
- Si su edad es impar, agregar: "¿Sabías que tu edad es impar?" en cualquiera de los mensajes.

### 2. Total a pagar
Crea un archivo llamado `totalAPagar.js` que lea dos datos (`vehiculo` y `litrosConsumidos`) usando `prompt`. Calcula el total a pagar:
- "coche": $86 por litro
- "moto": $70 por litro
- "autobús": $55 por litro
- Si los litros consumidos están entre 0 y 25, suma $50 al total
- Si los litros consumidos es mayor a 25, suma $25 al total

### 3. ¿Cuál es el número secreto?
Crea un archivo que lea un número ingresado por el usuario y verifique si es el número secreto (aleatorio entre 1 y 10 usando `Math.random()`).
- Si acierta, felicítalo.
- Si no, muestra un mensaje de aliento con el número ingresado y el secreto.

### 4. Abrir paracaídas
Crea un archivo `abrirParacaidas.js` que lea dos valores: velocidad y altura. Indica si el paracaídas debe abrirse:
- Velocidad < 1000 km/h
- Altura >= 2000m y < 3000m

### 5. Tipos de triángulos
Escribe un algoritmo que, ingresando los lados de un triángulo, indique si es isósceles, escaleno o equilátero.

---

## 🧑‍💻 Ejercitación práctica en GitHub

Para la próxima entrega de ejercicios, utilizaremos un repositorio en GitHub con los archivos y pruebas necesarias.

### 🔗 El Repositorio
[Ejercitacion-JS-Estructuras-Condicionales](https://github.com/FabioDrizZt/Ejercitacion-JS-Estructuras-Condicionales)

### 📝 Instrucciones para Completar y Entregar los Ejercicios
1. **Forkear el Repositorio:**
   - Ve a la página del repositorio en GitHub.
   - Haz clic en "Fork" (esquina superior derecha).
2. **Clonar tu Repositorio Forkeado:**
   - Clónalo a tu máquina local con:
     ```bash
     git clone https://github.com/TU_USUARIO/Ejercitacion-JS-Estructuras-Condicionales.git
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
- Aprendiste a usar operadores de comparación y lógicos.
- Comprendiste las estructuras condicionales y sus variantes.
- Practicaste con ejercicios reales y aprendiste a usar GitHub para entregar tus soluciones.

¡Éxito con los ejercicios y sigue practicando! 💪


