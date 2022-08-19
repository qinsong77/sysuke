"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var question = [
    {
        name: 'conf',
        type: 'confirm',
        message: '是否创建新的项目？',
    },
    {
        name: 'name',
        message: '请输入项目名称？',
        when: function (res) { return Boolean(res.conf); },
    },
    {
        name: 'author',
        message: '请输入作者？',
        when: function (res) { return Boolean(res.conf); },
    },
];
exports.default = question;
