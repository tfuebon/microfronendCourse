import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "detallePersonaje",      // Nombre de la remote app
      filename: "remoteEntry.js",   // Nombre del fichero generado por Module Federation
      exposes: {                    // Nombres de los ficheros expuestos desde la remote app
        "./DetallePersonaje": "./src/components/DetallePersonaje.jsx", 
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