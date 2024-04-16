import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    include: ['sever/**/*.test.ts', 'shared/**/*.test.ts'],
  },
})
