/*
1 - CREO UNA LISTA DI NOMI E UNA LISTA DI COGNOMI
2 - CREO UNA LISTA DI INVITATI VUOTA
3 - FINTANTO CHE LA LISTA DI INVITATI NON COMPRENDE 3 PERSONE AGGIUNGO UN INVITATO
3.1 - SE L'INVITATO è GIÀ PRESENTE NELLA LISTA RIPETO L'OPERAZIONE
*/



var firstNames = ['Luca', 'Paolo', 'Michele', 'Francesco', 'Lorenzo', 'Ludovico'];
var lastNames = ['Bilardo', 'Rossi', 'Boncompagni', 'Bianchi', 'Toscano'];

var firstNameRandomizer;
var lastNameRandomizer;

var invited;
var invitedList = [];


while (invitedList.length < 3) {
    firstNameRandomizer = Math.floor(Math.random() * firstNames.length);
    lastNameRandomizer = Math.floor(Math.random() * lastNames.length);

    console.log(firstNames[firstNameRandomizer], lastNames[lastNameRandomizer]);
    console.log(firstNameRandomizer, lastNameRandomizer);
    invited = firstNames[firstNameRandomizer] + ' ' + lastNames[lastNameRandomizer]

    if (!invitedList.includes(invited)) {
        invitedList.push(invited);
        console.log(invited);
    }
    console.log('Nome invitato:', firstNames[firstNameRandomizer], lastNames[lastNameRandomizer]);
}

console.table(invitedList);