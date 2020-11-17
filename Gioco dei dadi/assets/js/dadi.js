// Variabili giocatori
var user = [1,2,3,4,5,6];
var pc = [1,2,3,4,5,6];
var resultUser, resultPc;
// 1. Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
resultUser = Math.floor((Math.random() * user.length) + 1);
resultPc = Math.floor((Math.random() * pc.length) + 1);

console.log(resultUser, resultPc);

document.getElementById('giocatore_1').innerHTML= resultUser;
document.getElementById('giocatore_2').innerHTML= resultPc;

// 2. Stabilire il vincitore, in base a chi fa il punteggio più alto.
if(resultUser > resultPc){
  console.log("Win");
}else if (resultUser === resultPc) {
  console.log("un altro tentativo");
}else{
  console.log("hai perso");
}
