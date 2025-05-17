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
    target: 'node18',
    outDir: 'dist',
    emptyOutDir: true,
    // Don't use SSR mode since we want to bundle dependencies
    ssr: false,
    // Don't build as a library, but as a regular Node.js application
    lib: undefined,
    rollupOptions: {
      // Only mark Node.js built-ins as external
      external: [
        /^node:/,
        'fs', 'path', 'os', 'crypto', 'buffer', 'querystring', 'url',
        'http', 'https', 'stream', 'util', 'zlib', 'events', 'string_decoder',
        'async_hooks', 'tty', 'net'
      ],
      input: resolve(__dirname, 'src/index.ts'),
      output: {
        // Ensure a single file output for easier deployment
        format: 'esm',
        entryFileNames: 'index.mjs',
        inlineDynamicImports: true
      },
    },
    // Bundle all dependencies into the output
    minify: true,
    sourcemap: true,
    // Include node_modules in the bundle
    commonjsOptions: {
      transformMixedEsModules: true,
      include: [/node_modules/]
    }
  },
  test: {
    globals: true,
    environment: 'node',
    include: ['**/*.{test,spec}.ts'],
    exclude: [...configDefaults.exclude, 'dist']
  }
});
