// if anidados
const edad = 17
const tieneLicencia = false
if (edad >= 18) {
  console.log('Eres mayor de edad')
  if (tieneLicencia) {
    console.log('Tienes licencia')
  } else {
    console.log('No tienes licencia')
  }
} else { console.log('Eres menor de edad') }
console.log('Fin del programa.')

// else if
const nota = 30
if (nota >= 80) {
  console.log('Alumno promocionado')
} else if (nota >= 60 /* && nota < 80 */) {
  console.log('Alumno aprobado')
} else if (nota >= 40 /* && nota < 60 */) {
  console.log('Alumno aprobado con reserva')
} else {
  console.log('Alumno no aprobado')
}
