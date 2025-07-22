// Creamos un array de usuarios usando [].
// Dentro definimos 'propiedades' (nombre, roles, email).
// Cada objeto suelen tener la misma estructura.

const usuarios = [
    {
        id: 1,
        nombre: "Eduardo",
        roles: ["Administrador", "Usuario"],
        email: "eduardo@gmail.com",
        activo: true,
    },
    {
        id: 2,
        nombre: "Fabio",
        roles: ["Usuario"],
        email: "fabio@gmail.com",
        activo: true,
    },
    {
        id: 3,
        nombre: "Maria",
        roles: ["Usuario"],
        email: "maria@gmail.com",
        activo: false,
    },
]

console.log(usuarios)

// Acceso a objetos individuales
const primerUsuario = usuarios[0]
console.log('Usuario 1: ', primerUsuario)
console.log('Nombre del usuario 1: ', primerUsuario.nombre)
console.log('Rol del usuario 1: ', primerUsuario.roles[0])
const segundoUsuario = usuarios[1]
console.log('Usuario 2: ', segundoUsuario)
console.log('Nombre del usuario 2: ', segundoUsuario.nombre)
console.log('Rol del usuario 2: ', segundoUsuario.roles[0])

