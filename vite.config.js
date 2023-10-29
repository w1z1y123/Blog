import { defineConfig } from 'vita'
import image from '@rollup/plugin-image'

export default defineConfig({
   plugins: [
     // ... 其他插件 ...
     image(),
   ],
})
