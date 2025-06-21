import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/MELineshop/',
  plugins: [vue(),     tailwindcss(),],
  server: {
    watch: {
      usePolling: true, // Ensures file change detection inside Docker
    },
    host: '0.0.0.0', // Allows external access
    strictPort: true,
  }
})
