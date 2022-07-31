const IS_DEV = process.env.NODE_ENV === 'development';

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // targets 官方推荐使用.browserslistrc配置
        useBuiltIns: 'usage',
        corejs: {
          version: 3,
          proposals: true,
        },
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        development: IS_DEV,
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false,
      },
    ],
  ].concat(IS_DEV ? ['react-refresh/babel'] : []),
};
