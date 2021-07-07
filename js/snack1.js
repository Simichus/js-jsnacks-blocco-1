/*
1 - CHIEDO ALL'UTENTE UN NUMERO PER 5 VOLTE
2 - SOMMO I NUMERI INSERITI DALL'UTENTE
*/

var userNumber;
var sum = 0;
// var i = 0

// do {
//     userNumber = parseInt(prompt('Inserisci un numero'));
//     sum += userNumber;
//     console.log(userNumber, sum)
//     i++;
// } while (i < 5)

for (var i = 0; i < 5; i++) {
    userNumber = parseInt(prompt('Inserisci un numero'));
    sum += userNumber;
    console.log(userNumber, sum);
}

console.log(sum);

