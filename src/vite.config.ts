import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Ecoute sur toutes les interfaces réseau
    port: 5173,        // Port par défaut pour Vite
  }
})