# 🏪 Sistema de Gestión de Tienda

## 📋 Descripción

Sistema de gestión de tienda desarrollado en JavaScript puro (Node.js) como Trabajo Integrador Final del curso de Fundamentos de Programación. Este sistema permite gestionar productos, clientes, procesar ventas y generar reportes estadísticos.

## 🎯 Características

- ✅ **Gestión de Productos**: CRUD completo (Crear, Leer, Actualizar, Eliminar)
- ✅ **Gestión de Clientes**: Registro y administración de clientes regulares y premium
- ✅ **Sistema de Ventas**: Procesamiento de ventas con descuentos automáticos
- ✅ **Control de Stock**: Alertas de stock bajo y actualización automática
- ✅ **Reportes**: Estadísticas de ventas y análisis de datos
- ✅ **Interfaz CLI**: Menús interactivos por consola

## 📦 Instalación

### Prerrequisitos
- **Node.js** versión 14.0.0 o superior
- **npm** (incluido con Node.js)

### Pasos de instalación

<details>
<summary>🔧 Instalación paso a paso</summary>

1. **Clonar o descargar el proyecto**
   ```bash
   # Si tienes git instalado
   git clone [URL_DEL_REPOSITORIO]
   cd sistema-gestion-tienda
   
   # O descargar y extraer el ZIP
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Verificar instalación**
   ```bash
   node --version
   npm --version
   ```

</details>

## 🚀 Uso del Sistema

### Iniciar el sistema
```bash
npm start
# o
node sistema-tienda.js
```

### Navegación del Sistema

<details>
<summary>📱 Menú Principal</summary>

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
```

</details>

<details>
<summary>📦 Gestión de Productos</summary>

- **Listar productos**: Ver todos los productos registrados
- **Buscar producto**: Buscar por ID, nombre o categoría
- **Agregar producto**: Registrar nuevos productos
- **Modificar producto**: Actualizar información de productos
- **Eliminar producto**: Remover productos del sistema
- **Stock bajo**: Ver productos con stock mínimo

</details>

<details>
<summary>👥 Gestión de Clientes</summary>

- **Listar clientes**: Ver todos los clientes registrados
- **Buscar cliente**: Buscar por ID o nombre
- **Agregar cliente**: Registrar nuevos clientes
- **Modificar cliente**: Actualizar información de clientes
- **Tipos de cliente**: Regular y Premium (10% descuento)

</details>

<details>
<summary>💰 Sistema de Ventas</summary>

- **Seleccionar cliente**: Elegir cliente para la venta
- **Agregar productos**: Seleccionar productos y cantidades
- **Aplicar descuentos**: Automático según tipo de cliente
- **Generar ticket**: Comprobante detallado de la venta
- **Actualizar stock**: Reducción automática de inventario

</details>

## 📁 Estructura del Proyecto

```
sistema-gestion-tienda/
├── 📄 sistema-tienda.js    # Archivo principal del sistema
├── 📄 clases.js           # Definición de clases (Producto, Cliente, Venta)
├── 📄 funciones.js        # Funciones auxiliares y utilidades
├── 📄 datos.js            # Datos de prueba y configuración
├── 📄 package.json        # Dependencias y scripts
└── 📄 README.md          # Documentación del proyecto
```

## 🛠️ Tecnologías Utilizadas

- **JavaScript ES6+**: Lenguaje principal
- **Node.js**: Entorno de ejecución
- **prompt-sync**: Entrada de datos por consola
- **Programación Orientada a Objetos**: Clases y métodos
- **Métodos Avanzados de Arrays**: map, filter, reduce, find, etc.

## 🧪 Datos de Prueba

El sistema incluye datos de prueba precargados:

<details>
<summary>📦 Productos de Ejemplo</summary>

- Laptop HP Pavilion ($800.000)
- Mouse Logitech MX Master ($25.000)
- Teclado Gaming Razer ($45.000)
- Monitor Samsung 24'' ($180.000)
- Audífonos Sony ($35.000)
- Y más productos...

</details>

<details>
<summary>👥 Clientes de Ejemplo</summary>

- Juan Pérez (Regular)
- María García (Premium)
- Carlos López (Regular)
- Ana Martínez (Premium)
- Y más clientes...

</details>

## 🎮 Funcionalidades Implementadas

### ✅ Conceptos de Programación Aplicados

<details>
<summary>📚 Variables y Tipos de Datos</summary>

- Variables `let`, `const`
- Tipos: string, number, boolean, object, array
- Validación de tipos de datos
- Conversión de datos (parseInt, parseFloat)

</details>

