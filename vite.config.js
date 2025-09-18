import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for local development and GitHub Pages deployment
export default defineConfig({
  base: '/Wedding-card/', // ✅ important for GitHub Pages subpath
  plugins: [react()],
  server: {
    host: true,      // allows testing on mobile via LAN
    port: 5173,      // default port for Vite dev server
    open: true       // automatically opens browser on `npm run dev`
  },
  build: {
    outDir: 'dist',  // production build folder
    sourcemap: false // optional: disable source maps for cleaner deployment
  }
});
