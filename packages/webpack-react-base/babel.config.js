const IS_DEV = process.env.NODE_ENV === 'development';

module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        development: IS_DEV,
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [].concat(IS_DEV ? ['react-refresh/babel'] : []),
};
