import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Wedding-card/',   // important for GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'dist',         // default build folder
    sourcemap: false
  }
})
