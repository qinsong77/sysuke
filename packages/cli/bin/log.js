"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk = require('chalk');
var colors = ['green', 'blue', 'yellow', 'red'];
// @ts-ignore
var log = {};
colors.forEach(function (color) {
    log[color] = function (text, isConsole) {
        if (isConsole === void 0) { isConsole = true; }
        return isConsole ? console.log(chalk[color](text)) : chalk[color](text);
    };
});
exports.default = log;
