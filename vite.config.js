import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePluginRadar } from 'vite-plugin-radar'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
	  react(),
	  VitePluginRadar({
	        // Google Analytics tag injection - delayed for performance
	        analytics: {
	          id: 'G-RVEJC2G3S9',
	          delay: 2000 // Delay GA loading by 2 seconds
	        },
	      })
  ],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    minify: true
  },
  server: {
    port: 3000
  },
  preview: {
    port: 3000
  }
})
