"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = __importDefault(require("inquirer"));
var question_1 = __importDefault(require("./question"));
function initQa() {
    return new Promise(function (resolve) {
        inquirer_1.default.prompt(question_1.default).then(function (res) {
            resolve(res);
        });
    });
}
exports.default = initQa;
