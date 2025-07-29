# 🏪 Trabajo Integrador Final - Sistema de Gestión de Tienda
## Fundamentos de Programación - JavaScript

---

## 📋 Descripción General

Deberás desarrollar un **Sistema de Gestión de Tienda** completo utilizando JavaScript puro (Node.js). Este sistema permitirá gestionar productos, clientes, ventas y generar reportes. El proyecto integrará todos los conceptos vistos durante el curso.

> 📁 **Los archivos base del proyecto ya están creados en la carpeta `Trabajo integrador/` con la estructura inicial y comentarios TODO para guiar tu implementación.**

---

## 🎯 Objetivos del Proyecto

- Aplicar estructuras de datos (arrays y objetos)
- Implementar funciones para modularizar el código
- Utilizar estructuras condicionales y repetitivas
- Aplicar métodos avanzados de arrays
- Implementar clases y programación orientada a objetos
- Gestionar la entrada y validación de datos
- Realizar cálculos matemáticos y estadísticos

---

## 🛠️ Funcionalidades Requeridas

### **1. Gestión de Productos**
- Crear, listar, buscar, modificar y eliminar productos
- Cada producto debe tener: ID, nombre, precio, stock, categoría
- Validar que no se puedan crear productos duplicados
- Controlar stock mínimo (alertas cuando stock < 5)

### **2. Gestión de Clientes**
- Registrar nuevos clientes
- Cada cliente debe tener: ID, nombre, email, teléfono, tipo (regular/premium)
- Validar formato de email
- Listar clientes por tipo

### **3. Sistema de Ventas**
- Procesar ventas con múltiples productos
- Aplicar descuentos según tipo de cliente (premium 10% descuento)
- Actualizar stock automáticamente
- Generar ticket de venta
- Validar disponibilidad de stock antes de vender

### **4. Reportes y Estadísticas**
- Reporte de ventas del día
- Productos más vendidos
- Cliente que más compró
- Total de ingresos
- Productos con stock bajo
- Promedio de venta por cliente

### **5. Sistema de Menús**
- Menú principal con todas las opciones
- Submenús para cada funcionalidad
- Navegación intuitiva
- Opción de salir del sistema

---

## 📝 Estructura de Datos Requerida

### **Clase Producto**

<details>
<summary>📦 Ver estructura de la clase Producto</summary>

```javascript
class Producto {
    constructor(id, nombre, precio, stock, categoria) {
        // TODO: Implementar constructor
        // Asignar propiedades: id, nombre, precio, stock, categoria
        // Validar que los parámetros sean válidos
    }
    
    // Métodos requeridos:
    aplicarDescuento(porcentaje) {
        // TODO: Implementar aplicación de descuento
        // Validar que el porcentaje esté entre 0 y 100
        // Calcular y devolver el precio con descuento
    }
    
    verificarStock(cantidad) {
        // TODO: Implementar verificación de stock
        // Devolver true si hay stock suficiente, false si no
    }
    
    reducirStock(cantidad) {
        // TODO: Implementar reducción de stock
        // Validar que hay stock suficiente antes de reducir
        // Actualizar la propiedad stock
    }
    
    mostrarInfo() {
        // TODO: Implementar mostrar información
        // Devolver string con toda la información del producto formateada
    }
}
```

</details>

### **Clase Cliente**

<details>
<summary>👥 Ver estructura de la clase Cliente</summary>

```javascript
class Cliente {
    constructor(id, nombre, email, telefono, tipo = 'regular') {
        // TODO: Implementar constructor
        // Asignar propiedades: id, nombre, email, telefono, tipo
        // Validar email usando el método validarEmail()
    }
    
    // Métodos requeridos:
    obtenerDescuento() {
        // TODO: Implementar obtención de descuento
        // Cliente regular: 0% descuento
        // Cliente premium: 10% descuento
        // Devolver el porcentaje de descuento
    }
    
    validarEmail() {
        // TODO: Implementar validación de email
        // Usar expresión regular para validar formato
        // Ejemplo: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        // Devolver true/false
    }
    
    mostrarInfo() {
        // TODO: Implementar mostrar información
        // Devolver string con toda la información del cliente formateada
    }
}
```

</details>

### **Clase Venta**

<details>
<summary>💰 Ver estructura de la clase Venta</summary>

