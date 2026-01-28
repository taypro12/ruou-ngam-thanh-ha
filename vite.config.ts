
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Dùng './' giúp app chạy được ở bất kỳ đường dẫn nào (root hoặc subfolder)
  base: './', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      input: {
        main: './index.html',
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          utils: ['lucide-react', '@google/genai']
        }
      }
    },
  },
  server: {
    port: 3000,
    strictPort: true,
  }
});
