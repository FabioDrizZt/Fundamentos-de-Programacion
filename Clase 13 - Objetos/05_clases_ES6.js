// La palabra reservada 'class' es una nueva sintaxis para crear clases en JavaScript.
// La sintaxis es muy similar a la de las clases en C++ y Java.
// La sintaxis de ES6 es muy similar a la de las clases en C# y Java.

class Vehiculo {
    // El 'constructor' es un método especial que se ejecuta cuando se crea un objeto de la clase.
    // Se utiliza para inicializar las propiedades del objeto.
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this._kilometraje = 0; // Se usa '_' para indicar que es una propiedad privada.
    }
    // -- Métodos --
    // Los métodos son funciones que se pueden llamar desde el objeto.
    // Es una forma mas limpia que usar los prototipos.
    describir() {
        return `Este es un ${this.marca} ${this.modelo} con ${this._kilometraje} km.`;
    }

    avanzar(distancia) {
        this._kilometraje += distancia;
        console.log(`Se avanzó por ${distancia} km.`);
    }

    // Getters y setters
    // permiten acceder y modificar propiedades de un objeto.
    get kilometraje() {
        return this._kilometraje;
    }
    set kilometraje(km) {
        // validar que el valor sea un número positivo
        if (km > 0) {
            this._kilometraje = km;
        } else {
            console.log("El valor debe ser un número positivo.");
        }
    }
}

// Creamos un objeto 'vehiculo' usando la sintaxis de clases.
// La instanciación de la clase 'Vehiculo' se realiza con el operador 'new'.
// Igual que con las funciones constructoras.
const vehiculo1 = new Vehiculo("Audi", "A4");
const vehiculo2 = new Vehiculo("BMW", "M5");
const vehiculo3 = new Vehiculo("Mercedes", "S500");
const vehiculo4 = new Vehiculo("Fiat", "600");

console.log(vehiculo1.describir());
console.log(vehiculo2.describir());
console.log(vehiculo3.describir());
console.log(vehiculo4.describir());

vehiculo1.avanzar(100);
vehiculo2.avanzar(200);
vehiculo3.avanzar(300);
vehiculo4.avanzar(400);

// usar el getter de km
console.log('Kilometraje del vehiculo 1: ', vehiculo1.kilometraje);
console.log('Kilometraje del vehiculo 2: ', vehiculo2.kilometraje);
console.log('Kilometraje del vehiculo 3: ', vehiculo3.kilometraje);
console.log('Kilometraje del vehiculo 4: ', vehiculo4.kilometraje);

console.log('--- Modificando el valor del km ---');
// usar el setter de km
vehiculo1.kilometraje = 500;
vehiculo2.kilometraje = 600;
vehiculo3.kilometraje = 700;
vehiculo4.kilometraje = 800;

console.log('Kilometraje del vehiculo 1: ', vehiculo1.kilometraje);
console.log('Kilometraje del vehiculo 2: ', vehiculo2.kilometraje);
console.log('Kilometraje del vehiculo 3: ', vehiculo3.kilometraje);
console.log('Kilometraje del vehiculo 4: ', vehiculo4.kilometraje);

// --- Herencia con 'extends' ---
// Podemos crear una clase que herede propiedades y métodos de otra clase.
class AutoElectrico extends Vehiculo {
    constructor(marca, modelo, capacidadBateria) {
        // 'super()' llama al constructor de la clase padre (Vehiculo).
        super(marca, modelo);
        this.capacidadBateria = capacidadBateria; // Propiedad especifica que tiene el AutoElectrico.
    }

    // Override del método 'describir()' de la clase padre.
    // Se sobreescribe el método de la clase padre.
    // Se llama al método de la clase padre con 'super'.
    describir() {
        return `${super.describir()} - Con batería de ${this.capacidadBateria} kWh.`;
    }

    // Metodos propios del AutoElectrico
    cargarBateria() {
        console.log("Cargando batería...");
    }

}

const miTesla = new AutoElectrico("Tesla", "Model S", 100);
console.log(miTesla.describir());
miTesla.avanzar(100);
miTesla.cargarBateria();