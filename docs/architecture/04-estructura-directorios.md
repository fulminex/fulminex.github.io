# Estructura de Directorios

El proyecto sigue una organización clara y predecible:

```text
fulminex.github.io/
├── .agents/                    # Flujos de trabajo de agentes y configuración de habilidades
│   ├── skills/                 # Lógica de agentes (ej. git-commit, vercel-best-practices)
├── docs/                       # Documentación del proyecto
│   └── architecture/           # Esquemas de arquitectura y especificaciones
├── public/                     # Activos estáticos servidos directamente (fuentes, iconos, etc.)
├── src/                        # Código fuente
│   ├── assets/                 # Activos procesados (SVGs, imágenes fijas)
│   ├── components/             # Componentes Funcionales de React
│   │   ├── ContactBanner.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── Skills.tsx
│   ├── data/                   # Capa de Acceso a Datos
│   │   └── mockData.ts         # Estado centralizado y contenido de la app
│   ├── hooks/                  # Custom React Hooks
│   ├── utils/                  # Funciones de ayuda (formato de fechas, scroll suave)
│   ├── App.css                 # Estilos globales (Capas de Tailwind)
│   ├── App.tsx                 # Componente raíz que maneja la estructura de la página
│   ├── index.css               # Punto de entrada de CSS
│   └── main.tsx                # Punto de entrada de la app (Renderizado por ReactDOM)
├── index.html                  # Punto de entrada HTML (Vite inyecta los scripts)
├── package.json                # Dependencias del proyecto y scripts
├── tailwind.config.js          # Configuración de Tailwind y variables de tema
├── tsconfig.json               # Reglas de compilación y ruteo de TypeScript
└── vite.config.ts              # Configuración del servidor y empaquetado de Vite
```
