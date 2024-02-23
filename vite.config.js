import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve("src", 'Dialog.jsx'),
      name: 'dialog-utils',
      fileName: (format) => `dialog-utils.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@emotion/react', '@emotion/styled'],
      output: {
        globals: {
          react: 'React',
          '@emotion/react': 'emotionReact',
          '@emotion/styled': 'emotionStyled'
        }
      }
    }
  },
  plugins: [
    peerDepsExternal(),
    react()
  ]
})
