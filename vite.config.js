import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {fileURLToPath,URL} from "node:url"
import tailwindcss from "@tailwindcss/vite";
import glsl from "vite-plugin-glsl"


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
      tailwindcss(),
      glsl()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
})
