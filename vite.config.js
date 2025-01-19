import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      // Asegúrate de copiar `_redirects` al directorio de salida
      input: resolve(__dirname, 'index.html'),
    },
  },
  // Hook para copiar `_redirects` después de la construcción
  async configResolved(config) {
    const outDir = config.build.outDir || 'dist'
    copyFileSync(resolve(__dirname, '_redirects'), resolve(outDir, '_redirects'))
    console.log(`Archivo _redirects copiado a ${outDir}`)
  },
})