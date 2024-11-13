import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "colorpicker",      // Nombre de la remote app
      filename: "remoteEntry.js",   // Nombre del fichero generado por Module Federation
      exposes: {                    // Nombres de los ficheros expuestos desde la remote app
        "./ColorPicker": "./src/components/ColorPicker.jsx", 
        "./useColors": "./src/hooks/useColors.js", 
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
//      name: "colorpicker",
//      filename: "remoteEntry.js",
//      exposes: {
//        "./ColorPicker": "./src/components/ColorPicker.jsx", 
//        "./useColors": "./src/hooks/useColors.js", 
//      },
//      shared: ["react"],
//    }),
//  ],
//  server: {
//    port: 40004, // Puerto para desarrollo, asegúrate de usar el mismo en la app host
//  },
//});