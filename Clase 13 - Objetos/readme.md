# 🧱 Clase 13 - Objetos en JavaScript

¡Bienvenido/a a la Clase 13! Hoy exploraremos los **objetos**, que junto a los arrays, son las estructuras de datos más importantes en JavaScript. Un objeto es una colección de datos relacionados y/o funcionalidades, que consisten en pares de **clave-valor**. Las claves son strings (también llamadas propiedades), y los valores pueden ser cualquier tipo de dato, ¡incluso otras funciones (que llamamos métodos) u objetos!

Los objetos nos permiten modelar entidades del mundo real (como un usuario, un producto, un coche) de una manera organizada y legible.

---

## 1. Objeto Literal

La forma más sencilla y común de crear un objeto es usando la sintaxis de **objeto literal**: llaves `{}`.

### 🧠 Análisis del ejemplo: `01_objeto_literal.js`
```javascript
const persona = {
    // Propiedades (clave: valor)
    nombre: 'Eduardo',
    edad: 25,
    cursos: ["React", "Node.js"],

    // Métodos (clave: función)
    saludar: function() {
        console.log("Hola, soy " + this.nombre); // 'this' se refiere al objeto actual (persona)
    }
};

// Acceso a propiedades con . y []
console.log(persona.nombre);      // Eduardo
console.log(persona["edad"]);     // 25

// Ejecución de un método
persona.saludar(); // Hola, soy Eduardo
```

---

## 2. Array de Objetos

Una estructura extremadamente común es un array donde cada elemento es un objeto. Esto es ideal para representar colecciones de datos, como una lista de usuarios, productos, etc.

### 🧠 Análisis del ejemplo: `02_array_de_objetos.js`
```javascript
const usuarios = [
    { id: 1, nombre: "Eduardo", activo: true },
    { id: 2, nombre: "Fabio", activo: true },
    { id: 3, nombre: "Maria", activo: false },
];

// Accedemos al primer objeto del array
console.log(usuarios[0]); // { id: 1, nombre: "Eduardo", activo: true }

// Y luego a una propiedad de ese objeto
console.log(usuarios[0].nombre); // Eduardo
```

---

## 3. Función Constructora (El modelo clásico)

Antes de las clases, la forma estándar de crear múltiples objetos con la misma estructura era mediante **funciones constructoras**. Por convención, sus nombres empiezan con mayúscula.

### 🧠 Análisis del ejemplo: `03_funcion_constructora.js`
```javascript
function Producto(nombre, precio) {
  // 'this' crea las propiedades en el nuevo objeto
  this.nombre = nombre;
  this.precio = precio;
}

// La palabra 'new' crea un nuevo objeto vacío y llama a la función constructora
const laptop = new Producto("Laptop Dell", 1000);
const teclado = new Producto("Teclado Razer", 500);

console.log(laptop.nombre); // Laptop Dell
```

---

## 4. Prototipos

Cada objeto en JavaScript tiene un enlace interno a otro objeto llamado su **prototipo**. Cuando intentamos acceder a una propiedad de un objeto, si no la encuentra, la busca en su prototipo. Este mecanismo, conocido como **herencia prototípica**, es muy eficiente para compartir métodos entre todas las instancias creadas por una función constructora.

### 🧠 Análisis del ejemplo: `04_protitipos.js`
```javascript
// Añadimos un método al prototipo de Producto
Producto.prototype.mostrarInfo = function () {
    console.log(`Nombre: ${this.nombre} - Precio: ${this.precio}`);
};

// Ahora, tanto laptop como teclado tienen acceso a este método sin tener una copia propia
laptop.mostrarInfo();
teclado.mostrarInfo();
```

---

## 5. Clases de ES6 (La sintaxis moderna)

ES6 introdujo la palabra clave `class`, que ofrece una sintaxis mucho más clara y familiar (similar a otros lenguajes como Java o C#) para crear objetos y manejar la herencia. Es importante saber que esto es "azúcar sintáctico" sobre el sistema de prototipos de JavaScript; ¡por debajo, todo sigue funcionando con prototipos!

### 🧠 Análisis del ejemplo: `05_clases_ES6.js`
-   `class`: Define la plantilla para los objetos.
-   `constructor`: Un método especial para crear e inicializar un objeto creado con una clase.
-   `extends`: Permite que una clase (hija) herede de otra (padre).
-   `super`: Llama al constructor de la clase padre.
-   `get` y `set`: Permiten crear getters y setters para controlar el acceso a las propiedades.

```javascript
class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    describir() {
        return `Este es un ${this.marca} ${this.modelo}.`;
    }
}

// Herencia
class AutoElectrico extends Vehiculo {
    constructor(marca, modelo, capacidadBateria) {
        super(marca, modelo); // Llama al constructor de Vehiculo
        this.capacidadBateria = capacidadBateria;
    }

    describir() {
        return `${super.describir()} - Batería de ${this.capacidadBateria} kWh.`;
    }
}

const miTesla = new AutoElectrico("Tesla", "Model S", 100);
console.log(miTesla.describir());
```

---

## 6. Bucles para Objetos

### 🧠 Análisis del ejemplo: `06_bucles_especificos.js`
-   `for...of`: Es la forma recomendada para iterar sobre los **elementos** de un array (como nuestro array de usuarios).
-   `for...in`: Se utiliza para iterar sobre las **propiedades (claves)** de un objeto.

```javascript
// for...of para el array
for (const usuario of usuarios) {
    console.log(usuario.nombre);
    
    // for...in para las propiedades de cada objeto 'usuario'
    for (const propiedad in usuario) {
       console.log(`Propiedad: ${propiedad} - Valor: ${usuario[propiedad]}`);
    }
}
```
