# Sysuke

Mine monorepo, powered by `pnpm workspace` and [turboprop](https://turbo.build/repo/docs).

Refer this: [MonoRepo by pnpm workspace + TurboRepo](https://www.sysuke.com/blog/architecture/monorepoPnpmTurboRepo.html)

## rules

common package install root, including shared internal config packages, including:

- `@sysuke/typescript-config`
- `@sysuke/eslint-config`

## todo

- lint-staged tsc
- Adjust sort list for [prettier-plugin-sort-imports](https://github.com/trivago/prettier-plugin-sort-imports)
- ~~eslint or Biome~~, currently using eslint, but DX is not so good. but Biome doesn’t support monorepos very well due to some limitations in resolving nested configuration files
- ~~turborepo~~
- ui library
- ~~web~~
- RN/Expo, reference: [expo-monorepo-example](https://github.com/byCedric/expo-monorepo-example#pnpm-workarounds)
- the process to publish package by changesets

1. changesets + github action to publish npm packages
2. ui package
3. trpc: hono + vite react example
4. refactor eslint
5. check docker

## Changeset process

1. on local
   - run `pnpm changeset`: select packages and version(major, minor, patch), will generate `.md` files
   - run `pnpm version-packages` = `pnpm changeset version`: use files generated by last step, update or generate `CHANGELOG.md`, update version on `package.json`
   - commit code
2. push code, github action will exec: `pnpm release`

### Prereleases

Refer: [Changeset Prereleases doc](https://github.com/changesets/changesets/blob/main/docs/prereleases.md)

eg: beta

```shell
changeset pre enter beta
changeset
changeset version
# on remote
pnpm changeset publish

```

## Common scripts

- install package in root

```shell
pnpm install typescript -w
# install to root devDependencies
pnpm install typescript -w -D
# or
pnpm add prettier-plugin-tailwindcss -Dw
```

- install a npm `package` for one package/app individually: `--filter=pkg`

```shell
pnpm add axios --filter=@apps/web
```

- install `pkg1` into `pkg2`, internal refer

```shell
pnpm install @sysuke/pkg1 --filter=@sysuke/pkg2
```

## Might use

- [syncpack](https://jamiemason.github.io/syncpack/guide/getting-started/) a command-line tool to manage multiple package.json files;
- [oxc](https://oxc-project.github.io/) oxlint => [Biome](https://biomejs.dev/): Format, lint, and more in a fraction of
  a second. - TBD
- [Sherif](https://github.com/QuiiBz/sherif) - Opinionated, zero-config linter for JavaScript monorepos

## Notes

- no need to add `tsconfig.json` in the root, [refer](https://turbo.build/repo/docs/guides/tools/typescript#you-likely-dont-need-a-tsconfigjson-file-in-the-root-of-your-project)

## Trivial

### commit

follow commitlint [rule](https://commitlint.js.org/reference/rules.html)

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

### manage npm package

- unpublish/remove package

```shell
npm unpublish  @sysuke/eslint-config-react --force
```

## Refer

- [turbo](https://turbo.build/repo/docs)
- [turborepo-example](https://github.com/vercel/turborepo/tree/main/examples)
- [arno-packages](https://github.com/SurfaceW/arno-packages)
- [nextui](https://github.com/nextui-org/nextui)
