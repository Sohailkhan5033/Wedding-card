import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Wedding-card/',   // 👈 important for GitHub Pages
  plugins: [react()],
  server: {
    host: true,             // allows testing on local network (mobile/devices)
    port: 5173,             // default Vite port
    open: true              // opens browser automatically when running `npm run dev`
  },
  build: {
    outDir: 'dist',         // default, ensures build folder is named 'dist'
    sourcemap: false,       // optional: disable source maps for production
  }
})