```javascript
class Venta {
    constructor(cliente, productos, fecha = new Date()) {
        // TODO: Implementar constructor
        // productos debe ser un array de objetos: [{producto: Producto, cantidad: number}]
        // Asignar propiedades: cliente, productos, fecha
        // Generar ID único para la venta
    }
    
    // Métodos requeridos:
    calcularSubtotal() {
        // TODO: Implementar cálculo de subtotal
        // Iterar sobre productos y sumar precio * cantidad
        // Devolver el subtotal
    }
    
    aplicarDescuentos() {
        // TODO: Implementar aplicación de descuentos
        // Obtener descuento del cliente
        // Aplicar descuento al subtotal
        // Devolver el monto del descuento aplicado
    }
    
    calcularTotal() {
        // TODO: Implementar cálculo de total
        // Calcular subtotal y aplicar descuentos
        // Devolver el total final
    }
    
    generarTicket() {
        // TODO: Implementar generación de ticket
        // Crear string formateado con:
        // - Información del cliente
        // - Lista de productos comprados
        // - Subtotal, descuento, total
        // - Fecha y hora de la venta
        // Devolver el ticket formateado
    }
}
```

</details>

---

## 🔧 Funciones Globales Requeridas

### **Funciones de Validación**

<details>
<summary>✅ Ver funciones de validación</summary>

```javascript
// Validar que un string no esté vacío y tenga mínimo 2 caracteres
function validarTexto(texto, minimo = 2) {
    // TODO: Implementar validación de texto
    // Verificar que no sea null, undefined o vacío
    // Verificar que tenga al menos 'minimo' caracteres
    // Devolver true/false
}

// Validar que un número sea positivo
function validarNumeroPositivo(numero) {
    // TODO: Implementar validación de número positivo
    // Verificar que sea un número válido
    // Verificar que sea mayor a 0
    // Devolver true/false
}

// Validar formato de email
function validarEmail(email) {
    // TODO: Implementar validación de email
    // Usar expresión regular para validar formato
    // Ejemplo: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // Devolver true/false
}

// Validar que el stock sea suficiente
function validarStock(producto, cantidad) {
    // TODO: Implementar validación de stock
    // Verificar que la cantidad sea válida (positiva)
    // Verificar que el producto tenga stock suficiente
    // Devolver true/false
}
```

</details>

### **Funciones de Búsqueda**

<details>
<summary>🔍 Ver funciones de búsqueda</summary>

```javascript
// Buscar producto por ID
function buscarProductoPorId(productos, id) {
    // TODO: Implementar búsqueda por ID
    // Usar método find() del array
    // Devolver el producto encontrado o null
}

// Buscar productos por categoría
function buscarProductosPorCategoria(productos, categoria) {
    // TODO: Implementar búsqueda por categoría
    // Usar método filter() del array
    // Comparación insensible a mayúsculas/minúsculas
    // Devolver array de productos filtrados
}

// Buscar cliente por ID
function buscarClientePorId(clientes, id) {
    // TODO: Implementar búsqueda de cliente por ID
    // Usar método find() del array
    // Devolver el cliente encontrado o null
}

// Filtrar productos con stock bajo
function obtenerProductosStockBajo(productos, minimo = 5) {
    // TODO: Implementar filtro de stock bajo
    // Usar método filter() del array
    // Devolver productos con stock menor al mínimo
}
```

</details>

### **Funciones de Cálculo**

<details>
<summary>📊 Ver funciones de cálculo y estadísticas</summary>

```javascript
// Calcular total de ventas del día
function calcularVentasDelDia(ventas) {
    // TODO: Implementar cálculo de ventas del día
    // Filtrar ventas por fecha
    // Usar reduce() para sumar totales
    // Devolver el total
}

// Encontrar producto más vendido
function obtenerProductoMasVendido(ventas) {
    // TODO: Implementar búsqueda de producto más vendido
    // Crear objeto para contar ventas por producto
    // Iterar sobre todas las ventas y productos
    // Encontrar el producto con mayor cantidad vendida
    // Devolver {producto: Object, cantidad: number}
}

// Calcular promedio de compra por cliente
function calcularPromedioCompraCliente(ventas) {
    // TODO: Implementar cálculo de promedio
    // Sumar todos los totales de ventas
    // Contar clientes únicos
    // Calcular promedio
    // Devolver el promedio
}

// Generar estadísticas generales
function generarEstadisticas(productos, clientes, ventas) {
    // TODO: Implementar generación de estadísticas
    // Calcular múltiples estadísticas:
    // - Total productos, clientes, ventas
    // - Producto más vendido
    // - Cliente que más compró
    // - Promedio de venta
    // - Productos con stock bajo
    // Devolver objeto con todas las estadísticas
}
```

