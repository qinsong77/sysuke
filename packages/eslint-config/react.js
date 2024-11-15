const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    './base.js',
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
    require.resolve('@vercel/style-guide/eslint/react'),
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
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
    // Force ESLint to detect .tsx files
    // { files: ['*.js?(x)', '*.ts?(x)'] },
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      extends: [
        require.resolve('@vercel/style-guide/eslint/vitest'),
        'plugin:testing-library/react',
      ],
    },
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
}
