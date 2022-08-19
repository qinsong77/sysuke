"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* 启动项目 */
var child_process_1 = __importDefault(require("child_process"));
var fs_1 = __importDefault(require("fs"));
var chalk = __importStar(require("chalk"));
var currentPath = process.cwd() + '/node_modules/sysuke-react-webpack-plugin';
var start = function (type) {
    return new Promise(function (resolve, reject) {
        fs_1.default.access(currentPath, function (ext) {
            if (ext) {
                var children_1 = child_process_1.default.fork(currentPath + '/index.js');
                children_1.on('message', function (message) {
                    try {
                        var msg = JSON.parse(message);
                        if (msg.type === 'end') {
                            children_1.kill();
                            resolve('success');
                        }
                        else if (msg.type === 'error') {
                            children_1.kill();
                            reject();
                        }
                    }
                    catch (e) {
                        children_1.kill();
                        reject();
                    }
                });
                children_1.send(JSON.stringify({
                    cwdPath: process.cwd(),
                    type: type || 'build',
                }));
            }
            else {
                console.log(chalk.red('sysuke-react-webpack-plugin does not exist , please install sysuke-react-webpack-plugin'));
            }
        });
    });
};
exports.default = start;
