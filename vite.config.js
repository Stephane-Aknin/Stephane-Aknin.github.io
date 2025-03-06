import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser', // Assure-toi que la minification est activée avec Terser
    terserOptions: {
      compress: {
        drop_console: true, // Supprime les appels console.log en production (facultatif)
      },
    },
  },
})
