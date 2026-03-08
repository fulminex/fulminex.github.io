# Arquitectura de Componentes

La aplicación adopta una arquitectura de componentes plana, donde pequeños componentes reutilizables se agregan directamente en la estructura principal o layout (`App.tsx`).

## Flujo de Datos

1. Los datos están completamente desacoplados de la interfaz. Todo el contenido textual, enlaces y listas (como la línea de tiempo de experiencia) viven en módulos dedicados dentro de `src/data/` (`owner.ts`, `hero.ts`, `experience.ts`, `skills.ts`, `contact.ts`, `navigation.ts`), con interfaces tipadas en `src/data/types/`.
2. Los componentes especializados dentro de `src/components/` importan únicamente los datos estrictamente necesarios para el renderizado.
3. El componente `App.tsx` sirve como el contenedor raíz de la aplicación, importando los componentes individuales de features (`Hero`, `Experience`, `Skills`, etc.) y organizando el diseño del DOM utilizando etiquetas de HTML5 semántico (`<main>`, `<header>`, `<footer>`).

## Enfoque de Estilos

Los estilos de diseño (CSS) se declaran directamente junto a los elementos JSX utilizando las clases utilitarias de Tailwind CSS. Esto proporciona una estructura ágil, altamente descriptiva y fácil de mantener debido a su estrecha relación con el marcado.

---

# Proceso de Construcción (Build) y Despliegue

* La aplicación usa scripts npm estandarizados (`dev`, `build`, `lint`, `preview`).
* Al ejecutar `npm run build`, en primera instancia se corre `tsc -b` para verificar tipos, seguido de `vite build`, produciendo así los activos estáticos minificados listos para producción y ubicándolos en la carpeta `/dist`.
* Estos archivos estáticos finales se pueden alojar sin fricción en cualquier CDN predeterminado o servicio de hosting (ej. GitHub Pages, Vercel o Netlify).
