# 组件库

`Invalid hook call. Hooks can only be called inside of the body of a function component.`

NPM 组件 和你的项目使用了 React Hooks 的情况，React 会报致命异常。（原因是 React Hooks 依赖上下文，所以全局只能使用一个，即使是版本完全一样的，官方推荐的解决方法 React 
[错误提示](https://zh-hans.reactjs.org/warnings/invalid-hook-call-warning.html)
1. 在主项目（不是被link的npm包）中使用alias指定加载的react依赖
webpack.config.js
```js
resolve: {
    alias: {
      'react': path.resolve(__dirname, 'node_modules/react')
    }
  }
```
2. 更好的调试方式：[yalc](https://github.com/wclr/yalc)
- [居然有比 npm link 更好的调试？](https://jishuin.proginn.com/p/763bfbd5b451)
- unpkg
`unpkg` 是一个内容源自 npm 的全球快速 CDN

配置unpkg 字段后,发布到 npmjs.com 中的包会自动同步到 unpkg.com 上，一般为 umd 格式。
```json
{
  "unpkg": "dist/antd.min.js"
}
```


```shell
## 创建项目
pnpm create vite components  --template react-ts
# 为组件导出类型
pnpm add vite-plugin-dts -D
```
update `vite.config.ts` file.

## storybook
添加脚本
```shell
cd packages/ui-components  && pnpx sb init --builder storybook-builder-vite
```
- [React 组件库 CSS 样式方案分析](https://segmentfault.com/a/1190000041840130)
- [使用 Vite 和 TypeScript 从零打造一个属于自己的 Vue3 组件库](https://mp.weixin.qq.com/s/75tD_WhqcSxy3PC5-_C8xw)
- [Configure Emotion with your Vite React Project](https://dev.to/glocore/configure-emotion-with-your-vite-react-project-7jl)
- [Create a React component library with Vite and Typescript](https://dev.to/nicolaserny/create-a-react-component-library-with-vite-and-typescript-1ih9)
- [React Component Library Template](https://github.com/alexeagleson/template-react-component-library)

## todo 
- button => Button 文件夹修改大小写，ts报错


## jest

https://cmdcolin.github.io/posts/2022-05-27-youmaynotneedabundler

https://github.com/unjs/unbuild

https://github.com/developit/microbundle

https://github.com/egoist/tsup [chakra-ui](https://github.com/chakra-ui/chakra-ui/)用了


[chakra-ui](https://github.com/chakra-ui/chakra-ui/) 可以作为参考，用了很多新技术
