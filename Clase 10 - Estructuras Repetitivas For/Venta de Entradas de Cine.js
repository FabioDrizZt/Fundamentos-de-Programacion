const prompt = require("prompt-sync")({ sigint: true }); // Ctrl + C para salir
let totalRecaudado = 0;
let contSocios = 0;
let contNoSocios = 0;
while (true) {
  let precioFinal = 1200;
  let dia = prompt(
    "Ingrese día de la semana (ej: Lunes, Martes, Miercoles...): "
  );
  if (dia === 'Miercoles') {
    // precioFinal = precioFinal - precioFinal * 0.2
    // precioFinal = precioFinal * (1 - 0.2)
    precioFinal -= precioFinal * 0.20
  }
  let esSocio = prompt("¿El cliente es socio? (S/N): ");
  if (esSocio === 'S') {
    precioFinal -= precioFinal * 0.15
    contSocios++
  } else {
    contNoSocios++
  }
  console.log(`El precio final de la entrada es: $${precioFinal}`);
  // totalRecaudado = totalRecaudado + precioFinal
  totalRecaudado += precioFinal
  let continuar = prompt("¿Desea ingresar otro cliente? (S/N): ");
  if (continuar === "N") {
    break;
  }
}
console.log(`● Total Recaudado: $${totalRecaudado}`);
console.log(`● Cantidad de entradas a socios: ${contSocios}`);
console.log(`● Cantidad de entradas a no socios: ${contNoSocios}`);
