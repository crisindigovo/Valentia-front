# Guía de Despliegue - Centro Rehabilitación Valentía

## ✅ Opción 1: GitHub Pages (RECOMENDADO)

### Configuración completa ✓
El proyecto ya está configurado para GitHub Pages.

### Pasos:

1. **Instalar Node.js** desde: https://nodejs.org/

2. **Crear repositorio en GitHub:**
   - Ve a https://github.com/new
   - Nombre: `valentia`
   - Tipo: Público
   - Click en "Create repository"

3. **Instalar dependencias:**
```bash
cd /Users/samtech/Desktop/Valentia/Modelo_formulario
npm install
```

4. **Subir código a GitHub:**
```bash
git add .
git commit -m "Initial commit - Centro Rehabilitación Valentía"
git remote add origin https://github.com/TU-USUARIO/valentia.git
git branch -M main
git push -u origin main
```

5. **Desplegar:**
```bash
npm run deploy
```

6. **Activar GitHub Pages:**
   - Ve a tu repo → Settings → Pages
   - Source: gh-pages branch
   - ¡Listo! Tu sitio estará en: `https://TU-USUARIO.github.io/valentia/`

Ver [DEPLOY_GITHUB_PAGES.md](DEPLOY_GITHUB_PAGES.md) para instrucciones detalladas.

---

## Opción 2: Netlify Drop (SIN cuenta necesaria)

### Requisitos previos:
1. Instalar Node.js desde: https://nodejs.org/

### Pasos:

1. **Instalar dependencias y construir:**
```bash
cd /Users/samtech/Desktop/Valentia/Modelo_formulario
npm install
npm run build
```

2. **Desplegar en Netlify Drop:**
   - Ve a: https://app.netlify.com/drop
   - Arrastra la carpeta `dist` que se generó
   - ¡Listo! Obtendrás una URL pública

---

## Opción 3: Vercel (Requiere cuenta gratuita)

```bash
# Instalar Vercel CLI
npm install -g vercel

# Desplegar
vercel

# Seguir las instrucciones en pantalla
```

---

## ~~Opción 4: Surge~~ (NO RECOMENDADO - Removido)

1. Crear repositorio en GitHub
2. Subir el código
3. Configurar GitHub Pages en Settings → Pages
4. Agregar en `package.json`:
```json
"homepage": "https://tu-usuario.github.io/nombre-repo"
```
5. Agregar en `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/nombre-repo/'
})
```

## Solución de Problemas

### Si no tienes Node.js instalado:
1. Descarga desde: https://nodejs.org/ (versión LTS recomendada)
2. Instala siguiendo el asistente
3. Verifica la instalación:
```bash
node --version
npm --version
```

### Si encuentras errores al construir:
```bash
# Limpia node_modules y reinstala
rm -rf node_modules
npm install
npm run build
```

## URLs Útiles

- Netlify Drop: https://app.netlify.com/drop
- Surge: https://surge.sh/
- Vercel: https://vercel.com/
- Node.js: https://nodejs.org/

## Recomendación

**La forma más fácil y rápida es Netlify Drop:**
1. Instala Node.js
2. Ejecuta `npm install && npm run build`
3. Arrastra la carpeta `dist` a https://app.netlify.com/drop
4. ¡Listo en menos de 2 minutos!
