# 📋 Guía Completa: Git + GitHub — Actividad Práctica ISAM

## 📁 Estructura del proyecto

```
mi-proyecto-web/
├── index.html    ← Estructura y contenido HTML
├── estilos.css   ← Diseño visual personalizado
└── app.js        ← Lógica e interactividad JavaScript
```

---

## ⚙️ PASO 1 — Configurar Git por primera vez

Solo se hace una vez en tu computadora:

```bash
git config --global user.name  "Tu Nombre Completo"
git config --global user.email "tu.correo@email.com"
```

Verifica que quedó guardado:

```bash
git config --list
```

---

## 🗂️ PASO 2 — Crear la carpeta del proyecto

```bash
mkdir mi-proyecto-web
cd mi-proyecto-web
```

Crea los 3 archivos requeridos:
- `index.html`
- `estilos.css`
- `app.js`

---

## 🌱 PASO 3 — Inicializar Git

Dentro de la carpeta del proyecto:

```bash
git init
```

> Esto crea una carpeta oculta `.git` que guarda todo el historial.

Verifica el estado inicial:

```bash
git status
```

---

## 📝 COMMIT #1 — Estructura HTML

Agrega el archivo HTML y realiza el primer commit:

```bash
git add index.html
git commit -m "feat: agregar estructura inicial index.html"
```

Verifica:

```bash
git log --oneline
```

---

## 🎨 COMMIT #2 — Estilos CSS

Agrega el archivo CSS y realiza el segundo commit:

```bash
git add estilos.css
git commit -m "style: agregar diseño personalizado estilos.css"
```

---

## ⚡ COMMIT #3 — Lógica JavaScript

Agrega el archivo JS y realiza el tercer commit:

```bash
git add app.js
git commit -m "feat: agregar lógica JavaScript app.js"
```

O agrega todos los archivos restantes de una vez:

```bash
git add .
git commit -m "feat: proyecto completo con HTML, CSS y JS"
```

---

## 🌐 PASO 4 — Crear repositorio en GitHub

1. Ve a **github.com** e inicia sesión
2. Haz clic en el botón verde **"New"** (repositorio nuevo)
3. Nombre del repositorio: `mi-proyecto-web`
4. Visibilidad: **Public** ✅
5. **NO** marques "Add a README file"
6. Haz clic en **"Create repository"**

---

## 🔗 PASO 5 — Conectar y subir el proyecto

Copia la URL de tu repositorio (termina en `.git`) y ejecuta:

```bash
# Conectar el repositorio local con GitHub
git remote add origin https://github.com/TuUsuario/mi-proyecto-web.git

# Renombrar rama a "main" (estándar actual)
git branch -M main

# Subir el proyecto a GitHub
git push -u origin main
```

---

## ✅ Verificar todo está correcto

```bash
# Ver historial completo
git log --oneline

# Ver el remoto conectado
git remote -v

# Ver estado actual
git status
```

---

## 🔄 Flujo para futuras modificaciones

Cada vez que hagas cambios después del primer push:

```bash
git add .
git commit -m "descripción del cambio"
git push
```

---

## 📊 Resumen de comandos usados

| Comando | ¿Qué hace? |
|---|---|
| `git init` | Inicializa Git en la carpeta |
| `git status` | Muestra el estado de los archivos |
| `git add <archivo>` | Prepara archivos para el commit |
| `git add .` | Prepara TODOS los archivos |
| `git commit -m "mensaje"` | Guarda un punto en el historial |
| `git log --oneline` | Muestra el historial resumido |
| `git remote add origin <URL>` | Conecta con GitHub |
| `git branch -M main` | Renombra la rama principal |
| `git push -u origin main` | Sube el proyecto a GitHub |
| `git push` | Sube cambios posteriores |

---

## 🎤 Presentación en clase — Checklist

- [ ] Enlace del repositorio GitHub funcionando
- [ ] El proyecto se ve correctamente en el navegador
- [ ] Se muestran mínimo **3 commits** en el historial
- [ ] Explicar para qué sirve `git init`
- [ ] Explicar la diferencia entre `git add` y `git commit`
- [ ] Explicar qué es `origin` y `main`
- [ ] Mostrar `git log --oneline` en terminal

---

*Actividad Práctica · Unidad I · Herramientas y Servicios para Desarrolladores en la Web · ISAM 2025*
