module.exports = {
  presets: [
    [
      '@babel/preset-env',
      // {
      //   // https://babeljs.io/docs/en/babel-preset-env#modules
      //   modules: false,
      // },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        // importSource: '@emotion/react',
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: ['@emotion', '@babel/plugin-transform-runtime'],
};
