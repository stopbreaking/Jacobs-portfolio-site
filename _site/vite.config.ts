import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import react from '@vitejs/plugin-react/dist'
import ViteRubyPlugin from "vite-plugin-ruby";

export default defineConfig({
  plugins: [
      react(),
    RubyPlugin(),
      ViteRubyPlugin(),
  ],
    base: "./"
})
