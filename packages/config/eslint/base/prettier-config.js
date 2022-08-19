module.exports = {
  printWidth: 120, // 每行代码长度（80）
  trailingComma: 'es5', // 在对象或数组最后一个元素后面是否加逗号, 在ES5中加尾逗号
  tabWidth: 2, // 每个tab相当于多少个空格（默认2）
  useTabs: false, // 使用tab（制表符）缩进而非空格
  semi: true, // 是否在行尾加分号
  singleQuote: true, // 使用单引号代替双引号
  arrowParens: 'always', // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  // https://prettier.io/docs/en/options.html#prose-wrap
  // "always" - Wrap prose if it exceeds the print width.
  proseWrap: 'always', // preserve 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  singleAttributePerLine: true,
  htmlWhitespaceSensitivity: 'css', // HTML 文件空格敏感度
  jsxSingleQuote: false, // jsx中是否使用单引号
  endOfLine: 'auto', // 结尾是 \n \r \n\r auto
  jsxBracketSameLine: true, // 将>多行JSX元素放在最后一行的末尾，而不是单独放在下一行
};
