// Creamos un objeto 'persona' usando llaves {}.
// Dentro definimos 'propiedades' (nombre, edad, sexo) y 'métodos' (saludar, decirNombre).
// Una propiedad es una ascociación entre un clave (nombre) y un valor ('Eduardo').

const persona = {
    // --- Propiedades ---
    nombre: 'Eduardo',
    edad: 25,
    sexo: 'masculino',
    esEstudiante: true,
    cursos: ["Fundamentos de Programación", "Programación orientada a Objetos", "React", "Node.js"],

    // --- Métodos ---
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    },
    mostrarEdad: function() {
        console.log("Tengo " + this.edad + " años");
    },
    decirNombre: function() {
        console.log("Soy " + this.nombre);
    },
}

// --- Acceso a propiedades ---
// Usamos el operador '.' para acceder a las propiedades.
console.log("Nombre: ", persona.nombre);
console.log("Edad: ", persona.edad);
console.log("Curso: ", persona.cursos[0]);
// Usamos el operador [] para acceder a las propiedades.
console.log("Sexo: ", persona["sexo"]);

// --- Ejecución de métodos ---
persona.saludar();
persona.mostrarEdad();

// --- Modificación de propiedades ---
persona.nombre = "Fabio";
persona.decirNombre();
