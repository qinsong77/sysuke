import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import externalDep from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';

import styled from 'rollup-plugin-styles';

import * as fs from 'fs';
import * as path from 'path';

const extensions = ['.ts', '.tsx', '.js', '.jsx'];
const isProd = process.env.NODE_ENV === 'production';

const entryFile = 'src/index.ts';
const componentDir = 'src';
const modulesNames = fs.readdirSync(path.resolve(componentDir));

const componentEntryFiles = modulesNames
  .map((name) => (/^[A-Z]\w*/.test(name) ? `${componentDir}/${name}/index.ts` : undefined))
  .filter((n) => !!n);

export default [
  {
    input: [entryFile, ...componentEntryFiles],
    output: [
      {
        dir: 'esm',
        format: 'esm',
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src',
        exports: 'named',
        assetFileNames: ({ name }) => {
          // console.log(name);
          // 抽离后的样式文件会作为 asset 输出，这里可以配置一下 样式文件的输出位置（为 babel-plugin-import 做准备）
          const { ext, dir, base } = path.parse(name);
          // console.log(ext);

          if (ext !== '.css') return '[name].[ext]';
          // 输出到style目录，便于tree-shaking
          return path.join(dir, 'style', base);
        },
      },
    ],
    plugins: [
      externalDep({
        includeDependencies: true,
      }),
      resolve({
        extensions,
      }),
      commonjs(),
      styled({
        // 抽出css，而不是打包进js
        mode: 'extract',
        // use: ['less'],
        // less: {
        //   javascriptEnabled: true,
        // },
        extensions: ['.less', '.css'],
        minimize: true,
        // CSS Modules
        modules: false,
        sourceMap: true,
        url: {
          inline: true,
        },
        onExtract: (data) => {
          // 以下操作用来确保每个组件目录只输出一个 index.css，实际上每一个子级组件都会输出样式文件，index.css 会包含所有子组件的样式
          const { css, name, map } = data;
          const { base } = path.parse(name);
          if (base !== 'index.css') return false;
          return true;
        },
      }),
      babel({
        extensions,
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
        preventAssignment: true,
      }),
      isProd &&
        terser({
          output: {
            comments: false,
          },
          compress: {
            // drop_console: true,
          },
        }),
      !isProd &&
        visualizer({
          filename: 'rollup-bundle-report.html',
        }),
    ],
  },
];
