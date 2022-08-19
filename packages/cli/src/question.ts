import { Question } from 'inquirer';
const question: Question = [
  {
    name: 'conf',
    type: 'confirm',
    message: '是否创建新的项目？',
  },
  {
    name: 'name',
    message: '请输入项目名称？',
    when: (res: any) => Boolean(res.conf),
  },
  {
    name: 'author',
    message: '请输入作者？',
    when: (res: any) => Boolean(res.conf),
  },
];

export default question;
