/*
    O Inquirer.js permite que você faça muitas coisas, como fazer várias opções,
    ter botões de opção, confirmações e muito mais. TUDO ATRAVES DE CLI. (linha de comando no prompt)

    Antes de usar deve-se instalar a dependencia do pacote com -> npm install inquirer
    Já vem no pacote todos aqueles essenciais do node

    Documentação para melhorar o movimento -> https://github.com/SBoudrias/Inquirer.js
 */

const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What's your name?",
    },
];

inquirer.prompt(questions).then(answers => {
    console.log(`Hi ${answers.name}!`);
});
