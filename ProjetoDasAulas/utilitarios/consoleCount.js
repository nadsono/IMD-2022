/*const x = 1;
const y = 2;
const z = 3;            //so é considerado o conteudo estritamente identico, para contar como repetição 
console.count(
  'The value of x is ' + x + ' and has been checked .. how many times?'
);
console.count(
  'The value of x is ' + x + ' and has been checked .. how many times?'
);
console.count(
  'The value of y is ' + y + ' and has been checked .. how many times?'
); */

const oranges = ['orange', 'lemon', 'orange', 'lemon']; //exemplo com ordem aleatoria
const apples = ['just one apple'];

oranges.forEach(fruit => {
  console.count(fruit);     //impime o conteudo do parametro e quantas vezes o mesmo conteudo se repete
});                         //independente da ordem
apples.forEach(fruit => {
  console.count(fruit);
});

console.countReset('lemon'); //reatribui '0' ao console.count para esse determinado conteudo;

oranges.forEach(fruit => {
  console.count(fruit);
});