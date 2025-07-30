function pausar(){
  const prompt = require('prompt-sync')({ sigint: true });
  prompt("Presione Enter para continuar...");
}

module.exports = {
  pausar
}