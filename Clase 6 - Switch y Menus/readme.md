# 🟦 Estructuras Condicionales Múltiples y Menús en JavaScript

---

## 🔄 ¿Qué es una estructura condicional múltiple?
Las estructuras condicionales múltiples permiten tomar decisiones entre varias alternativas posibles, evaluando el valor de una variable o expresión. Son ideales cuando tienes muchas opciones y quieres que tu código sea más legible y organizado.

---

## 🎛️ Estructura `switch`
El `switch` nos propone una sintaxis más legible para los casos en los que queremos evaluar muchas posibilidades de un solo valor.

### Estructura básica
```js
switch (expresión) {
  case valor1:
    // código a ejecutar si la expresión es igual a valor1
    break;
  case valor2:
    // código a ejecutar si la expresión es igual a valor2
    break;
  default:
    // código a ejecutar si ningún caso es verdadero
}
```

- **`break`** es fundamental para evitar que se ejecuten los siguientes casos (fall-through).
- **`default`** es como el `else` de un if-else, y se ejecuta si ningún caso coincide.

### Agrupando casos
Puedes agrupar varios casos para ejecutar el mismo bloque de código:
```js
switch (expresión) {
  case valor1:
  case valor2:
    // código para valor1 o valor2
    break;
}
```

---

## 📝 Actividades con `switch`
### 1. Traductor Condicional
Crea un programa que traduzca "casa", "perro", "pelota", "árbol" o "genio" al inglés usando `switch`. Si la palabra no es válida, muestra un mensaje de error.

### 2. Valoración de Películas
Pide al usuario que valore una película (Muy Mala, Mala, Mediocre, Buena, Muy buena) y responde con un mensaje acorde. Si el valor es inválido, indícalo. Agradece siempre la visita.

### 3. Calificar a estudiantes
Permite ingresar el nombre y la nota de un estudiante, y asigna la calificación según una tabla de notas.

### 4. Signo zodiacal
Dada la fecha de nacimiento, indica el signo zodiacal correspondiente.

---

## 🍽️ Menús en Programación
Un menú en programación es como la carta de un restaurante: le das al usuario varias opciones y, según su elección, el programa ejecuta una acción específica. ¡Es la base de la interactividad!

> ⚠️ **Nota:** Como aún no hemos visto bucles, los menús se ejecutarán una sola vez. Más adelante, con bucles, podrás hacer menús que se repitan hasta que el usuario decida salir.

---

## 🏗️ Creando Menús con `if - else if - else`

1. Muestra las opciones al usuario (con `alert` o `console.log`).
2. Pide la elección con `prompt`.
3. Evalúa la elección con `if`, `else if` y `else`.
4. Ejecuta el código correspondiente.
5. Usa un `else` final para manejar opciones inválidas.

### Ejemplo:
```js
alert("Bienvenido al Mini Calculador:\n1. Sumar\n2. Restar\n3. Multiplicar");
let opcion = parseInt(prompt("Elige una opción (1, 2 o 3):"));
if (opcion === 1) {
  // Sumar
} else if (opcion === 2) {
  // Restar
} else if (opcion === 3) {
  // Multiplicar
} else {
  alert("Opción no válida.");
}
```

---

## 🧩 Creando Menús con `switch`

1. Muestra las opciones al usuario.
2. Pide la elección con `prompt`.
3. Usa la elección en el `switch`.
4. Define un `case` para cada opción válida.
5. Usa `break` para evitar el "fall-through".
6. Usa `default` para manejar opciones inválidas.

### Ejemplo:
```js
alert("Bienvenido al Selector de Saludos:\nA. Formal\nB. Informal\nC. Despedida");
let opcion = prompt("Elige una opción (A, B o C):");
switch (opcion) {
  case "A":
    alert("Estimado usuario, que tenga un excelente día.");
    break;
  case "B":
    alert("¡Hola! ¿Qué tal todo?");
    break;
  case "C":
    alert("¡Hasta luego! Vuelve pronto.");
    break;
  default:
    alert("Opción no válida.");
}
```

---

## 🤔 ¿Cuándo usar `if-else if-else` vs `switch`?
- **`if-else if-else`**: Útil para condiciones complejas o rangos de valores.
- **`switch`**: Más legible y organizado para muchas opciones basadas en igualdad de un solo valor.

> 💡 **Tip:** Usa `switch` para menús simples y `if-else` para lógica más compleja.

---

## ⏳ ¡Importante! Limitación Actual
Recuerda: sin bucles, los menús se ejecutan una sola vez. Cuando aprendas bucles, podrás hacer menús interactivos que se repitan hasta que el usuario decida salir. ¡Por ahora, esto es un gran primer paso!

---

## 🏆 Actividades con Menús

### 1. Calculadora Multifunción 🧮
- Menú principal: Operaciones básicas (suma, resta, multiplicación, división) y avanzadas (potencia, raíz cuadrada, valor absoluto), salir.
- Submenús según la categoría.
- Solicita los datos necesarios.
- Valida división por cero y raíz de negativos.
- Muestra el resultado o error y vuelve al menú principal (por ahora, solo una vez).

### 2. Calculadora de Áreas y Perímetros 📐
- Menú principal: Calcular área, perímetro o salir.
- Submenús: Cuadrado, triángulo, círculo, rombo.
- Solicita los datos necesarios y valida que sean positivos.
- Muestra el resultado o error y vuelve al menú principal.
- Fórmulas incluidas en el archivo.

### 3. Conversor de Unidades 📏⚖️
- Menú principal: Longitud, peso o salir.
- Submenús: km, m, cm (longitud); t, kg, g (peso).
- Solicita unidad de origen, destino y valor.
- Muestra la conversión y equivalencias.
- Valida entradas y vuelve al menú principal.

### 4. Juego de Adivinar el Número 🔢❓
- El programa genera un número aleatorio entre 1 y 100.
- El usuario intenta adivinarlo.
- Indica si el número es alto, bajo o correcto.
- Cuenta los intentos y felicita al usuario si acierta.
- Pregunta si desea jugar de nuevo.

---

## 📚 Resumen y próximos pasos
- Aprendiste a usar `switch` y a crear menús interactivos.
- Practicaste con actividades que simulan programas reales.
- ¡Cuando aprendas bucles, tus menús serán aún más poderosos!

> 💬 **¿Listo para crear tus propios menús y programas interactivos?**


