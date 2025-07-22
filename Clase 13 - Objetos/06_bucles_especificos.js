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
        cursos: ["Fundamentos de Programación", "Programación orientada a Objetos", "React", "Node.js"],
    },
    {
        id: 2,
        nombre: "Fabio",
        roles: ["Usuario"],
        activo: true,
    },
    {
        id: 3,
        nombre: "Maria",
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

// --- Bucles for of ---
console.log('--- Bucles for of ---')
for (const usuario of usuarios) {
    console.log(`ID: ${usuario.id} - Nombre: ${usuario.nombre} - Roles: ${usuario.roles}`)
    if (usuario.activo) {
        console.log("Usuario activo")
    } else {
        console.log("Usuario inactivo")
    }
}

// --- Bucles for in ---
console.log('--- Bucles for in ---')
for (const indice in usuarios) {
    console.log(`El indice actual es ${indice} (tipo: ${typeof indice})`)
    const usuario = usuarios[indice]
    console.log(`ID: ${usuario.id} - Nombre: ${usuario.nombre} - Roles: ${usuario.roles}`)
}

// Combinación de bucles for of y for in
for (const usuario of usuarios) {
    for (const propiedad in usuario) {
       const valor = usuario[propiedad]
       console.log(`Propiedad: ${propiedad} - Valor: ${valor}`)
    }
}