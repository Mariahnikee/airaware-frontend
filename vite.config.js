import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({                      //(add to vite.config.ts)
  plugins: [
    tailwindcss(),
    react()],
})
