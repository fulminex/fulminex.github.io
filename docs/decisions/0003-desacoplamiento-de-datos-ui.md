# ADR 0003: Desacoplamiento de la Interfaz y los Datos Estáticos

## Estado
Aceptado

## Contexto
Las secciones del portafolio (Hero, Experiencia y Habilidades) deben ser fácilmente actualizables a medida que la carrera progrese sin requerir intervenciones excesivas ni escaneo de múltiples de archivos UI buscando textos.

## Decisión
Centralizar todas las cadenas de texto, enlaces de contacto, la línea paramétrica de tiempo e insignias en módulos de datos tipados dentro de `src/data/` (ej. `owner.ts`, `hero.ts`, `experience.ts`, `skills.ts`, `contact.ts`, `navigation.ts`). La capa de visualización (los componentes de `src/components/`) simplemente importa y mapea los arreglos generados acá y los transforma en componentes de React.

## Consecuencias
* **Positivas:** 
  * Los ingenieros o el desarrollador mismo pueden actualizar la experiencia laboral modificando un simple objeto JSON-like en TypeScript sin preocuparse por quebrar HTML ni romper estilos de Tailwind.
  * El código del componente concentra 100% de su lectura a su estructura layout, haciéndolo autoíndice.
* **Negativas:** 
  * Pequeño incremento en los tiempos de refactor si el formato requerido del componente visual y la información cambian de forma drástica al mismo tiempo.
