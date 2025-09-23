import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: [],
    globals: true,
    alias: {
      '@': new URL('./', import.meta.url).pathname
    }
  }
})

