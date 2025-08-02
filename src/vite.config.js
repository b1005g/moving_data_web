import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from 'path';

export default defineConfig({
  plugins: [react({jsxRuntime: "automatic"})],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),   // @ 상대경로 추가한 코드
    },
  },
});