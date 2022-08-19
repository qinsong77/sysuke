const chalk = require('chalk');
import type { Color } from 'chalk';


type CallBack = (text: string, isConsole?: boolean) => void;
const colors: typeof Color[] = ['green', 'blue', 'yellow', 'red'];

// @ts-ignore
const log: Record<typeof colors[number] , CallBack> = {};

colors.forEach((color) => {
  log[color] = function (text: string, isConsole = true) {
    return isConsole ? console.log(chalk[color](text)) : chalk[color](text);
  };
});


export default log;
