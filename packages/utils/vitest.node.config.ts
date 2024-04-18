// eslint-disable-next-line import/no-extraneous-dependencies -- vitest had installed at the project root
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    include: ['sever/**/*.test.ts', 'shared/**/*.test.ts'],
  },
})
