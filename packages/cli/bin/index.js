#!/usr/bin/env node
'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var create_1 = __importDefault(require("./create"));
var start_1 = __importDefault(require("./start"));
var initQa_1 = __importDefault(require("./initQa"));
var log_1 = __importDefault(require("./log"));
var green = log_1.default.green, yellow = log_1.default.yellow, blue = log_1.default.blue;
commander_1.program.version('1.0.0');
/* create a project */
commander_1.program
    .command('create')
    .description('create a project ')
    .action(function () {
    green('👽 👽 👽 ' + '欢迎使用sysuke,轻松构建webpack5 react ts项目～🎉🎉🎉');
    (0, initQa_1.default)().then(function (res) {
        if (res.conf) {
            (0, create_1.default)(res);
        }
        else {
            yellow("创建新项目请输入y");
        }
    });
});
/* start  project */
commander_1.program
    .command('start')
    .description('start a project')
    .action(function () {
    green('--------运行项目-------');
    (0, start_1.default)('start').then(function () {
        green('-------✅  ✅运行完成-------');
    });
});
/* build project */
commander_1.program
    .command('build')
    .description('build a project')
    .action(function () {
    green('--------构建项目-------');
    (0, start_1.default)('build').then(function () {
        green('-------✅  ✅构建完成-------');
    });
});
commander_1.program.parse(process.argv);
