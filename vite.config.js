import { defineConfig } from 'vite';

export default defineConfig({
  base: '/google-portal/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
  }
});
