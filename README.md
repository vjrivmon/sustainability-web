# 🌱 AF Fabrics - Sustainability Web

Una aplicación web moderna y profesional para la presentación de prácticas de sostenibilidad en la industria textil, desarrollada para **AF Fabrics**.

## ✨ Características Principales

- 🎨 **Interfaz Moderna**: Diseño responsive con TailwindCSS
- ⚛️ **Componentes React**: Arquitectura modular y reutilizable  
- 🧭 **Navegación Intuitiva**: Sistema de navegación completo entre secciones
- 📝 **Formularios Validados**: Contacto con validaciones en tiempo real
- 🏆 **Logo Profesional**: Identidad visual AF Fabrics con alfil de ajedrez
- ⚡ **Optimización**: Build optimizado con Vite para máxima performance
- 🌍 **Sostenibilidad**: Enfoque en prácticas ecológicas y responsables

## 🚀 Tecnologías Utilizadas

| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| **React** | 18.2.0 | Frontend framework |
| **Vite** | 4.5.14 | Build tool y dev server |
| **TailwindCSS** | 3.3.3 | Framework de estilos utility-first |
| **Lucide React** | 0.263.1 | Iconos SVG modernos |
| **PostCSS** | 8.4.27 | Procesador CSS |

## 📦 Instalación y Desarrollo

### Requisitos Previos
- Node.js (versión 16 o superior)
- npm o yarn

### Configuración Local

```bash
# Clonar el repositorio
git clone https://github.com/[TU_USUARIO]/sustainability-web.git
cd sustainability-web

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:3001`

### Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo con hot-reload
npm run build        # Build optimizado para producción
npm run preview      # Preview del build de producción
npm run lint         # Linting del código con ESLint
```

## 🏗️ Estructura del Proyecto

```
sustainability-web/
├── public/                 # Archivos estáticos
│   └── favicon.svg        # Favicon personalizado
├── src/                   # Código fuente
│   ├── components/        # Componentes React reutilizables
│   │   ├── Header.jsx     # Navegación principal
│   │   ├── Hero.jsx       # Sección hero
│   │   ├── About.jsx      # Sección acerca de
│   │   ├── Products.jsx   # Catálogo de productos
│   │   ├── Sustainability.jsx # Métricas de sostenibilidad
│   │   ├── Contact.jsx    # Formulario de contacto
│   │   ├── Footer.jsx     # Pie de página
│   │   ├── Logo.jsx       # Logo AF Fabrics
│   │   └── ProductCard.jsx # Tarjetas de producto
│   ├── data/              # Datos del proyecto
│   │   └── products.js    # Catálogo de productos sostenibles
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Punto de entrada
│   └── index.css          # Estilos globales y utilidades
├── dist/                  # Build de producción (generado)
└── package.json           # Dependencias y scripts
```

## 🎨 Componentes Principales

### 🏢 Logo AF Fabrics
Logo minimalista que incluye:
- **Letra A** azul bold (#0066CC) 
- **Alfil de ajedrez** negro geométrico
- **Letra F** roja bold (#CC0000)
- Diseño flat vector profesional

### 📊 Sección Sustainability
- Métricas de impacto ambiental
- Iniciativas de sostenibilidad
- Certificaciones (GOTS, OEKO-TEX, GRS)
- Proceso de producción circular

### 🛒 Catálogo de Productos
- Filtrado por categorías
- Tarjetas interactivas de producto
- Información de sostenibilidad
- Variaciones de color y precio

### 📞 Formulario de Contacto
- Validaciones en tiempo real
- Estados de loading
- Mensajes de éxito/error
- Información de contacto empresarial

## 🌐 Deployment

### Build de Producción

```bash
npm run build
```

Los archivos optimizados se generan en la carpeta `dist/` listos para deployment.

### Plataformas Recomendadas
- **Netlify** - Deploy automático desde GitHub
- **Vercel** - Integración perfecta con React
- **GitHub Pages** - Hosting gratuito
- **AWS S3** - Para aplicaciones enterprise

## 🤝 Contribución

1. Fork del proyecto
2. Crear rama de feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit de cambios (`git commit -m 'feat: agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

### Convenciones de Commit
- `feat:` nueva funcionalidad
- `fix:` corrección de bug
- `docs:` cambios en documentación
- `style:` cambios de formato
- `refactor:` refactoring de código
- `perf:` mejoras de rendimiento

## 📄 Licencia

Proyecto desarrollado para **AF Fabrics**. Todos los derechos reservados.

## 📧 Contacto

Para consultas sobre el proyecto:
- **Email**: info@affabrics.com
- **Teléfono**: +34 900 000 000
- **Dirección**: Calle Textil, 123, 08001 Barcelona, España

---

**AF Fabrics** - *Comprometidos con la sostenibilidad textil* 🌱♻️

> Desarrollado con ❤️ para un futuro más sostenible