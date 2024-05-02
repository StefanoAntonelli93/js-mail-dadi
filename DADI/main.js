'use strict';

// Gioco dei dadi

console.log('ok');

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

// // - definisco una variabile con un valore randomico da 1 a 6 per il giocatore (playerNumber) 
const playerNumber = Number(Math.floor(Math.random() * 6) + 1);
console.log('il giocatore ha fatto:' , playerNumber );

// // - definisco una variabile con un valore randomico da 1 a 6 per il pc (pcNumber) 
const pcNumber = Number(Math.floor(Math.random() * 6) + 1);
console.log('il computer ha fatto:' , pcNumber );

// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// // SE numero giocatore è maggiore di numero pc 
if (playerNumber > pcNumber){
    //     -allora giocatore vince
    console.log('il giocatore ha vinto');
    
} else if (pcNumber > playerNumber){
    console.log('il computer ha vinto'); //vince il pc
} else{ 
    console.log('pareggio'); //pareggio
}



    
