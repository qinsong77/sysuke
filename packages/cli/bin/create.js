"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var log_1 = __importDefault(require("./log"));
var install_1 = __importDefault(require("./install"));
var node_buffer_1 = require("node:buffer");
/* 三个变量判断异步操作 */
var fileCount = 0; /* 文件数量 */
var dirCount = 0; /* 文件夹数量 */
var flat = 0; /* readdir数量 */
var isInstall = false;
function create(res) {
    /* 创建文件 */
    log_1.default.green('------开始构建-------');
    // todo 改路径
    var sourcePath = __dirname.slice(0, -3 - 4) + 'webpack-react-base';
    console.log(sourcePath);
    log_1.default.blue('当前路径:' + process.cwd());
    /* 修改package.json*/
    revisePackageJson(res, sourcePath).then(function () {
        copy(sourcePath, process.cwd(), (0, install_1.default)());
    });
}
function copy(sourcePath, currentPath, cb) {
    flat++;
    fs_1.default.readdir(sourcePath, function (err, paths) {
        flat--;
        if (err) {
            throw err;
        }
        paths.forEach(function (path) {
            if (path !== '.git' && path !== 'package.json')
                fileCount++;
            var newSourcePath = sourcePath + '/' + path;
            var newCurrentPath = currentPath + '/' + path;
            fs_1.default.stat(newSourcePath, function (err, stat) {
                if (err) {
                    throw err;
                }
                if (stat.isFile() && path !== 'package.json') {
                    var readSteam = fs_1.default.createReadStream(newSourcePath);
                    var writeSteam = fs_1.default.createWriteStream(newCurrentPath);
                    readSteam.pipe(writeSteam);
                    log_1.default.green('创建文件：' + newCurrentPath);
                    fileCount--;
                    completeControl(cb);
                }
                else if (stat.isDirectory()) {
                    // todo
                    if (path !== '.git' &&
                        path !== 'package.json' &&
                        path !== 'node_modules' &&
                        path !== 'dist' &&
                        path !== 'image') {
                        dirCount++;
                        dirExist(newSourcePath, newCurrentPath, copy, cb);
                    }
                }
            });
        });
    });
}
function dirExist(sourcePath, currentPath, copyCallback, cb) {
    fs_1.default.access(currentPath, function (err) {
        if (err) {
            fs_1.default.mkdir(currentPath, function () {
                fileCount--;
                dirCount--;
                copyCallback(sourcePath, currentPath, cb);
                log_1.default.yellow('创建文件夹：' + currentPath);
                completeControl(cb);
            });
        }
        else {
            copyCallback(sourcePath, currentPath, cb);
        }
    });
}
function completeControl(cb) {
    if (fileCount === 0 && dirCount === 0 && flat === 0) {
        log_1.default.green('------构建完成-------');
        if (cb && !isInstall) {
            isInstall = true;
            log_1.default.blue('-----开始install-----');
            cb(function () {
                log_1.default.blue('-----完成install-----');
                /* 判断是否存在webpack  */
                runProject();
            });
        }
    }
}
function runProject() {
    try {
        var doing = (0, install_1.default)(['start']);
        doing();
    }
    catch (e) {
        log_1.default.red('自动启动失败，请手动npm start 启动项目');
    }
}
function revisePackageJson(res, sourcePath) {
    return new Promise(function (resolve) {
        fs_1.default.readFile(sourcePath + '/package.json', function (err, data) {
            if (err)
                throw err;
            var author = res.author, name = res.name;
            var json = data.toString();
            json = json.replace(/demoName/g, name.trim());
            json = json.replace(/demoAuthor/g, author.trim());
            var path = process.cwd() + '/package.json';
            fs_1.default.writeFile(path, node_buffer_1.Buffer.from(json), function () {
                log_1.default.green('创建文件：' + path);
                resolve('done');
            });
        });
    });
}
exports.default = create;
