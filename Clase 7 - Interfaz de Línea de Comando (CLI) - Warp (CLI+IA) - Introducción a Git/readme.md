# 💻 Interfaz de Línea de Comando (CLI) - Warp (CLI+IA) - Introducción a Git

---

## 🖥️ ¿Qué es la Terminal?
La **terminal** es una interfaz que nos permite comunicarnos con la computadora a través de comandos escritos. Antiguamente era un dispositivo físico, pero hoy es un programa que ejecuta un **shell** (intérprete de comandos).

- **Terminal:** El contenedor donde escribimos comandos.
- **Shell:** El programa que interpreta y ejecuta esos comandos.
- **Consola:** Un tipo especial de terminal, donde interactuamos mediante líneas de comandos.

> 💡 **Dato:** Cada sistema operativo tiene sus propios comandos básicos. ¡Aprenderlos te hará más eficiente y profesional!

---

## 🖱️ CLI vs GUI
- **CLI (Command Line Interface):** Interfaz de línea de comandos. Más poderosa, flexible y rápida para tareas repetitivas o avanzadas.
- **GUI (Graphical User Interface):** Interfaz gráfica. Más intuitiva para principiantes, pero menos eficiente para automatización.

> 🎥 **Video sugerido:** Comandos básicos de la terminal

---

## 🧑‍💻 Comandos básicos de la terminal Bash
- `ls`: Lista archivos y carpetas
- `cd`: Cambia de directorio
- `pwd`: Muestra la ruta actual
- `mkdir`: Crea una carpeta
- `touch`: Crea un archivo vacío
- `rm`: Elimina archivos
- `cp`: Copia archivos o carpetas
- `mv`: Mueve o renombra archivos

> 🔎 **Material extra:** Búsqueda en la terminal

---

## 🚀 Warp: La Terminal del Futuro (CLI + IA)

### ¿Qué es Warp?
Warp es una terminal moderna y colaborativa que integra inteligencia artificial (IA) para ayudarte a ser más productivo y resolver problemas rápidamente.

- **Rápida, visual y colaborativa**
- **IA integrada**: Resuelve dudas y genera comandos sin salir de la terminal
- **Ideal para principiantes y expertos**

### Warp AI (OpenAI)
- Escribe `> + tu pregunta` en lenguaje natural (ej: `> cómo listar solo archivos .txt en Linux`)
- Warp AI responde con explicaciones y comandos listos para usar
- Límite: 100 solicitudes/día (más que suficiente para aprender)

### Búsqueda de Comandos con IA (sin límites)
- Escribe `# + palabra clave` (ej: `# git undo commit`)
- Warp sugiere comandos relevantes y sus descripciones
- Presiona Enter para copiar o Ctrl + O para ejecutar

> 🧠 **Ventajas:**
> - Ahorra tiempo y evita distracciones
> - Explicaciones claras y comandos listos
> - Perfecto para aprender y resolver errores

> ⚠️ **Recomendaciones:**
> - Prioriza la búsqueda con `#` para consultas simples
> - Verifica siempre los comandos antes de ejecutarlos
> - Usa `>` para resolver dudas complejas

---

## 🗂️ Git: Sistema de Control de Versiones
Git es una herramienta fundamental para cualquier desarrollador. Permite:
- Compartir proyectos y trabajar en equipo
- Llevar el historial de cambios
- Guardar versiones y restaurar estados anteriores
- Trabajar de forma colaborativa y profesional

> 🎥 **Video sugerido:** Introducción a Git

---

## 🏗️ ¿Cómo se trabaja en equipo con Git?
- No se envía código por mail ni WhatsApp
- No se usa Google Drive para código
- Se usa **Git** para colaborar, comunicar cambios y manejar versiones

---

## 🛠️ Comenzando con Git: Primeros pasos

### Palabras clave
- **Repositorio local:** Carpeta en tu computadora donde Git guarda el historial de archivos
- **Commit:** Paquete de cambios con autor y fecha (historial del proyecto)

### Flujo de trabajo típico
1. Crear/modificar archivos → Untracked/Modified
2. `git add` → Staged
3. `git commit` → Unmodified
4. Repetir según sea necesario

---

## 🔄 Ciclo de vida de un archivo en Git

### Estados principales
1. **Untracked (Sin seguimiento):** Archivos nuevos que Git no conoce
   - Acción: `git add` para empezar a rastrearlo
2. **Tracked (En seguimiento):** Archivos que Git sigue
   - Subestados: Unmodified, Modified, Staged
3. **Modified (Modificado):** Cambios detectados
   - Acción: `git add` para preparar para commit
   - Acción: `git checkout -- <archivo>` para descartar cambios
4. **Staged:** Listo para el próximo commit
   - Acción: `git commit` para confirmar
   - Acción: `git reset HEAD <archivo>` para quitar del área de staging

### Comandos clave
- `git add <archivo>`: Agrega archivos nuevos o cambios al área de staging
- `git commit -m "mensaje"`: Confirma los cambios en el historial
- `git rm <archivo>`: Elimina archivos del seguimiento y del directorio

---

## ⏪ Volver a una versión anterior
1. **Identifica el commit:** Usa `git log` para ver el historial y copia el hash del commit deseado
2. **Vuelve al commit:**
   ```bash
   git checkout <hash>
   ```
3. **Crea una nueva rama (opcional):**
   ```bash
   git checkout -b nombre-nueva-rama
   ```
4. **Revisa el estado:** Usa `git status` para confirmar
5. **Vuelve a la última versión (opcional):**
   ```bash
   git checkout nombre-de-tu-rama
   ```

---

## 📋 Lista de comandos de Git
- `git init`: Inicializa un repositorio
- `git status`: Muestra el estado de los archivos
- `git add`: Agrega archivos al área de staging
- `git commit`: Confirma los cambios
- `git log`: Muestra el historial de commits
- `git diff`: Muestra diferencias entre archivos
- `git checkout`: Cambia de rama o commit
- `git branch`: Lista o crea ramas
- `git merge`: Fusiona ramas
- `git rm`: Elimina archivos

---

## 📚 Recursos Bibliográficos
- [Pro Git Book (en español)](https://git-scm.com/book/es/v2)
- [Documentación oficial de Git](https://git-scm.com/doc)
- [Guía de comandos de Git](https://education.github.com/git-cheat-sheet-education.pdf)

---

## 📝 Actividad entregable con la terminal y Git
1. Realiza los pasos aprendidos para crear un repositorio, agregar archivos, hacer commits y practicar los comandos vistos.
2. Accede al formulario de entrega aquí: [Formulario de entrega](https://forms.gle/AC2UyUmLWq1uhWn99)

> 💬 **¿Listo para dominar la terminal y Git? Practica, experimenta y pregunta siempre que lo necesites. ¡El control de versiones es tu mejor aliado como programador!**


