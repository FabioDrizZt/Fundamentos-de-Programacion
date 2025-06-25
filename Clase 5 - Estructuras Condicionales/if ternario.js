// if ternario

const edad = 17

/* edad >= 18
  ? console.log("Eres mayor de edad")
  : console.log("Eres menor de edad") */

/* console.log(edad >= 18
  ? "Eres mayor de edad"
  : "Eres menor de edad") */

/* const mensaje = edad >= 18
  ? "Eres mayor de edad"
  : "Eres menor de edad" */

const mensaje = `Eres ${edad >= 18 ? 'mayor' : 'menor'} de edad`
console.log(mensaje)
