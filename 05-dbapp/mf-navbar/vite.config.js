import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "navbar",      // Nombre de la remote app
      filename: "remoteEntry.js",   // Nombre del fichero generado por Module Federation
      exposes: {                    // Nombres de los ficheros expuestos desde la remote app
        "./Navbar": "./src/components/Navbar.jsx", 
      },                            // Nombres de las dependencias compartidas
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        "react-router-dom": { singleton: true },
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});