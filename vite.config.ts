import { resolve } from 'path';
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      // formats: ['cjs', 'es'],
      formats: ['es'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`
    },
    rollupOptions: {
      external: [
        'express',
        'cors',
        'helmet',
        'morgan',
        'dotenv',
        /node:.*/
      ]
    },
    sourcemap: true
  },
  test: {
    globals: true,
    environment: 'node',
    include: ['**/*.{test,spec}.ts'],
    exclude: [...configDefaults.exclude, 'dist']
  }
});
