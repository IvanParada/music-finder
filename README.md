# 🎵 Music Finder

Una aplicación **React** moderna diseñada para descubrir música. Construida con un enfoque en estética premium, animaciones fluidas y una experiencia de usuario responsiva.

## ✨ Características Principales

- **🔍 Smart Search**: Una barra de búsqueda intuitiva con efectos de sombra "glowing" para encontrar artistas, canciones o álbumes fácilmente.
- **🎛️ Dynamic Filtering**: Un slider tipo "toggle" con animación "bounce" personalizada (cubic-bezier) para cambiar el contexto entre **Songs** y **Albums**.
- **📱 Responsive Grid Layout**: Los resultados se muestran en una grilla responsiva que se adapta elegantemente desde dispositivos móviles hasta pantallas de escritorio (desktop).
- **✨ Visual Feedback**: 
  - **Skeleton Loading**: Pantallas de carga tipo "skeleton" pulidas para proporcionar continuidad visual mientras se obtienen los datos (data fetching).
  - **Interactive Cards**: Tarjetas de pistas (**Track Cards**) que muestran el arte del álbum, metadatos (Artist, Album, Duration) y un slider de reproducción interactivo.
  

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) + [DaisyUI 5](https://daisyui.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/) para un manejo de estado global simple y escalable.
- **Icons**: Arquitectura de componentes SVG.

<img width="1142" height="855" alt="image" src="https://github.com/user-attachments/assets/2f418f67-7d99-4cd3-94f4-d9b85066840d" />

## 🚀 Getting Started

Sigue estos pasos para correr el proyecto localmente:

### Prerrequisitos
Asegúrate de tener **Node.js** instalado en tu máquina.

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd music-finder
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. Abre tu navegador y navega a `http://localhost:5173` (o la URL que se muestre en tu terminal).

## 📂 Estructura del Proyecto

```
src/
├── assets/          # Iconos SVG personalizados y assets estáticos
├── features/        # Arquitectura modular basada en funcionalidades (Features)
│   └── music/       # Lógica del dominio "Music"
│       ├── components/  # Componentes UI (FilterBar, SearchBar, ResultsGrid, TrackCard)
│       ├── store/       # Manejo de estado con Zustand
│       └── MusicPage.jsx # Punto de entrada principal del feature
├── shared/          # Componentes compartidos (Navbar, SkeletonCard)
└── main.jsx         # Punto de entrada de la aplicación
```

## 📜 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm run preview`: Previsualiza localmente la build de producción.
- `npm run lint`: Ejecuta ESLint para verificar la calidad del código.
