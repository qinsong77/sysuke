pkg.module

我们组件库默认入口文件是传统的CommonJS模块，但是如果你的环境支持ESModule的话，构建工具会优先使用我们的module入口

pkg.files

files是指我们1需要发布到npm上的目录，因为不可能components下的所有目录都被发布上去


- [https://mp.weixin.qq.com/s/75tD_WhqcSxy3PC5-_C8xw](https://mp.weixin.qq.com/s/75tD_WhqcSxy3PC5-_C8xw)


```shell
## 创建项目
pnpm create vite components  --template react-ts
# 为组件导出类型
pnpm add vite-plugin-dts -D
```
update `vite.config.ts` file.
```js

```

- [Create a React component library with Vite and Typescript](https://dev.to/nicolaserny/create-a-react-component-library-with-vite-and-typescript-1ih9)

https://vitejs.dev/guide/build.html#customizing-the-build
