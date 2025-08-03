import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from 'path';

export default defineConfig({
  plugins: [
    react({jsxRuntime: "automatic"})
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),   // @ 상대경로
    },
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});