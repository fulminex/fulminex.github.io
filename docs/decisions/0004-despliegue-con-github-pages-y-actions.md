# ADR 0004: Adopción de GitHub Actions y GitHub Pages para CI/CD

## Estado
Aceptado

## Contexto
El flujo clásico de construir una web de forma local y subirla de manera manual al servidor es tendiente a fallas, retrasos o diferencias de dependencias entre la máquina local y el servidor, lo cual entorpece un proceso iterativo rápido en un portafolio web.

## Decisión
Se decide delegar formalmente toda la integración y despliegue a los recursos nativos del ecosistema GitHub: **GitHub Actions** más **GitHub Pages**, lo cual facilita subir cualquier actualización instantáneamente tras mezclar en la rama `master`.

## Consecuencias
* **Positivas:** 
  * Total de automatización de la integración de CI y la entrega (CD).
  * Arquitectura basada fuertemente en Git: Git sirve como única fuente de verdad real de lo que esta activo en Internet.
  * Costo nulo ya que es parte de la plataforma abierta, siendo la solución óptima para un solo desarrollador/arquitecto web.
* **Negativas:** 
  * Fuerte acoplamiento contra un único vendor (Microsoft/GitHub), es decir, en caso de migrar a otra nube requeriría reestructurar el archivo OIDC (`deploy.yml`).
