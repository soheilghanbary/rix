import devServer from '@hono/vite-dev-server';
import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    devServer({
      entry: 'src/index.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
