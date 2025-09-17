import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],   // tells Vite to handle React/JSX
  server: {
    host: "0.0.0.0",    // allows access from other devices (like your phone)
    port: 5173          // sets the dev server port (default is 5173)
  }
});
