import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "colorlist",      // Nombre de la remote app
      filename: "remoteEntry.js",   // Nombre del fichero generado por Module Federation
      exposes: {                    // Nombres de los ficheros expuestos desde la remote app
        "./ColorList": "./src/components/ColorList.jsx", 
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

//import { defineConfig } from "vite";
//import react from "@vitejs/plugin-react";
//import federation from "@originjs/vite-plugin-federation";
//
//export default defineConfig({
//  plugins: [
//    react(),
//    federation({
//      name: "colorlist",
//      filename: "remoteEntry.js",
//      exposes: {
//        "./ColorList": "./src/components/ColorList.jsx", 
//      },
//      shared: ["react"],
//    }),
//  ],
//  server: {
//    port: 40002,
//    fs: {
//      strict: false, // Permite accesos entre módulos
//    },
//    cors: true, // Asegúrate de habilitar CORS para permitir llamadas de otros hosts
//  },
//});
