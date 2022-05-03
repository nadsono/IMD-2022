//readline import while defining interface creation 
const rl = require('readline').createInterface({ 
    input: process.stdin,
    output: process.stdout,
  });

/*
//O método question() mostra o primeiro parâmetro (uma pergunta) e aguarda a entrada do usuário.  
//Ele chama a função de retorno de chamada assim que enter é pressionado.

rl.question('Digita um numero ai: ', (answ) => {
    console.log(answ)
    rl.close(); 
}); 
*/

rl.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`);
    rl.close();
  });