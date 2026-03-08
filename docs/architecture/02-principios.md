# Principios de Diseño

1. **Separación de Responsabilidades:** La capa de interfaz de usuario (componentes) está estrictamente separada de la capa de datos (módulos tipados en `src/data/`).
2. **Seguridad de Tipado (Type Safety):** TypeScript se utiliza exhaustivamente para definir propiedades y estructuras de datos, capturando errores en tiempo de compilación en lugar del tiempo de ejecución.
3. **Rendimiento ante todo (Performance First):** Siguiendo las mejores prácticas de React recomendadas por Vercel:
    * Memorización estratégica (memoization) y extracción (hoisting) de variables.
    * Uso de la propiedad CSS `content-visibility` para listas largas.
    * Lógica de renderizado condicional eficiente.
    * Uso limpio de React Hooks evitando cierres rancios (stale closures).
4. **Agilidad:** Utilización de agentes, habilidades (skills) y flujos de trabajo (workflows) alojados en `.agents/` para hacer cumplir los estándares (ej. commits semánticos) y optimizar las iteraciones continuas de desarrollo.
