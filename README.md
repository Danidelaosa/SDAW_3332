# Repositorio Git SDAW_3332

## Información general

**Autora:** Daniela Carrillo
**Proyecto:** SDAW_3332
**Descripción:** Este repositorio contiene un proyecto web básico con Node.js que sirve para practicar el control de versiones utilizando Git y GitHub. El proyecto incluye la creación de ramas, commits, pull requests y la configuración de un servidor local.

## Descripción del proyecto

El proyecto consiste en una pequeña aplicación web que muestra un botón en la página principal. Al pulsar el botón, se despliega un mensaje que dice "Hola Daniela".

El objetivo es que cualquier persona pueda clonar el repositorio, instalar dependencias y ejecutar el servidor local siguiendo las instrucciones del README.

## Tecnologías utilizadas

* Node.js
* Express
* Git / GitHub
* HTML / JavaScript

## Estructura del proyecto

```
SDAW_3332/
├── index.html       # Página principal con el botón de saludo
├── script.js        # Lógica JavaScript para mostrar el mensaje
├── server.js        # Servidor local con Node.js y Express
├── package.json     # Dependencias y scripts de Node.js
├── README.md        # Documentación del proyecto
└── .gitignore       # Archivos y carpetas a excluir del repositorio
```

## Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone 
cd SDAW_3332
```

2. Instalar dependencias:

``` bash
npm install express
```

3. Iniciar el servidor:

```bash
node server.js
```

4. Abrir en el navegador:

```
http://localhost:3000
```

5. Pulsar el botón para mostrar el mensaje "Hola Daniela".

## Flujo de trabajo con Git

### Configuración inicial

```bash
git init
git config user.name "Daniela Carrillo"
git config user.email "tucorreo@ejemplo.com"
git config --list
```

### Control de versiones

```bash
git status       # Ver estado de los archivos
git add .        # Añadir todos los cambios
git commit -m "Mensaje descriptivo"  # Crear commit
git log          # Ver historial de commits
```

### Gestión de ramas

```bash
git branch rama1_DanielaCarrillo   # Crear rama1
git branch rama2_DanielaCarrillo   # Crear rama2
git checkout rama1_DanielaCarrillo # Cambiar a rama1
git checkout main                   # Volver a main
```

### Integración y sincronización

```bash
git merge rama1_DanielaCarrillo     # Fusionar rama1 en main
git merge rama2_DanielaCarrillo     # Fusionar rama2 en main
git push origin main                # Subir cambios a GitHub
```

### Restauración de cambios

```bash
git restore archivo                 # Restaurar archivo a versión anterior
git revert <commit_id>              # Revertir un commit específico
```

## Fragmentos de código

### index.html

```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>SDAW_3332</title>
</head>
<body>
<button onclick="saludo()">Mostrar saludo</button>
<script src="script.js"></script>
</body>
</html>
```

### script.js

```javascript
function saludo() {
    alert("Hola Daniela");
}
```

### server.js

```javascript
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
```

### package.json

```json
{
  "name": "sdaw_3332",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

### .gitignore

```
node_modules/
.env
.DS_Store
```

## Conclusiones

* Comprender el flujo de trabajo con Git y GitHub.
* Aprender a gestionar ramas, commits y pull requests.
* Levantar un servidor local de manera sencilla y documentada.
* Mantener un historial de commits claro y organizado.

## Enlace al repositorio remoto