</details>

---

## 📋 Requerimientos Técnicos

### **1. Entrada de Datos**
- Utilizar `prompt-sync` para capturar datos del usuario
- Validar todas las entradas antes de procesarlas
- Mostrar mensajes de error claros y específicos
- Permitir al usuario reintentar en caso de error

### **2. Estructuras de Control**
- Implementar menús con `switch` statements
- Usar bucles `while` o `do-while` para el menú principal
- Aplicar bucles `for` para procesar arrays
- Utilizar `for...of` para iterar sobre colecciones
- Implementar estructuras condicionales complejas

### **3. Métodos de Arrays**
- `map()`: Para transformar datos (ej: aplicar descuentos)
- `filter()`: Para filtrar productos/clientes
- `reduce()`: Para calcular totales y estadísticas
- `find()`: Para búsquedas específicas
- `some()`/`every()`: Para validaciones
- `sort()`: Para ordenar reportes

### **4. Manejo de Datos**
- Usar arrays para almacenar productos, clientes y ventas
- Implementar funciones para cargar datos de prueba
- Mantener integridad de datos en todas las operaciones
- Evitar modificaciones directas de arrays originales

---

## 🎮 Flujo del Programa

### **Menú Principal**

<details>
<summary>📱 Ver diseño del menú principal</summary>

```
================================
    SISTEMA DE GESTIÓN TIENDA
================================
1. Gestión de Productos
2. Gestión de Clientes  
3. Realizar Venta
4. Reportes y Estadísticas
5. Configuración
0. Salir del Sistema
================================
Seleccione una opción: 
```

</details>

### **Submenú Productos**

<details>
<summary>📦 Ver submenú de productos</summary>

```
===============================
     GESTIÓN DE PRODUCTOS
===============================
1. Listar todos los productos
2. Buscar producto
3. Agregar nuevo producto
4. Modificar producto
5. Eliminar producto
6. Productos con stock bajo
0. Volver al menú principal
===============================
```

</details>

---

## 📊 Datos de Prueba Sugeridos

### **Productos Iniciales**

<details>
<summary>📦 Ver datos de productos de prueba</summary>

```javascript
const productosIniciales = [
    { id: 1, nombre: "Laptop HP", precio: 800000, stock: 5, categoria: "Electrónicos" },
    { id: 2, nombre: "Mouse Logitech", precio: 25000, stock: 20, categoria: "Accesorios" },
    { id: 3, nombre: "Teclado Gaming", precio: 45000, stock: 3, categoria: "Gaming" },
    { id: 4, nombre: "Monitor 24''", precio: 180000, stock: 8, categoria: "Electrónicos" },
    { id: 5, nombre: "Audífonos", precio: 35000, stock: 15, categoria: "Audio" }
];
```

</details>

### **Clientes Iniciales**

<details>
<summary>👥 Ver datos de clientes de prueba</summary>

```javascript
const clientesIniciales = [
    { id: 1, nombre: "Juan Pérez", email: "juan@email.com", telefono: "123456789", tipo: "regular" },
    { id: 2, nombre: "María García", email: "maria@email.com", telefono: "987654321", tipo: "premium" },
    { id: 3, nombre: "Carlos López", email: "carlos@email.com", telefono: "456789123", tipo: "regular" }
];
```

</details>

---

## 📁 Archivos del Proyecto

> ✅ **Los siguientes archivos ya están creados en la carpeta `Trabajo integrador/` con la estructura base:**

### **📄 Archivos Principales**

<details>
<summary>📂 Ver estructura de archivos creados</summary>

```
Trabajo integrador/
├── 📄 sistema-tienda.js    # Archivo principal con menús y lógica principal
├── 📄 clases.js           # Definición de clases (Producto, Cliente, Venta)
├── 📄 funciones.js        # Funciones auxiliares y utilidades
├── 📄 datos.js            # Datos de prueba y configuración
├── 📄 package.json        # Dependencias y scripts del proyecto
└── 📄 README.md          # Documentación completa del proyecto
```

**Cada archivo contiene:**
- ✅ Estructura completa con comentarios TODO
- ✅ Documentación JSDoc de cada función
- ✅ Ejemplos y guías de implementación
- ✅ Validaciones y manejo de errores
- ✅ Datos de prueba precargados

</details>

### **🚀 Instrucciones de Inicio**

<details>
<summary>⚡ Pasos para comenzar a trabajar</summary>

