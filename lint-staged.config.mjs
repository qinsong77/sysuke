import fs from 'node:fs'
import path from 'node:path'

function fileExists(filePath) {
  return new Promise((resolve, reject) => {
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        resolve(false)
      } else {
        resolve(true)
      }
    })
  })
}

async function findTsconfig(filePath) {
  let tsconfigPath = path.join(path.dirname(filePath), 'tsconfig.json')
  let currentDir = path.dirname(filePath)

  while (currentDir !== '/') {
    if (await fileExists(tsconfigPath)) {
      return tsconfigPath
    }
    currentDir = path.dirname(currentDir)
    tsconfigPath = path.join(currentDir, 'tsconfig.json')
  }

  throw new Error(`No tsconfig.json found for file ${filePath}`)
}

export default {
  // this will check Typescript files todo use respective tsconfig
  // '**/*.(ts|tsx)': (filenames) => {
  //   console.log(filenames
  //     .map((f) => path.relative(process.cwd(), f)))
  //   return 'tsc --noEmit --project'
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
