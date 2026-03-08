# Design System (Sistema de Diseño)

El sistema de diseño de la aplicación está construido fundamentalmente sobre **Tailwind CSS 4** y está diseñado para ser consistente, responsivo y compatible de forma nativa con Modo Oscuro (*Dark Mode*).

## Modos de Tema

El proyecto utiliza la estrategia de modo oscuro basada en clases (`darkMode: "class"`). Esto permite cambiar manualmente el tema agregando y removiendo la clase `.dark` en la etiqueta raíz `<html>` o en contenedores específicos, ofreciendo control granular sobre la interfaz para preferencias del usuario o de sistema.

## Paleta de Colores

El proyecto emplea un sistema de color híbrido: combina variables semánticas inyectadas en la configuración y el uso estructurado de la paleta estándar de Tailwind.

### Colores Semánticos (Custom)
La configuración de `tailwind.config.js` extiende los colores base para garantizar contraste en el Modo Oscuro:
* **Primary (`bg-primary`, `text-primary`):** `#135bec` (Usado para Call-to-actions principales, botones y acentos).
* **Background Light (`bg-background-light`):** `#f6f6f8` (Fondo neutro base para el modo claro).
* **Background Dark (`bg-background-dark`):** `#0A0E17` (Fondo muy oscuro base para el modo oscuro, casi negro-azulado para reducir fatiga visual).
* **Surface Dark (`bg-surface-dark`):** `#151B2B` (Paneles, tarjetas o `cards` que necesitan resaltar sutilmente del fondo del modo oscuro).

### Monocromáticos y Fondo (Slate)
Se ha elegido **`slate`** como la escala monocromática absoluta para todo el sistema (Bordes, textos y fondos secundarios):
* Los textos principales emplean `text-slate-900` en claro. En oscuro, la base global inyectada (`index.html`) es `text-slate-100`, apoyándose en `text-slate-300` o `text-white` en los componentes para generar jerarquía.
* Los textos secundarios, fechas o roles emplean `text-slate-500` y `text-slate-400`.
* Delimitadores y bordes se confían al `slate-200` (claro) y `slate-700/800` (oscuro).

### Degradados y Reflejos (Gradients)
Se aplican fondos degradados borrosos (Glow/Blur effects) y gradientes de texto usando **`blue`** e **`indigo`** como complemento al color `primary` (ej. `from-primary via-blue-400 to-indigo-400`) para generar un toque estético muy moderno propio del sector tecnológico actual.

### Resaltado de Sintaxis
Para la sección hero (cuadro de código) y viñetas ilustrativas de habilidades o avatares, se aplican toques atómicos de `purple-400`, `green-300`, `yellow-300`, `orange-300` y `orange-500` emulando coloreo de sintaxis de IDE reales y tarjetas tecnológicas de componentes.

## Tipografía y Radios de Borde

* **Fuente Principal (`Space Grotesk`):** Se inyecta globalmente desde `index.html` en la etiqueta `<body>` como la familia principal (`font-display`), respaldada por `sans-serif`. Dota a toda la aplicación de una lectura tecnológica muy moderna, no solo a los encabezados.
* **Fuente Monoespaciada (`font-mono`):** La tipografía monoespaciada estándar se emplea estratégicamente para datos secundarios (fechas y empresas en `Experience.tsx`) y el widget de código en el `Hero`, rompiendo la monotonía visual del texto tradicional.
* **Pesos Tipográficos:** Se aprovecha intensamente el engrosamiento de las fuentes (`font-bold` y `font-medium`) en la UI general para generar jerarquía frente a párrafos sin necesidad de introducir colores de texto nuevos.
* **Radios de Borde (Border Radius):** Se sobreescriben drásticamente en la configuración con valores más difuminados (`DEFAULT: 0.25rem`, `lg: 0.5rem`, `xl: 0.75rem`, `2xl: 1rem`, `full: 9999px`) para consolidar una estética moderna en las "Action Cards", emulando los lenguajes de diseño de sistemas operativos muy pulidos tipo "apple-like".
* **Espaciado:** Todo el padding, flex gap y márgenes del proyecto consumen de forma estricta la escala predictiva "box-model" nativa de Tailwind (`p-4`, `mb-8`, etc.) asegurando coherencia al no tener variables "mágicas" de CSS sueltas.

## Estilos Globales y UI 

En `index.css`, además de inyectar las directivas de tailwind, se encuentra declarada la personalización completa del scrollbar nativo del navegador (solo Webkit) utilizando el tema oscuro por defecto y el color de acento `primary` para mantener el ecosistema inmersivo sin las interrupciones del diseño gris típico del navegador.
