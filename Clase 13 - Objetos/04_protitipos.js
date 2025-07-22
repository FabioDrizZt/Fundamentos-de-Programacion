// Un prototipo es un objeto que define las propiedades y métodos que un objeto hereda.

function Animal(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
}

// --- Para añadir métodos al prototipo ---
Animal.prototype.hacerSonido = function() {
    console.log("Haciendo sonido generico...");
}
Animal.prototype.presentarse = function() {
    console.log(`Hola, soy un ${this.tipo} llamado ${this.nombre}`);
}

// Creamos un objeto 'gato' y un objeto 'perro' usando el prototipo 'Animal'.
const gato = new Animal("Mishi", "Gato");
const perro = new Animal("Firulais", "Perro");

// llamamos a los metodos presentarse de gato y perro
gato.presentarse();
perro.presentarse();

// JS busca primero el metodo en el objeto actual, luego en el prototipo.
perro.hacerSonido();

// Sobreescribimos el método hacerSonido en el prototipo de gato y perro.
perro.hacerSonido = function() {
    console.log("Guau guau 🐕");
}
gato.hacerSonido = function() {
    console.log("Miauuuu 🐱");
}

perro.hacerSonido();
gato.hacerSonido();