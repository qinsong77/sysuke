#!/usr/bin/env node
'use strict';
import { program } from 'commander';
import create from './create';
import start from './start';
import initQa from './initQa';
import log from './log';

const { green, yellow, blue } = log;

program.version('1.0.0');

/* create a project */
program
  .command('create')
  .description('create a project ')
  .action(() =>  {
    green('👽 👽 👽 ' + '欢迎使用sysuke,轻松构建webpack5 react ts项目～🎉🎉🎉');
    initQa().then((res) => {
      if (res.conf) {
        create(res);
      } else {
        yellow("创建新项目请输入y");
      }
    });
  });

/* start  project */
program
  .command('start')
  .description('start a project')
  .action(function () {
    green('--------运行项目-------');
    start('start').then(() => {
      green('-------✅  ✅运行完成-------');
    });
  });

/* build project */
program
  .command('build')
  .description('build a project')
  .action(function () {
    green('--------构建项目-------');
    start('build').then(() => {
      green('-------✅  ✅构建完成-------');
    });
  });

program.parse(process.argv);
