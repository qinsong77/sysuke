import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import replace from '@rollup/plugin-replace';
import * as path from 'path';

// https://cn.vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    // alias: [
    //   {
    //     find: /^@material-ui\/pickers/,
    //     replacement: path.resolve(__dirname, './node_modules/@material-ui/pickers/dist/material-ui-pickers.js'),
    //   },
    // ],
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'umd', 'cjs'],
      name: 'Sysuke-Ui',
      fileName: (format) => `sysuke-ui.${format}.js`,
    },
    //打包文件目录
    outDir: 'dist',
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'react-dom'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
      plugins: [
        replace({
          preventAssignment: true,
          'process.env.NODE_ENV': JSON.stringify('production'),
        }),
      ],
    },
  },
});
