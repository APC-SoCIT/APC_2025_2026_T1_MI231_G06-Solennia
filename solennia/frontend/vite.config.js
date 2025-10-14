import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  server: {
    open: '/landing.html', // 👈 THIS is the new line (add it here)
    proxy: {
      // API routes
      '/api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        secure: false
      },
      // Your vendor endpoint is /vendor/apply (no /api prefix)
      '/vendor': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        secure: false
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
