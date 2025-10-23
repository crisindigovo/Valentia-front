# Centro de Rehabilitación Valentía

Sitio web oficial del Centro de Rehabilitación Valentía, construido con React, Vite y Material UI.

## Características

### Secciones Principales

- **Header**: Navegación responsive con menú hamburguesa en móviles
- **Hero**: Sección de bienvenida con llamado a la acción
- **Misión**: Descripción de la misión y los tres pilares fundamentales:
  - Atención Personalizada
  - Equipo Multidisciplinario
  - Ambiente Acogedor
- **Servicios**: Cuatro categorías de servicios:
  - Deportes
  - Rehabilitación Ocupacional
  - Terapia Psicológica
  - Terapias Complementarias
- **Reserva**: Información de contacto y horarios
- **Noticias y Recursos**: Últimas publicaciones y contenido educativo
- **Contacto**: Formulario de contacto con validación completa
- **Footer**: Enlaces y redes sociales

### Características Técnicas

- Diseño completamente responsive
- Navegación suave entre secciones (smooth scroll)
- Iconos dummy en lugar de imágenes
- Validación de formularios
- Tema personalizado con colores corporativos (#381d92)
- Animaciones y transiciones suaves
- Tipografía optimizada con fuente Inter

## Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## Estructura del Proyecto

```
src/
├── components/
│   ├── Header.jsx           # Barra de navegación
│   ├── HeroSection.jsx      # Sección principal
│   ├── MissionSection.jsx   # Misión y pilares
│   ├── ServicesSection.jsx  # Servicios ofrecidos
│   ├── ReserveSection.jsx   # Información de reservas
│   ├── NewsSection.jsx      # Noticias y recursos
│   ├── ContactForm.jsx      # Formulario de contacto
│   └── Footer.jsx           # Pie de página
├── App.jsx                  # Componente principal
└── main.jsx                 # Punto de entrada
```

## Tecnologías

- React 18
- Vite 5
- Material UI 5
- Emotion (styled components)
- Material Icons

## Personalización

### Colores
Puedes personalizar los colores en [src/App.jsx](src/App.jsx), modificando el objeto `theme`:

```javascript
const theme = createTheme({
  palette: {
    primary: {
      main: '#381d92', // Color principal
    },
    secondary: {
      main: '#5b3cc4', // Color secundario
    },
  },
});
```

### Contenido
Cada componente contiene su propio contenido que puede ser fácilmente modificado.

## Licencia

© 2025 Centro de Rehabilitación Valentía. Todos los derechos reservados.
