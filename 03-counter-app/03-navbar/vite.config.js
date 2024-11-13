// Configuración de Vite para la aplicación navbar
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  server: {
    port: 4173,  // Fijar el puerto en 4173
  },
  plugins: [
    react(),
    federation({
      name: "navbar",                  // Nombre de la remote app
      filename: "remoteEntry.js",      // Nombre del archivo de salida
      exposes: { 
        "./Navbar": "./src/components/Navbar.jsx" 
      },
      shared: ["react"],               // Dependencias compartidas
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});