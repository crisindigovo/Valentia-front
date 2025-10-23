# Despliegue en GitHub Pages

## ✅ Configuración completada

He configurado el proyecto para GitHub Pages:
- Actualizado `package.json` con script de deploy
- Configurado `vite.config.js` con base path
- Inicializado repositorio Git
- Agregado dependencia `gh-pages`

## 🚀 Pasos para desplegar:

### 1. Crear repositorio en GitHub

Ve a https://github.com/new y crea un repositorio llamado `valentia` (público)

### 2. Instalar dependencias

```bash
cd /Users/samtech/Desktop/Valentia/Modelo_formulario
npm install
```

### 3. Hacer commit inicial

```bash
git add .
git commit -m "Initial commit - Centro Rehabilitación Valentía"
```

### 4. Conectar con GitHub

Reemplaza `TU-USUARIO` con tu usuario de GitHub:

```bash
git remote add origin https://github.com/TU-USUARIO/valentia.git
git branch -M main
git push -u origin main
```

### 5. Desplegar a GitHub Pages

```bash
npm run deploy
```

### 6. Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Settings → Pages
3. Source: Debería estar en `gh-pages` branch
4. ¡Espera unos minutos!

Tu sitio estará en: `https://TU-USUARIO.github.io/valentia/`

## 🔄 Para actualizar el sitio:

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Descripción de cambios"
git push origin main
npm run deploy
```

## 📝 Nota sobre el nombre de usuario

En el archivo `package.json` línea 6, cambié `samtech` como ejemplo:
```json
"homepage": "https://samtech.github.io/valentia",
```

**IMPORTANTE**: Si tu usuario de GitHub es diferente, actualiza esta línea y también en `vite.config.js` línea 7.

## 🆘 Si no tienes cuenta de GitHub:

1. Crea una gratis en https://github.com/signup
2. Es necesaria para GitHub Pages
3. Es completamente gratuito para proyectos públicos

## 🎯 Alternativa SIN cuenta (Netlify Drop):

Si prefieres no usar GitHub:

```bash
npm run build
```

Luego ve a https://app.netlify.com/drop y arrastra la carpeta `dist`

## 🐛 Solución de problemas

### Si el deploy falla:
```bash
npm install gh-pages --save-dev
npm run deploy
```

### Si los estilos no cargan:
Verifica que `base: '/valentia/'` en `vite.config.js` coincida con el nombre de tu repo.

### Si quieres cambiar el nombre del repositorio:
1. Cambia `homepage` en `package.json`
2. Cambia `base` en `vite.config.js`
3. Reconstruye con `npm run deploy`
