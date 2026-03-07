# ADR 0005: Priorización de Rendimiento Frontend (Reglas Vercel)

## Estado
Aceptado

## Contexto
Los frameworks web de un solo hilo (como React) tienen penalidades al momento de calcular interfaces masivas si sufren de sobre-renderizaciones o cálculos estáticos ineficientes, generando interfaces pesadas. Vercel es uno de los mantenedores y autores de gran parte del ecosistema de las mejores interfaces actuales gracias a su conocimiento técnico de React.

## Decisión
Incorporar un agente estricto local (`vercel-react-best-practices`) de políticas de arquitectura Frontend diseñadas por Vercel para limitar la forma de escribir el código de los componentes.
1. Se forzará la migración de llamadas/asignaciones estáticas en los renders re-subiéndolos (hoisting).
2. Se reemplaza el operador condicional `&&` por operadores ternarios seguros `? : `.
3. Se adoptan implementaciones estables como cierres léxicos funcionales (functional state updates) o reglas de visibilidad (CSS content-visibility) para listas pesadas.

## Consecuencias
* **Positivas:** 
  * Desempeño a nivel del hilo principal extremadamente rápido.
  * Aplicación más estable sin efectos colaterales raros de memorias atascadas, sin listeners ineficientes.
* **Negativas:** 
  * Elevamiento ligero de la curva de aprendizaje del código general para desarrolladores asiduos a escribir malas prácticas sin prestar atención. Se exige refactor constante en base a la skill de Vercel.
