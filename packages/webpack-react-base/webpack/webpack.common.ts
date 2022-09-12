// .ts 配置 https://webpack.js.org/configuration/configuration-languages
import type { Configuration } from 'webpack';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

import * as path from 'path';
import { IS_DEV } from './config';
import { handler } from './utils';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
console.log(path.resolve(__dirname, "../tsconfig.json"));
const config: Configuration = {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/index'),
  resolve: {
    // 尝试按顺序解析这些后缀名。如果有多个文件有相同的名字，但后缀名不同，webpack 会解析列在数组首位的后缀的文件 并跳过其余的后缀。
    extensions: ['.tsx', '.ts', '.js', '.json'],
    // 创建 import 或 require 的别名，来确保模块引入变得更简单。例如，一些位于 src/ 文件夹下的常用模块：
    // alias: {
    //   '@': path.resolve(__dirname, '../src'),
    // },
    plugins: [
      //https://www.npmjs.com/package/tsconfig-paths-webpack-plugin
      new TsconfigPathsPlugin({
        baseUrl: __dirname,
        // todo
        // https://snyk.io/advisor/npm-package/tsconfig-paths-webpack-plugin/example
        configFile: path.resolve(__dirname, "../tsconfig.json"),
      })
    ]
  },
  output: {
    // 相当于 clean-webpack-plugin
    clean: true,
    // default: auto
    publicPath: process.env.PUBLIC_URL || '/',
    path: path.resolve(__dirname, '../dist'),
    filename: IS_DEV
      ? 'js/[name].bundle.js'
      : 'js/[name].[contenthash:8].bundle.js',
    chunkFilename: IS_DEV
      ? 'js/[name].chunk.js'
      : 'js/[name].[contenthash:8].chunk.js',
    // 与 output.filename 相同，不过应用于 Asset Modules。
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  // loader的执行顺序默认从右到左，多个loader用[],字符串只用一个loader，也可以是对象的格式
  module: {
    rules: [
      // assets模块是webpack5自带,不用下载
      {
        test: /\.(png|jpe?g|svg|gif|webp)$/,
        // https://webpack.docschina.org/guides/asset-modules#general-asset-type
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 10kb
          },
        },
        generator: {
          filename: 'assets/images/[name].[hash][ext][query]',
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][hash][ext][query]',
        },
      },
      {
        test: /\.css$/i,
        use: [
          // 生产模式使用 mini-css-extract-plugin 插件分离 JS/CSS 文件实现并行加载，而开发环境选择 style-loader 它可以使用多个标签将 CSS 插入到 DOM 中，并且反应会更快。
          IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(ts|tsx|js|mjs|jsx)$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
        exclude: [/node_modules/, /public/, /(.|_)min\.js$/],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'webpack react app',
      description: 'webpack react app',
      publicPath: process.env.PUBLIC_URL || '/',
      minify: {
        removeComments: true, // 删除注释
        collapseWhitespace: true,
        minifyCSS: true, // 压缩 HTML 中出现的 CSS 代码
        minifyJS: true, // 压缩 HTML 中出现的 JS 代码
      },
    }),
    new ForkTsCheckerWebpackPlugin(),
    new friendlyErrorsWebpackPlugin(),
    new webpack.ProgressPlugin(handler),
  ],
};

export default config;
