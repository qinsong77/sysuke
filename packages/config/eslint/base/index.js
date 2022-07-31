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
    'plugin:import/errors',
  ],
  plugins: ['import'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: ['packages/*/tsconfig.json', 'app/*/tsconfig.json'],
      },
    },
  },
  rules: {
    'prettier/prettier': 'error',
    // turn on errors for missing imports
    'import/no-unresolved': 'error',
    // "@next/next/no-html-link-for-pages": "off",
    // "react/jsx-key": "off",
  },
};
