import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Wedding-card/',   // 👈 important for GitHub Pages
  server: {
    host: "0.0.0.0",  // allows testing on mobile devices
    port: 5173        // or any port you like
  }
})
