import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {join} from 'path'

export default defineConfig({
  plugins: [vue()],
  //vite中配置@软链接
  resolve:{
    alias:{
      '@': join(__dirname, '/src')
    }
  }
})
