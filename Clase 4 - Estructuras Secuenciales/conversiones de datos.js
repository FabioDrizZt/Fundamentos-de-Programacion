let fechaNacimiento = "1988.33"

let edad = 1000 + parseInt(fechaNacimiento)
console.log(edad);
edad = 1000 + parseFloat(fechaNacimiento)
console.log(edad);
edad = 1000 + Number(fechaNacimiento)
console.log({ edad });