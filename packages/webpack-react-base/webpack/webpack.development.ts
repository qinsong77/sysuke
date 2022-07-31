import type { Configuration } from 'webpack';
import 'webpack-dev-server';
import merge from 'webpack-merge';
import commonConfig from './webpack.common';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

const config: Configuration = {
  mode: 'development',
  // https://webpack.docschina.org/configuration/cache/
  cache: { type: 'memory' },
  devtool: 'eval-cheap-module-source-map',
  watchOptions: {
    aggregateTimeout: 500,
    poll: 1000,
    ignored: /node_modules/,
  },
  devServer: {
    hot: true,
    open: true,
    static: {
      // directory: path.join(__dirname, './dist'),
    },
    port: 9000,
    // 当使用 [HTML5 History API] 时，任意的 `404` 响应被替代为 `index.html`
    historyApiFallback: true,
    // 是否启用gzip压缩
    compress: true,
    client: {
      logging: 'info',
      progress: true,
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    proxy: {},
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // all options are optional
    //   filename: 'css/[name].css',
    //   chunkFilename: 'css/[name].chunk.css',
    //   // 常遇到如下警告，Conflicting order. Following module has been added:…。
    //   // 此警告意思为在不同的js中引用相同的css时，先后顺序不一致。也就是说，在1.js中先后引入a.css和b.css，而在2.js中引入的却是b.css和a.css，此时会有这个warning。
    //   ignoreOrder: true,
    // }),
    new ReactRefreshWebpackPlugin(),
  ],
};

export default merge(commonConfig, config);
