import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./", // GitHub Pages / static hosting

  plugins: [react()],

  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    minify: "terser",

    rollupOptions: {
      input: "index.html",
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          ui: ["lucide-react"]
        }
      }
    }
  },

  server: {
    port: 3000,
    strictPort: true
  }
});
