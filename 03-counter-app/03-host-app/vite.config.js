import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host-app",             // Nombre de la host app
      remotes: {                    // Nombre de las remote apps que se van a usar dentro de la host app, se especifica la url del fichero generado por Module Federation
        navbar: "http://localhost:4173/assets/remoteEntry.js",
        counter: "http://localhost:4174/assets/remoteEntry.js",
      },
      shared: ["react"],            // Nombre de las dependencias compartidas
    }),
  ],
  mode: "development",
  server: {
    port: 5173,  // Fijar el puerto de `host-app`
  },
  build: {
    modulePreload: false,
    target: "esnext",

    minify: false,
    cssCodeSplit: false,
  },
});