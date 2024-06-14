# Sysuke

Mine monorepo, powered by `pnpm workspace` and [turboprop](https://turbo.build/repo/docs).

## Common scripts

- 安装全局的公共依赖包

```shell
pnpm install typescript -w
## install to root devDependencies
pnpm install typescript -w -D
# or
pnpm add prettier-plugin-tailwindcss -Dw
```

- 给某个`package`单独安装指定依赖: `--filter pkg`

```shell
pnpm add axios --filter @apps/web
```

- 在 pkg1 中引用 pkg2

```shell
pnpm install @sysuke/pkg1 --filter @sysuke/pkg2
```

## todo

- lint-staged tsc
- Adjust sort list for [prettier-plugin-sort-imports](https://github.com/trivago/prettier-plugin-sort-imports)
- ~~eslint or Biome~~, currently using eslint, but DX is not so good. but Biome doesn’t support monorepos very well due to some limitations in resolving nested configuration files
- ~~turborepo~~
- ui library
- ~~web~~
- RN/Expo, reference: [expo-monorepo-example](https://github.com/byCedric/expo-monorepo-example#pnpm-workarounds)
- the process to publish package by changesets

## Might use

- use [syncpack](https://jamiemason.github.io/syncpack/guide/getting-started/) 同步和标准化不同项目间的依赖版本
- [oxc](https://oxc-project.github.io/) oxlint => [Biome](https://biomejs.dev/): Format, lint, and more in a fraction of
  a second. - TBD

## Trivial

### commit

follow commitlint rule:

```
<type>(<scope>): <subject>
// 空一行
<body>
// 空一行
<footer>
```

`type` 必须是下面的其中之一：

- feat: 增加新功能
- fix: 修复 bug
- docs: 只改动了文档相关的内容
- style: 不影响代码含义的改动，例如去掉空格、改变缩进、增删分号
- refactor: 代码重构时使用，既不是新增功能也不是代码的bud修复
- perf: 提高性能的修改
- test: 添加或修改测试代码
- build: 构建工具或者外部依赖包的修改，比如更新依赖包的版本
- ci: 持续集成的配置文件或者脚本的修改
- chore: 杂项，其他不需要修改源代码或不需要修改测试代码的修改
- revert: 撤销某次提交

### npm registry

```shell
npm install nrm -g
## check all registry
nrm ls
## switch
npx nrm use npm
## confirm
npm config ls
```

### manage package

- unpublish/remove package

```shell
npm unpublish  @sysuke/eslint-config-react --force
```
