// El objeto 'window' representa la ventana del navegador
console.log('Objecto window:', window)

// Podemos acceder a los atributos de la ventana del navegador
// como el tamaño de la ventana, el ancho y alto de la ventana, etc.
console.log('Ancho de la ventana:', window.innerWidth, 'px')
console.log('Alto de la ventana:', window.innerHeight, 'px')

// El objeto 'document' representa el documento HTML
console.log('Objecto document:', window.document)
console.log('Objecto document:', document)

// Podemos ver el titulo de la página
console.log('Titulo de la página:', document.title)

// Podemos cambiar el título de la página
document.title = 'Nuevo título de la página'
console.log('Titulo de la página:', document.title)

// Podemos acceder a los elementos del documento HTML el Body y el Head
console.log('Objeto body:', document.body)
console.log('Objeto head:', document.head)