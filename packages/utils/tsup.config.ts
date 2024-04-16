import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['shared/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    sourcemap: true,
  },
  {
    entry: ['client/index.ts'],
    outDir: 'client/dist',
    banner: {
      js: "'use client'",
    },
    format: ['cjs', 'esm'],
    dts: true,
    sourcemap: true,
  },
  {
    entry: ['server/index.ts'],
    outDir: 'server/dist',
    banner: {
      js: "'use server'",
    },
    format: ['cjs', 'esm'],
    dts: true,
    sourcemap: true,
  },
])
