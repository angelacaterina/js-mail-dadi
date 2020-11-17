var userName = prompt("what's your name?");
// 1. Chiedi all’utente la sua email,
var emailList = ["pluto@gmail.com", "gordon@gmail.com","sally.90@gmail.com", "renzo@gmail.com"];

var userEmail = prompt("enter your email");
// console.log(userEmail);

var elEmail = userEmail;
// 2. controlla che sia nella lista di chi può accedere,
// 3. stampa un messaggio appropriato sull’esito del controllo.

for(var i=0; i < emailList.length; i++){
  if(emailList[i] == elEmail){
    console.log("email vadila");
    document.getElementById('benvenuto').innerHTML= "BENVENUTO " + userName;
  }else {
    console.log("email non valida");
    document.getElementById('valisazione_email').innerHTML= "email non valida";
  }
  break;
}
