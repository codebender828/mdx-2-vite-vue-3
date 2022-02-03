import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mdx from '@mdx-js/rollup'
import { babel } from '@rollup/plugin-babel'

import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from "remark-gfm"
import remarkAutolinkHeadings from "remark-autolink-headings"
import remarkSlug from "remark-slug"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    mdx({
      jsx: true,
      remarkPlugins: [
        remarkFrontmatter,
        remarkGfm,
        remarkAutolinkHeadings,
        remarkSlug
      ]
    }),
    babel({
      // Also run on what used to be `.mdx` (but is now JS):
      extensions: ['.js', '.jsx', '.cjs', '.mjs', '.md', '.mdx'],
      "plugins": ["@vue/babel-plugin-jsx"]
    })
  ]
})
