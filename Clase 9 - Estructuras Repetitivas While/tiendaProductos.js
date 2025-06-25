const prompt = require('prompt-sync')()

let condicion,cantidad,precio,total = 0
do {
    do {// Pedimos el precio del producto y validamos que sea positivo
        precio = prompt('Dime el precio del producto: $')
        cantidad = prompt('Dime la cantidad que quieres comprar: ')
    } while (precio <= 0 || cantidad <= 0)
    total += precio * cantidad
    console.log('Suma parcial: $' + total)
    condicion = prompt('Desea continuar cargando productos? (S/N): ')
} while (condicion.toLowerCase() === 's')
    
console.log('Total a pagar: $' + total)
