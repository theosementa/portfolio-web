import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio-web",
  server: {
    port: 5006,
    strictPort: true,
  }
})
