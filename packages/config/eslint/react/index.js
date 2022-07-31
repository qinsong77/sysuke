module.exports = {
  // ESLint will stop looking in parent folders once it finds a configuration with "root": true.
  root: true,
  extends: [
    '@sysuke/eslint-config-base',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
