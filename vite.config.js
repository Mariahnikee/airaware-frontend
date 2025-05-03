import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({                      //(add to vite.config.ts)
  plugins: [
    tailwindcss(),
    react()],
    server: {
      proxy: {
        '/api': {
          target: 'https://airaware-5.onrender.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          secure: false,
          // Add these additional options:
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
          }
        }
      }
    }
})
