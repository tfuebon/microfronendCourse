## Host app
Crear la app:
```bash
npm create vite@latest host-app -- --template react
```

## Remote app
Crear los microfrontends de la app:
```bash
npm create vite@latest todo-components -- --template react
```
Y dentro de la carpeta de la remote app:
```bash
npm install @originjs/vite-plugin-federation --save-dev
```
Y modificar este fichero de configuración `vite.config.js`:
```js
// vite.config.js in todo-components
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "todo-components",      // Nombre de la remote app
      filename: "remoteEntry.js",   // Nombre del fichero generado por Module Federation
      exposes: {                    // Nombres de los ficheros expuestos desde la remote app
        "./List": "./src/components/List.jsx", 
        "./Input": "./src/components/Input.jsx",
      },                            // Nombres de las dependencias compartidas
      shared: ["react"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
```
Y luego ejecutar el comando:
```bash
npm run build
npm run preview # Para correr la remote app localmente de manera optimizada
```

## Host app
Y dentro de la carpeta de host app:
```bash
npm install @originjs/vite-plugin-federation --save-dev
```
Y modificar este fichero de configuración `vite.config.js`:
```js
// vite.config.js in host-app
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host-app",             // Nombre de la host app
      remotes: {                    // Nombre de las remote apps que se van a usar dentro de la host app, se especifica la url del fichero generado por Module Federation
        todo_components: "http://localhost:4173/assets/remoteEntry.js",
      },
      shared: ["react"],            // Nombre de las dependencias compartidas
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",

    minify: false,
    cssCodeSplit: false,
  },
});
```