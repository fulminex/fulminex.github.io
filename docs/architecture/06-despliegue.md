# Arquitectura de Despliegue (CI/CD)

El proyecto utiliza **GitHub Actions** para automatizar el flujo de Integración y Entrega Continua (CI/CD). La aplicación se despliega estáticamente de forma automatizada en **GitHub Pages**.

El flujo de trabajo se encuentra definido en `.github/workflows/deploy.yml`.

## Disparadores (Triggers) del Despliegue

La tubería (pipeline) de despliegue se ejecuta bajo dos condiciones:
1. **Push a Ramas:** Cada vez que se integra nuevo código a la rama principal (`master`).
2. **Ejecución Manual:** El flujo puede ser iniciado a voluntad desde la interfaz gráfica de GitHub Actions gracias al evento `workflow_dispatch`.

## Permisos de Ejecución

Para garantizar la máxima seguridad siguiendo el principio de mínimos privilegios, el entorno de ejecución requiere los siguientes accesos restrictivos a través de OIDC:
* Lectura del repositorio (`contents: read`).
* Escritura en la estructura de Github Pages (`pages: write`).
* Generación de tokens de despliegue (`id-token: write`).

## Pipeline de Construcción y Despliegue (Build Job)

El flujo cuenta con un único Job estructurado bajo el entorno `ubuntu-latest`.

### 1. Preparación del Entorno
* Descarga el código fuente usando `actions/checkout@v4`.
* Instala **Node.js en su versión 24** mediante `actions/setup-node@v4`, activando la caché para acelerar futuras instalaciones de `npm`.

### 2. Construcción (Build)
* Ejecuta `npm install` para instalar todas las dependencias declaradas.
* Ejecuta `npm run build`, que llama a Vite para compilar las optimizaciones de código de React, TypeScript SDK, y purga Tailwind CSS, dejando el código listo para la web.

### 3. Distribución a GitHub Pages
* Configura la compatibilidad directa inyectando el path en las plantillas estáticas usando `actions/configure-pages@v4`.
* Empaqueta todo el contenido optimizado previamente generado dentro de la carpeta local `./dist` usando `actions/upload-pages-artifact@v3`.
* Por último, realiza el pase a producción al entorno nativo de `github-pages` mediante `actions/deploy-pages@v4`. Este paso final refleja los cambios directamente en la URL de la web viva del proyecto.
