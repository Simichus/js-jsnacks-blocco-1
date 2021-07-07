/*
1 - CHIEDO ALL'UTENTE DI INSERIRE UN NUMERO
2 - CONTROLLO SE IL NUMERO È PARI O DISPARI
3 - SE IL NUMERO È DISPARI AGGIUNGO 1
4 - STAMPO IL RISULTATO
*/

var userNumber;

do {
    userNumber = parseInt(prompt('Inserisci un numero'));
} while (isNaN(userNumber));


if (userNumber % 2 === 0) {
    console.log(userNumber);
} else {
    console.log(userNumber + 1);
}