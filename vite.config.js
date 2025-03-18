import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   
  // Spécifier le chemin de base pour GitHub Pages
  base: '/Stephane-Aknin.github.io/',  // Nom de ton dépôt

  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,  // Supprimer les console.logs dans le build
      },
    },
  },
})
