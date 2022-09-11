import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import externalDep from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';
import postcss from 'rollup-plugin-postcss'


const input = './src/index.ts';
const extensions = ['.ts', '.tsx', '.js', '.jsx'];
const isProd = process.env.NODE_ENV === 'production';

export default [
  {
    input,
    output: [
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/index.cjs.js',
        format: 'cjs',
        sourcemap: true,
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
      babel({
        extensions,
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
        preventAssignment: true,
      }),
      postcss({
        extract: 'index.css',
        // 压缩
        minimize: true,
        // Enable CSS modules
        modules: true,
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
