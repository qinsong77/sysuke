import fs from 'fs';
import log from './log';
import install from './install';
import { Buffer } from 'node:buffer';

/* 三个变量判断异步操作 */
let fileCount = 0; /* 文件数量 */
let dirCount = 0; /* 文件夹数量 */
let flat = 0; /* readdir数量 */
let isInstall = false;

type QuestionRes = {
  name: string;
  author: string;
};

function create(res: QuestionRes) {
  /* 创建文件 */
  log.green('------开始构建-------');
  // todo 改路径
  const sourcePath = __dirname.slice(0, -3 - 4) + 'webpack-react-base';
  console.log(sourcePath);
  log.blue('当前路径:' + process.cwd());
  /* 修改package.json*/
  revisePackageJson(res, sourcePath).then(() => {
    copy(sourcePath, process.cwd(), install());
  });
}

function copy(sourcePath: string, currentPath: string, cb: Function) {
  flat++;
  fs.readdir(sourcePath, (err, paths) => {
    flat--;
    if (err) {
      throw err;
    }
    paths.forEach((path) => {
      if (path !== '.git' && path !== 'package.json') fileCount++;
      const newSourcePath = sourcePath + '/' + path;
      const newCurrentPath = currentPath + '/' + path;
      fs.stat(newSourcePath, (err, stat) => {
        if (err) {
          throw err;
        }
        if (stat.isFile() && path !== 'package.json') {
          const readSteam = fs.createReadStream(newSourcePath);
          const writeSteam = fs.createWriteStream(newCurrentPath);
          readSteam.pipe(writeSteam);
          log.green('创建文件：' + newCurrentPath);
          fileCount--;
          completeControl(cb);
        } else if (stat.isDirectory()) {
          // todo
          if (
            path !== '.git' &&
            path !== 'package.json' &&
            path !== 'node_modules' &&
            path !== 'dist' &&
            path !== 'image'
          ) {
            dirCount++;
            dirExist(newSourcePath, newCurrentPath, copy, cb);
          }
        }
      });
    });
  });
}

function dirExist(
  sourcePath: string,
  currentPath: string,
  copyCallback: Function,
  cb: Function
) {
  fs.access(currentPath, (err) => {
    if (err) {
      fs.mkdir(currentPath, () => {
        fileCount--;
        dirCount--;
        copyCallback(sourcePath, currentPath, cb);
        log.yellow('创建文件夹：' + currentPath);
        completeControl(cb);
      });
    } else {
      copyCallback(sourcePath, currentPath, cb);
    }
  });
}
function completeControl(cb: Function) {
  if (fileCount === 0 && dirCount === 0 && flat === 0) {
    log.green('------构建完成-------');
    if (cb && !isInstall) {
      isInstall = true;
      log.blue('-----开始install-----');
      cb(() => {
        log.blue('-----完成install-----');
        /* 判断是否存在webpack  */
        runProject();
      });
    }
  }
}

function runProject() {
  try {
    const doing = install(['start']);
    doing();
  } catch (e) {
    log.red('自动启动失败，请手动npm start 启动项目');
  }
}

function revisePackageJson(res: QuestionRes, sourcePath: string) {
  return new Promise((resolve) => {
    fs.readFile(sourcePath + '/package.json', (err, data) => {
      if (err) throw err;
      const { author, name } = res;
      let json = data.toString();
      json = json.replace(/demoName/g, name.trim());
      json = json.replace(/demoAuthor/g, author.trim());
      const path = process.cwd() + '/package.json';
      fs.writeFile(path, Buffer.from(json), () => {
        log.green('创建文件：' + path);
        resolve('done');
      });
    });
  });
}

export default create;
