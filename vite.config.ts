import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      includeAssets: ['icons/favicon-32x32.png', 'icons/apple-touch-icon.png'],
      manifest: {
        name: 'Calorie Tracker',
        short_name: 'CalTrack',
        description: 'Simple calorie tracker using BMR and Activity values',
        display: 'standalone',
        orientation: 'portrait',
        theme_color: '#333333',
        background_color: '#ffffff',
        shortcuts : [
          {
            'name': 'Home',
            'url': '/',
            'icons': [{src: 'icons/android-chrome-192x192.png', sizes:'192x192'}]
          },
          {
            'name': 'Add Food',
            'url': '/#/addFood',
            'icons': [{src: 'icons/android-chrome-192x192.png', sizes:'192x192'}]
          },
          {
            'name': 'Set Activity',
            'url': '/#/setActivity',
            'icons': [{src: 'icons/android-chrome-192x192.png', sizes:'192x192'}]
          },
          {
            'name': 'Settings',
            'url': '/#/settings',
            'icons': [{src: 'icons/android-chrome-192x192.png', sizes:'192x192'}]
          }
        ],
        icons: [
          {
            src: 'icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/apple-touch-icon-180x180.png',
            sizes: '180x180',
            type: 'image/png'
          },
          {
            src: 'icons/apple-touch-icon-152x152.png',
            sizes: '152x152',
            type: 'image/png'
          },
          {
            src: 'icons/apple-touch-icon-120x120.png',
            sizes: '120x120',
            type: 'image/png'
          },
          {
            src: 'icons/apple-touch-icon-76x76.png',
            sizes: '76x76',
            type: 'image/png'
          },
          {
            src: 'icons/apple-touch-icon-60x60.png',
            sizes: '60x60',
            type: 'image/png'
          },
          {
            src: 'icons/android-chrome-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,woff2}']
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: true,
    strictPort: true,
    port: 5173,
    watch: {
      usePolling: true
    }
  }
});
