import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
        name: 'Software Testing Methods PWA',
        short_name: 'Testing PWA',
        description: 'A Progressive Web App showcasing different software testing methods',
        theme_color: '#1e3a8a',
        icons: [
          {
            src: '/images/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/images/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ],
  base: '/software-testing-pwa/'
}) 