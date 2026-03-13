import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // include uppercase image extensions as assets (e.g. .PNG)
  assetsInclude: ['**/*.PNG'],
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion'],
          ui: ['swiper', 'lucide-react'],
        },
      },
    },
  },
})