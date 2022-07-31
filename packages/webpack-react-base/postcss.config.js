// eslint-disable-next-line @typescript-eslint/no-var-requires
const postcssPresetEnv = require('postcss-preset-env');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const postcssNormalize = require('postcss-normalize');
module.exports = {
  plugins: [
    [
      // // 参考 browserslist 的浏览器兼容表自动对那些还不支持的现代 CSS 特性做转换
      postcssPresetEnv({
        // 自动添加浏览器头
        autoprefixer: {
          // will add prefixes only for final and IE versions of specification
          flexbox: 'no-2009',
        },
        stage: 3,
      }),
    ],
    // 根据 browserslist 自动导入需要的 normalize.css 内容
    postcssNormalize({ forceImport: true }),
    require('postcss-flexbugs-fixes'),
  ],
};
