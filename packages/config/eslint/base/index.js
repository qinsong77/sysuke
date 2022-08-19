module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
  },
  extends: [
    // ESLint
    'eslint:recommended',
    // TypeScript
    'plugin:@typescript-eslint/recommended',
    // Prettier
    'plugin:prettier/recommended',
    // eslint-plugin-import
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:import/warnings',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'prettier/prettier': 'error',
    // "@next/next/no-html-link-for-pages": "off",
    // "react/jsx-key": "off",
  },
};
