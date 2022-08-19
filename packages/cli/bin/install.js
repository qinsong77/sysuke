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
var which = __importStar(require("which"));
var child_process_1 = __importDefault(require("child_process"));
function runCmd(cmd, args, fn) {
    args = args || [];
    var runner = child_process_1.default.spawn(cmd, args, {
        stdio: 'inherit',
    });
    runner.on('close', function (code) {
        if (fn) {
            fn(code);
        }
    });
}
function findPnpm() {
    var pnpms = process.platform === 'win32' ? ['pnpm.cmd'] : ['pnpm'];
    for (var i = 0; i < pnpms.length; i++) {
        try {
            which.sync(pnpms[i]);
            console.log('use pnpm: ' + pnpms[i]);
            return pnpms[i];
        }
        catch (e) { }
    }
    throw new Error('please install pnpm');
}
function install(installArg) {
    if (installArg === void 0) { installArg = ['install']; }
    var npm = findPnpm();
    return function (done) {
        runCmd(which.sync(npm), installArg, function (code) {
            done && done(code);
        });
    };
}
exports.default = install;
