const { resolve } = require('node:path')
const project = resolve(process.cwd(), 'tsconfig.json')

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
    require.resolve('@vercel/style-guide/eslint/vitest'),
    'eslint-config-turbo',
  ],
  plugins: ['only-warn'],
  env: {
    node: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    '*.config.[mc]js', // updated rule
    'node_modules/',
    'dist/',
  ],
  overrides: [
    {
      files: ['*.js', '*.ts'],
    },
  ],
}
