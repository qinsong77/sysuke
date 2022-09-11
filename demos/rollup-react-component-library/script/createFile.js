const fs = require('fs');
const path = require('path');

const componentsDir = '../src';

function readComponents(cb) {
  const componentsName = fs.readdirSync(path.resolve(componentsDir), {
    withFileTypes: true,
  });
  componentsName.filter((dirent) => dirent.isDirectory()).forEach((dirent) => cb(dirent));
}

// rewrite file
function rewriteFileExt(dirent) {
  const folderName = dirent.name;
  const newName = 'types.d.ts';
  const oldName = 'types.ts';
  fs.rename(`${componentsDir}`, ``, (err) => {});
}

let temp = '';
function addIndex(name) {
  temp =
    temp +
    `export { default as ${name} from './${name}'
export * from './${name}'

`;
  try {
    fs.writeFileSync('../src/index.ts', temp, {
      encoding: 'utf-8',
    });
  } catch (e) {
    console.log(e);
  }
}

// generate index.ts
function generateIndex(name) {
  const template = `export { default } from './${name}';
export * from './${name}';
export type { ${name}Props } from './types';
`;
  try {
    fs.writeFileSync(`../src/${name}/index.ts`, template, {
      encoding: 'utf-8',
    });
  } catch (e) {
    console.log(e);
  }

  const template2 = `import * as React from 'react';
import type { ${name}Props } from './types';

const ${name}: React.FC<${name}Props> = () => <div>${name}</div>;

export default ${name};`;

  try {
    fs.writeFileSync(`../src/${name}/${name}.tsx`, template2, {
      encoding: 'utf-8',
    });
  } catch (e) {
    console.log(e);
  }

  const template3 = `import * as React from 'react';

export type ${name}Props = {
  text?: string;
};

`;

  try {
    fs.writeFileSync(`../src/${name}/types.d.ts`, template3, {
      encoding: 'utf-8',
    });
  } catch (e) {
    console.log(e);
  }
}

function getAllMuiComponent() {
  const muiPath = '../node_modules/@mui/material/esm';

  console.log(path.resolve(muiPath));

  const componentsName = fs
    .readdirSync(path.resolve(muiPath), {
      withFileTypes: true,
    })
    .filter((dirent) => dirent.isDirectory() && dirent.name && /[A-Z]/.test(dirent.name[0]))
    .map((dirent) => dirent.name);

  // 创建文件夹
  // componentsName.forEach((name) => {
  //   fs.mkdirSync(`../src/${name}`);
  // });
  componentsName.forEach(generateIndex);
  // 创建index.ts
  try {
    fs.writeFileSync(
      '../src/index.ts',
      componentsName.reduce((pre, cur) => {
        return (
          pre +
          `export { default as ${cur} } from './${cur}';
export * from './${cur}';
// export type { ${cur}Props } from './${cur}';

`
        );
      }, ''),
      {
        encoding: 'utf-8',
      }
    );
  } catch (e) {
    console.log(e);
  }
}

getAllMuiComponent();
