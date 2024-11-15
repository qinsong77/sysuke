export default {
  // this will check Typescript files todo use respective tsconfig
  // '**/*.(ts|tsx)': (filenames) => {
  //   const filenamesJoined = filenames.join(' ')
  //   return `tsc-files --noEmit ${filenamesJoined}`
  // },

  // This will lint and format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `eslint --fix ${filenames.join(' ')}`,
    `prettier --write ${filenames.join(' ')}`,
    // `vitest related --run`,
  ],

  // this will Format MarkDown and JSON
  '**/*.(md|json)': (filenames) => `prettier --write ${filenames.join(' ')}`,
}
