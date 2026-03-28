import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  },
  build: {
    // Vite 8 handles chunking effectively by default for small/medium apps
    // Removing the explicit object-based manualChunks to fix Rollup 4+ type warnings
  }
})
