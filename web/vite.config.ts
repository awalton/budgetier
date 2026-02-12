import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0', // Listen on all interfaces, not just localhost
    port: 5173,
    watch: {
      usePolling: true, // For file watching in Docker volumes
    },
    hmr: {
      // Helps with have HMR issues
      clientPort: 5173,
    },
  },
})