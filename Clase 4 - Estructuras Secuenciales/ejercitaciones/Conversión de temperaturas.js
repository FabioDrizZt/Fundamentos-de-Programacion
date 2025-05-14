const temperaturaCelsius = prompt('Ingrese la temperatura en grados Celsius: ')
const temperaturaFahrenheit = (temperaturaCelsius * 9) / 5 + 32
alert(`La temperatura en Fahrenheit es ${temperaturaFahrenheit.toFixed(2)}`)