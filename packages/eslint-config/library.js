const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    './base.js',
    require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
    require.resolve('@vercel/style-guide/eslint/browser'),
  ],
  // globals: {
  //   React: true,
  //   JSX: true,
  // },
  env: {
    node: true,
    browser: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  overrides: [
    {
      files: ['*.js?(x)', '*.ts?(x)'],
    },
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      extends: [require.resolve('@vercel/style-guide/eslint/vitest')],
    },
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
