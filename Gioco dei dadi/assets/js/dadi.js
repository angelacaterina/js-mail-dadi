var btnGioca = document.getElementById('btn_gioca');

// 1. Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
btnGioca.addEventListener('click', function(){
  // Variabili giocatori
  var user = [1,2,3,4,5,6];
  var pc = [1,2,3,4,5,6];
  var resultUser, resultPc;
  // 1. Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
  resultUser = Math.floor((Math.random() * user.length) + 1);
  resultPc = Math.floor((Math.random() * pc.length) + 1);

  console.log(resultUser, resultPc);

  document.getElementById('player_1').innerHTML= resultUser;
  document.getElementById('player_2').innerHTML= resultPc;

  // 2. Stabilire il vincitore, in base a chi fa il punteggio più alto.
  document.getElementById('content').style.background = "radial-gradient(circle, rgba(115,195,246,1) 0%, rgba(6,114,131,1) 100%)";

  if(resultUser > resultPc){
    console.log("hai vinto");
    document.getElementById('result').innerHTML= "player 1 is the winner";
    document.getElementById('content').style.background = "radial-gradient(circle, rgba(115,246,146,1) 0%, rgba(47,131,6,1) 100%)";
  }else if (resultUser === resultPc) {
    console.log("un altro tentativo");
    document.getElementById('result').innerHTML= "pareggio";
  }else{
    console.log("hai perso");
    document.getElementById('result').innerHTML= "player 2 is the winner";
    document.getElementById('content').style.background = "radial-gradient(circle, rgba(214,65,65,1) 0%, rgba(110,0,0,1) 100%)";
  }

});
