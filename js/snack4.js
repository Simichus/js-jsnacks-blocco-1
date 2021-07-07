/*
1 - CREO DUE LISTE DI NUMERI DI LUNGHEZZE CASUALI
2 - VERIFICO QUALE DELLE DUE LISTE È PIÙ CORTA
3 - FINCHÈ LE DUE LISTE NON HANNO UGUAL MISURA AGGIUNGO NUMERI CASUALI ALLA LISTA PIÙ CORTA
*/


var firstNumberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0];
var secondNumberList = [1, 2, 3, 4, 5, 1, 2, 3, 45, 1, 2, 3, 5];
var random;

console.log(firstNumberList.length, secondNumberList.length);

if (firstNumberList.length > secondNumberList.length) {
    while (firstNumberList.length > secondNumberList.length) {
        random = Math.floor(Math.random() * 100 + 1);
        secondNumberList.push(random);
    }
}

if (firstNumberList.length < secondNumberList.length) {
    while (firstNumberList.length < secondNumberList.length) {
        random = Math.floor(Math.random() * 100 + 1);
        firstNumberList.push(random);
    }
}

console.log(firstNumberList.length, secondNumberList.length);
console.table(firstNumberList);
console.table(secondNumberList);
