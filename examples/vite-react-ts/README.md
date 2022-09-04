
[Bulletproof React ](https://github.com/alan2207/bulletproof-react) 为构建「简洁、强大、可扩展的前端项目架构」的方方面面给出了建议。

### 文件目录如何组织
项目推荐如下目录形式：
```md
src
|
+-- assets            # 静态资源
|
+-- components        # 公共组件
|
+-- config            # 全局配置
|
+-- features          # 特性
|
+-- hooks             # 公用hooks
|
+-- lib               # 二次导出的第三方库
|
+-- providers         # 应用中所有providers
|
+-- routes            # 路由配置
|
+-- stores            # 全局状态stores
|
+-- test              # 测试工具、mock服务器
|
+-- types             # 全局类型文件
|
+-- utils             # 通用工具函数
```
其中，`features`目录与`components`目录的区别在于：`components`存放全局公用的组件，而`features存`放「业务相关特性」。比如我要开发「评论」模块，「评论」作为一个特性，与他相关的所有内容都存在于`features/comments`目录下。「评论」模块中需要输入框，输入框这个通用组件来自 `components` 目录。所有「特性相关」的内容都会收敛到`features` 目录下，具体包括
```md
src/features/xxx-feature
|
+-- api         # 与特性相关的请求
|
+-- assets      # 与特性相关的静态资源
|
+-- components  # 与特性相关的组件
|
+-- hooks       # 与特性相关的hooks
|
+-- routes      # 与特性相关的路由
|
+-- stores      # 与特性相关的状态stores
|
+-- types       # 与特性相关的类型申明
|
+-- utils       # 与特性相关的工具函数
|
+-- theme.d.ts    # 入口
```
特性导出的所有内容只能通过统一的入口调用，比如：

```ts
import { CommentBar } from "@/features/comments"
```
而不是：
```ts
import { CommentBar } from "@/features/comments/components/CommentBar
```
这可以通过配置`ESLint`实现：
```js
{
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@/features/*/*'],
      },
    ],
    // ...其他配置
  }
}
```
相比于将「特性相关的内容」都以「扁平的形式」存放在全局目录下（比如将特性的hooks存放在全局hooks目录），以features目录作为「相关代码的集合」能够有效防止项目体积增大后代码组织混乱的情况。
