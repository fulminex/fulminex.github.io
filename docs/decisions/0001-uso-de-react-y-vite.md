# ADR 0001: Uso de React 19 y Vite para el Frontend

## Estado
Aceptado

## Contexto
Se requería construir un portafolio personal interactivo, escalable y con una experiencia de desarrollo (DX) excepcional. Al ser una aplicación donde el peso y la velocidad de entrega importan mucho (especialmente en el primer renderizado), la meta es utilizar herramientas maduras, pero modernas.

## Decisión
Se decidió utilizar **React 19** como librería de componentes interactiva por su gran ecosistema y madurez. En lugar de usar Create React App (obsoleto) o Meta-Frameworks excesivamente robustos como Next.js (innecesarios para un entorno completamente estático), se eligió **Vite 7** como la herramienta de construcción central.

## Consecuencias
* **Positivas:** 
  * Compilación instántanea (HMR) gracias a ES modules.
  * El bundle final es altamente depurado y optimizado con Rollup en producción.
  * Menor carga cognitiva y sobre-ingeniería que configurar un servidor de Next.js SSR.
* **Negativas:** 
  * Como es un esquema Client-Side Rendering (CSR), el SEO puro depende del primer análisis indexado de los robots en lugar de enviar el HTML pre-renderizado explícitamente, aunque esto no supone problema crudo para un portafolio liviano.
