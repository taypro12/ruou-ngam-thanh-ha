import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // Dùng './' nếu deploy vào subfolder hoặc host tĩnh
  base: "./",

  build: {
    outDir: "dist",
    assetsDir: "assets",
    cssCodeSplit: true,
    sourcemap: false,
    minify: "terser",

    rollupOptions: {
      input: "./index.html",
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
