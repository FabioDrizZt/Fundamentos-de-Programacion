# 📚 Github y Github Pages

## 🚀 ¿Qué es GitHub?

GitHub es una **plataforma colaborativa** que nos permite llevar un control de versión sobre nuestro código. Es un lugar en la nube donde podemos almacenar, rastrear y gestionar el código fuente de nuestros proyectos, facilitando el trabajo en equipo y la colaboración.

---

### 🗝️ Palabras clave

- **GitHub:** Plataforma en la nube para alojar y gestionar proyectos de código.
- **Repositorio:** Lugar donde se almacenan los archivos del proyecto y se hace seguimiento de los mismos.
- **Repositorios remotos:** Viven en la nube (GitHub).
- **Repositorios locales:** Viven en nuestra computadora.

---

## 🖇️ Conectar GitHub con VS Code

### 🔗 Conectando nuestro repositorio local a GitHub

Para conectar tu trabajo local con GitHub necesitas:

1. Una cuenta en GitHub.
2. Un repositorio local inicializado con `git init`.
3. Configurar tu usuario:
   ```bash
   git config user.name "tu_usuario"
   git config user.email "tu_correo@email.com"
   ```

Si tienes dudas, revisa el video de la clase de git "Creando nuestro primer repositorio local".

---

## ⬆️ Subiendo archivos

Cuando termines tus cambios y quieras compartirlos, sigue estos pasos:

1. Añade los archivos: `git add .`
2. Haz un commit: `git commit -m "Mensaje descriptivo"`
3. Sube los cambios: `git push origin <rama>`

---

## ⬇️ Bajando archivos

Para descargar los cambios del repositorio remoto:

```bash
git pull origin <rama>
```

---

## ⚔️ Resolviendo Conflictos

Los conflictos son normales en el trabajo en equipo. Si dos personas modifican el mismo archivo y hacen push, Git te pedirá resolver el conflicto manualmente. ¡No entres en pánico! Edita los archivos afectados, resuelve los conflictos, añade los archivos y haz commit.

---

## 📝 Ejercicio - Resolución de conflictos

Prueba a crear un conflicto modificando el mismo archivo en dos ramas diferentes y resolviéndolo siguiendo los pasos anteriores.

---

## 📈 Ciclo de vida cuando todos trabajamos sobre la rama principal

Trabajar todos sobre la rama principal puede ser riesgoso. Por eso, es recomendable usar **ramas** para nuevas funcionalidades o correcciones.

---

# 🌐 Github Pages

¿Quieres publicar tu sitio web HTML gratis? ¡GitHub Pages es la solución!

### Pasos para publicar tu sitio web en GitHub Pages:

1. Ve a tu repositorio en GitHub.
2. Haz clic en **Configuración**.
3. Busca la sección **Pages** en la barra lateral.
4. Selecciona la rama (main/master) y guarda.
5. ¡Listo! Tu sitio estará publicado en minutos.

> **Nota:** El repositorio debe ser público para usar GitHub Pages gratis.

---

## 🏷️ Ramas de Git

### 🌿 ¿Qué es una branch?

Una **rama** o *branch* permite trabajar en versions separadas del proyecto. Así puedes desarrollar nuevas funcionalidades o corregir errores sin afectar la rama principal.

#### Ventajas de usar ramas:
- Trabajo paralelo.
- Evita subir código inestable a la rama principal.
- Facilita la colaboración.

### 🔧 Comandos útiles:

- Listar ramas:
  ```bash
  git branch
  ```
- Crear una rama:
  ```bash
  git branch <nombre_rama>
  ```
- Cambiar de rama:
  ```bash
  git checkout <nombre_rama>
  ```
- Eliminar una rama:
  ```bash
  git branch -d <nombre_rama>
  ```
- Forzar eliminación:
  ```bash
  git branch -D <nombre_rama>
  ```

> **Tip:** Antes de cambiar de rama, asegúrate de no tener cambios sin guardar.

---

## 💾 Guardar y subir cambios a una rama

1. Añade los archivos: `git add .`
2. Haz commit: `git commit -m "Mensaje"`
3. Sube la rama: `git push origin <nombre_rama>`

Para traer cambios de una rama remota:
```bash
git pull origin <nombre_rama>
```

---

## 🔀 Mezclar dos ramas (Merge)

1. Cambia a la rama de destino:
   ```bash
   git checkout <rama_destino>
   ```
2. Fusiona la otra rama:
   ```bash
   git merge <rama_a_fusionar>
   ```
3. Si hay conflictos, resuélvelos, añade los archivos y haz commit.

---

## 🔄 Pull Requests

Un **Pull Request (PR)** es una solicitud para fusionar cambios de una rama a otra en GitHub. Permite revisión y colaboración antes de integrar los cambios.

---

## 🔁 Github Flow

El **GitHub Flow** es un flujo de trabajo sencillo y efectivo:

1. Crea una rama para tu trabajo:
   ```bash
   git checkout -b nombre-rama
   ```
2. Realiza tus cambios y haz commits.
3. Sube tu rama:
   ```bash
   git push origin nombre-rama
   ```
4. Abre un Pull Request en GitHub.
5. Revisa y ajusta según comentarios.
6. Haz merge del PR.
7. Elimina la rama si ya no la necesitas.

> Mantén tus ramas pequeñas y enfocadas en un solo cambio para facilitar la revisión.

- [Documentación oficial](https://docs.github.com/es/get-started/using-github/github-flow)
- [Guía de implementación](https://www.atlassian.com/es/git/tutorials/comparing-workflows/gitflow-workflow)

---

# 📝 Readme.md

El archivo **README.md** es la carta de presentación de tu proyecto. Utiliza [Markdown](https://guides.github.com/features/mastering-markdown/) para dar formato al texto.

### ¿Qué debe contener?
- Descripción general del proyecto.
- Instrucciones de instalación y uso.
- Lista de dependencias.
- Guía de contribución.
- Preguntas frecuentes (FAQ).
- Información de contacto.

> **Importancia:** Un buen README mejora la accesibilidad, la colaboración y tu marca personal como desarrollador.

- [Generador de perfil de GitHub](https://rahuldkjain.github.io/gh-profile-readme-generator/)

---

# 🚫 El archivo .gitignore

El archivo **.gitignore** indica a Git qué archivos o carpetas no deben ser rastreados ni subidos al repositorio. Es útil para:
- Evitar subir archivos innecesarios o sensibles.
- Mantener el repositorio limpio.

Ejemplo de uso:
```
node_modules/
.env
*.log
```

---

# 🎯 Actividad Integradora

Pon en práctica lo aprendido creando un repositorio, trabajando con ramas, resolviendo un conflicto y publicando un sitio con GitHub Pages. ¡Comparte tu resultado!

---

> **Recuerda:** La práctica constante y la colaboración son claves para dominar Git y GitHub. ¡Sigue experimentando y aprendiendo! 💡