<details>
<summary>🔀 Estructuras de Control</summary>

- Condicionales: `if`, `else if`, `else`
- Operador ternario
- Switch statements para menús
- Operadores lógicos: `&&`, `||`, `!`

</details>

<details>
<summary>🔄 Estructuras Repetitivas</summary>

- Bucles `while` y `do-while`
- Bucles `for` clásicos
- `for...of` para arrays
- `for...in` para objetos

</details>

<details>
<summary>🧩 Funciones</summary>

- Declaración de funciones
- Parámetros y argumentos
- Valores por defecto
- Funciones flecha
- Scope y alcance de variables
- Return de valores

</details>

<details>
<summary>📊 Arrays y Métodos</summary>

- Creación y manipulación de arrays
- Métodos básicos: push, pop, shift, unshift
- Métodos avanzados: map, filter, reduce, find, some
- Búsqueda: indexOf, includes
- Ordenamiento: sort

</details>

<details>
<summary>🏗️ Programación Orientada a Objetos</summary>

- Clases ES6
- Constructor y métodos
- Propiedades y encapsulación
- Instanciación de objetos
- this y contexto

</details>

## 🔧 Desarrollo y Personalización

### Agregar Nuevas Funcionalidades

<details>
<summary>➕ Extensiones Sugeridas</summary>

1. **Sistema de Categorías Dinámicas**
   - Crear/editar/eliminar categorías
   - Filtros avanzados por categoría

2. **Historial de Precios**
   - Registro de cambios de precios
   - Análisis de tendencias

3. **Sistema de Puntos**
   - Acumular puntos por compra
   - Canjear puntos por descuentos

4. **Backup de Datos**
   - Exportar datos a JSON
   - Importar datos desde archivo

</details>

### Personalizar Configuración

<details>
<summary>⚙️ Archivo de Configuración</summary>

Editar `datos.js` para personalizar:

```javascript
const configuracion = {
    stockMinimo: 5,           // Stock mínimo para alertas
    descuentoPremium: 10,     // % descuento clientes premium
    impuesto: 0,              // % impuesto (0 = sin impuesto)
    moneda: "$",              // Símbolo de moneda
    formatoFecha: "DD/MM/AAAA HH:MM"
};
```

</details>

## 🐛 Troubleshooting

### Problemas Comunes

<details>
<summary>❌ Error: Cannot find module 'prompt-sync'</summary>

**Solución:**
```bash
npm install prompt-sync
```

</details>

<details>
<summary>❌ El sistema no inicia</summary>

**Verificar:**
1. Node.js instalado correctamente
2. Dependencias instaladas: `npm install`
3. Permisos de ejecución en el directorio

</details>

<details>
<summary>❌ Funciones muestran "🚧 Función en desarrollo..."</summary>

**Explicación:**
Las funciones marcadas con este mensaje requieren implementación. Es parte del ejercicio completar estas funciones siguiendo los comentarios TODO.

</details>

## 📝 Notas para Estudiantes

### 🎯 Objetivos de Aprendizaje

Este proyecto integra todos los conceptos del curso:

1. **Estructuras de Datos**: Arrays y objetos para almacenar información
2. **Funciones**: Modularización y reutilización de código
3. **Clases**: Programación orientada a objetos
4. **Validaciones**: Entrada de datos robusta
5. **Algoritmos**: Búsqueda, filtrado y cálculos estadísticos

### 💡 Tips para el Desarrollo

<details>
<summary>🚀 Consejos de Implementación</summary>

1. **Comenzar Simple**: Implementa una función a la vez
2. **Probar Constantemente**: Usa `console.log()` para depurar
3. **Seguir TODOs**: Cada función tiene comentarios de guía
4. **Validar Entradas**: Siempre validar datos del usuario
5. **Mantener Código Limpio**: Usa nombres descriptivos y comentarios

</details>

### 📋 Lista de Verificación

- [ ] Clases implementadas correctamente
- [ ] Funciones de validación funcionando
- [ ] CRUD de productos completo
- [ ] CRUD de clientes completo
- [ ] Sistema de ventas operativo
- [ ] Reportes y estadísticas
- [ ] Manejo de errores
- [ ] Código comentado y limpio

## 📞 Soporte

Para consultas sobre el proyecto:
- 📧 Email del profesor: ing.fabio.arg@gmail.com
- 💬 Mediante el grupo de whatsapp
- 📚 Revisar material del curso

## 📄 Licencia

Este proyecto es parte del trabajo académico del curso de Fundamentos de Programación.

---

**¡Éxito con tu desarrollo! 🚀** 