const edad = 15
const tieneLicencia = false

if (edad >= 18) {
  console.log('Es mayor de edad')
  if (tieneLicencia) {
    console.log('Tiene licencia, puede conducir')
  } else {
    console.log('No tiene licencia, no puede conducir')
  }
} else {
  console.log('No es mayor de edad, no puede conducir')
}
