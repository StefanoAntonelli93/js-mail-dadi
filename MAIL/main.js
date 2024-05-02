'use strict';

console.log('tutto ok');



// Chiedi all’utente la sua email,
// // - chiedo all'utente la sua email e la salvo in una varibile prompt (emailUser)

const emailUser = prompt('inserisci qui la tua email');
console.log(emailUser);

// controlla che sia nella lista di chi può accedere,
// // - creo una lista di mail dove aggiungo con array tutte la mail di chi può accedere (emailList)

const emailList = ["email1@gmail.com" , "email2@gmail.com" , "email3@gmail.com" , "email4@gmail.com", "email5@gmail.com", "email6@gmail.com", "email7@gmail.com", "email8@gmail.com", "email9@gmail.com", "email10@gmail.com", "email11@gmail.com"];

console.log(emailList.length);
console.log(emailList);

// // - controllo se la mail dell'utente e nell'array utilizzando ciclo for

let isValidEmail = false;
for (let i = 0; i < emailList.length; i++) {
    // check se email e presente
    if(emailUser === emailList[i]) {
        isValidEmail = true;
        break;
    }
}


// stampa un messaggio appropriato sull’esito del controllo. fuori da ciclo for altrimenti stamperà n volte l'esito (non necessario)

if (isValidEmail === true) {
   console.log('la mail è presente');
   alert('accesso autorizzato');
} else {
    console.log('la mail non è presente');
    alert('la mail non è presente');
}

// // - stampo in console 
//     se la mail dell'utente è nella lista email allora aggiungo esito positivo
//     altrimenti aggiungo esito negativo



