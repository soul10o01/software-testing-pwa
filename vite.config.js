import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/software-testing-pwa-2/',
  plugins: [react()],
  build: {
    assetsDir: 'assets',
    copyPublicDir: true,
  },
  publicDir: 'public'
}) 