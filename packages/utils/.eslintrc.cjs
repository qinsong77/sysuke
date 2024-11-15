/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@sysuke/eslint-config/library.js'],
  parserOptions: {
    project: true,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
