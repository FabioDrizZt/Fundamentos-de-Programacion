const avengers = [
  { grupo: 'vengadores', nombre: 'Captain America', alias: 'Steve Rogers' },
    { grupo: 'vengadores', nombre: 'Iron Man', alias: 'Tony Stark' },
  { grupo: 'vengadores', nombre: 'Doctor Doom', alias: 'Tony Stark' },
  { grupo: 'vengadores', nombre: 'Thor', alias: 'Thor Odinson' },
  { grupo: 'vengadores', nombre: 'Hulk', alias: 'Bruce Banner' },
  { grupo: 'vengadores', nombre: 'Spider-Man', alias: 'Peter Parker' }
]

const estaTonyStark = avengers.some(vengador => vengador.alias === 'Tony Stark')
// console.log(estaTonyStark ? 'Tony Stark esta en el grupo vengadores' : 'Tony Stark NO esta en el grupo vengadores')
console.log(`Tony Stark ${estaTonyStark ? '' : 'NO'} esta en el grupo vengadores`)