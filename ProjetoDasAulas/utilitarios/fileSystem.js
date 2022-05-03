const fs = require('fs');

//leitura assíncrona
fs.readFile('./.testFS.txt', {encoding: 'utf-8', flag: 'r'}, function (err, data){
    if (!err){
        console.log(data)
    }
})
/* 
//para a leiura síncrona usar readFileSync
const data = fs.readFileSync('./tmp.txt', {encoding: 'utf-8', flag: 'r'})
console.log(data)
*/

console.log("teste de execução")

