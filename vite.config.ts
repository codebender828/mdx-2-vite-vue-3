import { defineConfig } from 'vite'
import mdx from '@mdx-js/rollup'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ include: [/\.vue$/, /\.mdx$/] }),
    vueJsx({
      include: [/\.vue$/, /\.mdx$/]
    }),
    mdx({
      jsx: true,
    }),
  ]
})
