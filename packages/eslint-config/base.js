// https://github.com/vercel/turborepo/blob/main/examples/with-nestjs/packages/eslint-config/base.js
/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'turbo',
  ],
  plugins: ['@typescript-eslint/eslint-plugin', 'only-warn'],
  parser: '@typescript-eslint/parser',
  ignorePatterns: [
    '.*.cjs|js',
    '*.setup.js',
    '*.config.js',
    '.turbo/',
    'dist/',
    'coverage/',
    'node_modules/',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
}
