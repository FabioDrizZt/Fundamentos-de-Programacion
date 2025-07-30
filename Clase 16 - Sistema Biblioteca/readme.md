# 📚 Sistema de Biblioteca - Ejemplo Simplificado

## 🎯 Propósito del Proyecto

Este es un **ejemplo simplificado y completamente funcional** para estudiantes del curso de Fundamentos de Programación. Demuestra cómo aplicar los conceptos esenciales del curso en un proyecto real.

> ⚠️ **IMPORTANTE:** Este NO es la solución del proyecto de tienda. Es un ejemplo diferente que puedes usar como **referencia** para entender cómo implementar tu propio sistema.

## 📋 ¿Qué encontrarás aquí?

✅ **Sistema completamente funcional** y simplificado  
✅ **Clases implementadas** con métodos esenciales  
✅ **Funciones básicas** con validaciones simples  
✅ **Menús claros** y fáciles de navegar  
✅ **Código limpio** y bien comentado  
✅ **Conceptos clave** del curso aplicados  

## 🚀 Instalación y Uso

### 1. **Instalar dependencias**
```bash
cd "Ejemplo Resuelto - Sistema Biblioteca"
npm install
```

### 2. **Ejecutar el sistema**
```bash
npm start
```

### 3. **Navegar por el sistema**
- Usa los menús numerados
- Prueba todas las funcionalidades
- Observa cómo funciona cada concepto

## 📁 Estructura Simplificada

```
Ejemplo Resuelto - Sistema Biblioteca/
├── 📄 sistema-biblioteca.js    # Archivo principal (400 líneas)
├── 📄 clases.js               # 3 clases principales (120 líneas)
├── 📄 funciones.js            # Funciones esenciales (150 líneas)
├── 📄 datos.js                # Datos de prueba (80 líneas)
├── 📄 package.json            # Dependencias
└── 📄 README.md              # Esta documentación
```

## 🔍 Conceptos Implementados

### ✅ **Clases y Objetos**
```javascript
class Libro {
    constructor(id, titulo, autor, categoria, disponibles, total) {
        // Propiedades básicas
    }
    
    hayDisponible() { /* método simple */ }
    prestar() { /* lógica básica */ }
    devolver() { /* operación simple */ }
}
```

### ✅ **Arrays y Métodos Básicos**
```javascript
// Métodos implementados:
libros.filter(libro => libro.hayDisponible())     // filter()
usuarios.find(u => u.id === id)                   // find()
prestamos.map(p => p.infoResumida())              // map()
```

### ✅ **Funciones con Validaciones**
```javascript
function validarTexto(texto, minimo = 2) {
    return texto && texto.trim().length >= minimo;
}

function buscarLibroPorId(libros, id) {
    return libros.find(libro => libro.id === Number(id)) || null;
}
```

### ✅ **Estructuras de Control**
- **Switch** para navegación de menús
- **While** para bucles de menús
- **Do-while** para validaciones
- **If/else** para lógica condicional

## 🎮 Funcionalidades del Sistema

### 📖 **Gestión de Libros**
- ✅ Listar libros disponibles
- ✅ Buscar por título o categoría  
- ✅ Agregar nuevos libros

### 👥 **Gestión de Usuarios**
- ✅ Listar usuarios registrados
- ✅ Buscar usuarios por nombre
- ✅ Registrar nuevos usuarios

### 📋 **Gestión de Préstamos**
- ✅ Realizar préstamos con validaciones
- ✅ Devolver libros prestados
- ✅ Ver préstamos activos y vencidos

### 📊 **Reportes Básicos**
- ✅ Estadísticas generales del sistema
- ✅ Libro más prestado
- ✅ Conteo de préstamos por usuario

## 💡 Lecciones Clave

### 1. **Organización Simple**
- Un archivo por responsabilidad
- Separación clara de funciones
- Código fácil de seguir

### 2. **Validaciones Efectivas**
```javascript
do {
    email = prompt("Email: ");
} while (!funciones.validarEmail(email));
```

### 3. **Manejo de Estados**
```javascript
// Mantener consistencia
libro.prestar();                    // Reduce disponibles
usuario.agregarPrestamo(prestamo);  // Añade a activos
prestamos.push(prestamo);           // Registra globalmente
```

## 🔄 Comparación con tu Proyecto

| Sistema Biblioteca | Tu Sistema Tienda |
|-------------------|-------------------|
| **Libro** → **Producto** | Control de inventario |
| **Usuario** → **Cliente** | Tipos y límites |
| **Prestamo** → **Venta** | Transacciones |
| **Disponibilidad** → **Stock** | Cantidades |

## 🛠️ Cómo Adaptar los Conceptos

### 1. **Cambiar Entidades**
```javascript
// De biblioteca:
class Libro { }        →    class Producto { }
class Usuario { }      →    class Cliente { }
class Prestamo { }     →    class Venta { }
```

### 2. **Adaptar Métodos**
```javascript
// De biblioteca:
libro.prestar()        →    producto.reducirStock()
usuario.puedePrestar() →    cliente.obtenerDescuento()
prestamo.devolver()    →    venta.calcularTotal()
```

### 3. **Usar Misma Estructura**
- Menús similares pero adaptados
- Validaciones del mismo estilo
- Organización de archivos igual

## 🎓 Objetivos de Aprendizaje

Después de estudiar este ejemplo, podrás:

✅ **Crear clases** con métodos útiles  
✅ **Usar arrays** con métodos básicos (find, filter, map)  
✅ **Escribir funciones** de validación y búsqueda  
✅ **Implementar menús** de navegación  
✅ **Manejar datos** de forma consistente  
✅ **Estructurar** un proyecto completo  

## 🚨 Importante para Estudiantes

### ❌ **NO hagas esto:**
- Copiar código directamente para tu proyecto
- Solo cambiar nombres de variables
- Entregar este código como tuyo

### ✅ **SÍ haz esto:**
- Estudiar cómo funciona cada parte
- Entender la lógica y aplicarla
- Usar los mismos patrones en tu contexto
- Implementar tu propia versión

## 🎯 **Mensaje para Estudiantes**

Este ejemplo está aquí para **inspirarte y guiarte**, no para sustituir tu trabajo. Tu sistema de tienda debe ser **tu propia implementación** usando estos conceptos como referencia.

**¡El aprendizaje real viene de implementar tu propio código!**

---

**Desarrollado por:** Profesor Fabio Argañaraz  
**Propósito:** Material educativo simplificado  
**Curso:** Fundamentos de Programación  
**Año:** 2025 