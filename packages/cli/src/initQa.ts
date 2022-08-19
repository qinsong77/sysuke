import inquirer from 'inquirer';
import question from './question';
import { QuestionConfig } from "./type";
function initQa() {
  return new Promise<QuestionConfig>((resolve) => {
    inquirer.prompt(question as any).then((res) => {
      resolve(res as QuestionConfig);
    });
  });
}

export default initQa;
