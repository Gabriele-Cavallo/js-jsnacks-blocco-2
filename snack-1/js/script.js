// - L'utente inserisce un numero nel prompt, se è pari stampa il numero,
// se è dispari stampa il numero successivo

// 1 - Chiedo al numero all'utente
// let userNumber = parseInt(prompt('Dimmi un numero'));
// console.log('user-number' , userNumber);
// // 2 - Se il numero è pari stampo il numero
//     // - altrimenti stampo il numero successivo a quello inserito
// if (userNumber % 2 === 0){
//     console.log('user-number-even' , userNumber);
// }else{
//     console.log('user-number-odd' , userNumber + 1);
// }

// 2 - Metodo

let userNumber = parseInt(prompt('Dimmi un numero'));
if (userNumber % 2 === 0){
    console.log('user-number-even' , userNumber);
}else{
    userNumber++;
    console.log('user-number-odd' , userNumber);
}