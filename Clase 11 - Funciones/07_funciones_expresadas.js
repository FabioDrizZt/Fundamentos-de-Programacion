const saludo = function () {
  console.log('Hola mundo')
}

const sumar = function (n1 = 0, n2 = 0, n3 = 0) {
  return n1 + n2 + n3
}

const multiplicar = function (n1 = 1, n2 = 1, n3 = 1) {
  return n1 * n2 * n3
}

saludo()

console.log(multiplicar(2, 3))
console.log(multiplicar(2, 3, 4))

console.log(sumar(2, 3))
console.log(sumar(2, 3, 4))

/* function saludo() {
  console.log("Hola mundo");
};

function sumar(n1 = 0, n2 = 0, n3 = 0) {
  return n1 + n2 + n3;
};

function multiplicar(n1 = 1, n2 = 1, n3 = 1) {
  return n1 * n2 * n3;
}; */
