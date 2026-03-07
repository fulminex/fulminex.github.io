# ADR 0002: Tailwind CSS como Sistema de Diseño Principal

## Estado
Aceptado

## Contexto
La web requiere un sistema de diseño visual muy limpio, de aspecto "premium" con tipografías particulares (`Space Grotesk`) y manejo de contrastes avanzados en tonos oscuros. Escribir SCSS o CSS Vanilla implicaría mantener una extensa arquitectura de clases BEM y dificultaría iterar el diseño de forma rápida.

## Decisión
Adoptar **Tailwind CSS 4** (utility-first) integrando las directivas directamente en JSX. El tema de Tailwind extenderá propiedades clave para colores (`primary`, `background-dark`), radios de bordes y manejo de modo oscuro mediante estrategia de clase. Cualquier CSS adicional solo se usará para utilidades extremas (como la personalización del Webkit Scrollbar en `index.css`).

## Consecuencias
* **Positivas:** 
  * Cero hojas de estilo externas para componentes; todo el contexto visual está localizado dentro del archivo `.tsx`.
  * Optimización perfecta para el bundle de producción eliminando todo el CSS que no se haya usado.
  * Extrema mantenibilidad en caso de refactoring de la estructura.
* **Negativas:** 
  * HTML potencialmente largo (con muchas clases) que a veces se vuelve un poco difícil de depurar dinámicamente sin inspeccionar fuertemente el inspector del navegador.
