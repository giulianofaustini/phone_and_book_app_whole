import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    plugins: [react()],
    server: {
      proxy: {
      '/api/persons': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    }
  }
  }});