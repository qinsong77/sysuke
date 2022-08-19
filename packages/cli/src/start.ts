/* 启动项目 */
import child_process from 'child_process';
import fs from 'fs';
import * as chalk from 'chalk';

const currentPath = process.cwd() + '/node_modules/sysuke-react-webpack-plugin';

const start = (type: string) => {
  return new Promise((resolve, reject) => {
    fs.access(currentPath, (ext) => {
      if (ext) {
        const children = child_process.fork(currentPath + '/index.js');
        children.on('message', (message: any) => {
          try {
            const msg = JSON.parse(message);
            if (msg.type === 'end') {
              children.kill();
              resolve('success');
            } else if (msg.type === 'error') {
              children.kill();
              reject();
            }
          } catch (e) {
            children.kill();
            reject();
          }
        });
        children.send(
          JSON.stringify({
            cwdPath: process.cwd(),
            type: type || 'build',
          })
        );
      } else {
        console.log(
          chalk.red(
            'sysuke-react-webpack-plugin does not exist , please install sysuke-react-webpack-plugin'
          )
        );
      }
    });
  });
};

export default start;