1. **Navegar a la carpeta del proyecto:**
   ```bash
   cd "Trabajo integrador"
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el sistema:**
   ```bash
   npm start
   # o
   node sistema-tienda.js
   ```

4. **Comenzar implementación:**
   - Revisar los comentarios TODO en cada archivo
   - Implementar las funciones una por una
   - Probar constantemente con `console.log()`
   - Seguir la documentación en README.md

</details>

---

## ✅ Criterios de Evaluación

### **Funcionalidad (40%)**
- [ ] Sistema de menús funcional
- [ ] CRUD completo de productos y clientes
- [ ] Sistema de ventas operativo
- [ ] Reportes y estadísticas precisos
- [ ] Validaciones correctas

### **Código (30%)**
- [ ] Uso correcto de clases y objetos
- [ ] Funciones bien estructuradas y reutilizables
- [ ] Aplicación de métodos avanzados de arrays
- [ ] Manejo adecuado de estructuras de control
- [ ] Código limpio y comentado

### **Lógica de Programación (20%)**
- [ ] Algoritmos eficientes
- [ ] Manejo correcto de errores
- [ ] Validaciones exhaustivas
- [ ] Integridad de datos mantenida

### **Creatividad y Extras (10%)**
- [ ] Funcionalidades adicionales
- [ ] Interfaz de usuario mejorada
- [ ] Optimizaciones de rendimiento
- [ ] Documentación detallada

---

## 📦 Entregables

1. **Archivo principal**: `sistema-tienda.js` ✅ (Creado)
2. **Archivo de clases**: `clases.js` ✅ (Creado)
3. **Archivo de funciones**: `funciones.js` ✅ (Creado)
4. **Archivo de datos**: `datos.js` ✅ (Creado)
5. **README.md** con instrucciones de uso ✅ (Creado)
6. **package.json** con dependencias ✅ (Creado)

---

## 🚀 Instrucciones de Entrega

1. Completar la implementación en los archivos base creados
2. Probar todas las funcionalidades
3. Agregar comentarios explicativos en el código
4. Crear un repositorio en GitHub
5. Subir el proyecto completo
6. Enviar el enlace del repositorio

---

## ⏰ Fecha de Entrega

**Fecha límite:** 28 de septiembre
**Modalidad:** Individual  
**Consultas:** ing.fabio.arg@gmail.com

---

## 💡 Consejos para el Desarrollo

### **🎯 Estrategia de Implementación**

<details>
<summary>📋 Plan de desarrollo sugerido</summary>

**Fase 1: Fundamentos (Semana 1)**
1. Implementar clases básicas (constructor y métodos simples)
2. Crear funciones de validación
3. Probar carga de datos iniciales

**Fase 2: Funcionalidades Core (Semana 2)**
1. Implementar CRUD de productos
2. Implementar CRUD de clientes
3. Crear sistema de búsquedas

**Fase 3: Sistema de Ventas (Semana 3)**
1. Implementar procesamiento de ventas
2. Aplicar descuentos automáticos
3. Generar tickets de venta

**Fase 4: Reportes y Pulimiento (Semana 4)**
1. Crear reportes y estadísticas
2. Mejorar interfaz y usabilidad
3. Agregar funcionalidades extra
4. Testing completo

</details>

### **🔧 Tips Técnicos**

<details>
<summary>💻 Consejos de programación</summary>

1. **Comenzar Simple**: Implementa una función a la vez
2. **Probar Constantemente**: Usa `console.log()` para depurar
3. **Seguir TODOs**: Cada función tiene comentarios de guía
4. **Validar Entradas**: Siempre validar datos del usuario
5. **Mantener Código Limpio**: Usa nombres descriptivos y comentarios
6. **No copies código**: Desarrolla tu propia solución
7. **Pide ayuda cuando la necesites**: Es mejor consultar que quedarse trabado

</details>

---

## 🏆 Funcionalidades Extra (Opcional)

<details>
<summary>⭐ Ideas para destacar tu proyecto</summary>

- Sistema de categorías dinámicas
- Historial de precios de productos
- Sistema de puntos para clientes
- Backup y restore de datos
- Calculadora de ganancias
- Sistema de alertas automáticas
- Facturación con números consecutivos
- Reportes exportables
- Sistema de usuarios y permisos
- Interfaz de colores en consola

</details>

---

**¡Éxito con tu proyecto! 🚀**

> 📚 **Recuerda:** Este proyecto integra todos los conceptos del curso. Tómate el tiempo necesario para entender cada parte antes de implementarla. ¡El aprendizaje es más importante que la velocidad! 