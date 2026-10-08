import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'

const logoSource = 'C:/Users/KANNAN/.gemini/antigravity/brain/2fb20567-060f-4c7d-a646-3488d4b4316a/.user_uploaded/media_1791374155836.png'
try {
  if (fs.existsSync(logoSource)) {
    if (!fs.existsSync(path.resolve('public'))) {
      fs.mkdirSync(path.resolve('public'), { recursive: true })
    }
    if (!fs.existsSync(path.resolve('src/assets'))) {
      fs.mkdirSync(path.resolve('src/assets'), { recursive: true })
    }
    fs.copyFileSync(logoSource, path.resolve('public/logo.png'))
    fs.copyFileSync(logoSource, path.resolve('public/favicon.png'))
    fs.copyFileSync(logoSource, path.resolve('src/assets/logo.png'))
  }
} catch (e) {
  console.error('Logo copy error:', e)
}

export default defineConfig({
  plugins: [react()],
})
