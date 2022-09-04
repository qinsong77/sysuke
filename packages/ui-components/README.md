# 组件库


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
