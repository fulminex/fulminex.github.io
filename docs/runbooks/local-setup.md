# Runbook: Cómo Levantar el Proyecto en Entorno Local

Este documento sirve como guía concisa para cualquier desarrollador que decida clonar el repositorio e iniciar la aplicación web en su máquina local.

## Prerrequisitos (Entorno)

Antes de comenzar, asegúrate de contar con el siguiente software instalado en tu sistema:
- **Node.js**: Versión 24 o superior. ([Descargar de Node.js](https://nodejs.org/))
- **Git**: Sistema de control de versiones. ([Descargar Git](https://git-scm.com/))
- **Un editor de texto**: Con soporte moderno como VS Code, Cursor, o WebStorm.

## Pasos para la Inicialización

Sigue estas instrucciones estrictamente en orden:

### 1. Clonar el Repositorio
Usa la interfaz de línea de comandos (CLI) y navega al directorio donde desees alojar el código.
```bash
git clone https://github.com/fulminex/fulminex.github.io.git
cd fulminex.github.io
```

### 2. Instalación de Dependencias
El proyecto depende de la gestora nativa de Node (`npm`) para resolver todo su árbol, desde React hasta TypeScript y Tailwind CSS.

Ejecuta en la raíz del proyecto:
```bash
npm install
```

### 3. Levantar el Servidor de Desarrollo
Para arrancar un servidor local en caliente gracias a **Vite**, usa:
```bash
npm run dev
```

Este comando tomará solo un par de segundos e imprimirá un resultado en consola indicando qué puerto está usando (comúnmente `http://localhost:5173/`).

### 4. Abrir en el Navegador
Abre tu navegador web favorito y accede a la URL que devolvió tu consola en el paso previo. A medida que realices cambios en los archivos `.tsx` u otras configuraciones dentro de `/src/`, la web se recargará automáticamente gracias al HMR (Hot Module Replacement) del framework.

---

## Comandos Extra de Utilidad

Si necesitas simular los pasos de construcción finales que ejecuta GitHub Actions en vez de un entorno local libre:

- **Verificar formato y convenciones (Linter):**
  ```bash
  npm run lint
  ```

- **Probar el Build Real para Producción:**
  Compila estáticamente usando tipado riguroso y genera la carpeta `./dist`.
  ```bash
  npm run build
  ```

- **Previsualizar la versión Compilada:**
  Levanta el paquete de archivos que recién generaste dentro de `dist` para probar cómo se ve en el entorno real (requiere que el "build" se haya corrido antes).
  ```bash
  npm run preview
  ```
