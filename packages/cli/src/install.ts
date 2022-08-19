import * as which from 'which';
import child_process from 'child_process';

function runCmd(cmd: string, args: readonly string[], fn: (code: number | null) => void) {
  args = args || [];
  const runner = child_process.spawn(cmd, args, {
    stdio: 'inherit',
  });
  runner.on('close', (code) => {
    if (fn) {
      fn(code);
    }
  });
}

function findPnpm() {
  const pnpms = process.platform === 'win32' ? ['pnpm.cmd'] : ['pnpm'];
  for (let i = 0; i < pnpms.length; i++) {
    try {
      which.sync(pnpms[i]);
      console.log('use pnpm: ' + pnpms[i]);
      return pnpms[i];
    } catch (e) {}
  }
  throw new Error('please install pnpm');
}

function install(installArg = ['install']) {
  const npm = findPnpm();
  return function (done?: Function) {
    runCmd(which.sync(npm), installArg, (code: number | null) => {
      done && done(code);
    });
  };
}

export default install;
