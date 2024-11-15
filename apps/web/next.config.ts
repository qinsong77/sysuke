import type { NextConfig } from 'next'
import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const isProd = process.env.NODE_ENV === 'production'
const __dirname = dirname(fileURLToPath(import.meta.url))

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  distDir: isProd ? 'dist' : '.next',
  experimental: {
    // this includes files from the monorepo base two directories up
    // @ts-expect-error nextjs support this https://nextjs.org/docs/app/api-reference/next-config-js/output#caveats
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
}

export default nextConfig
