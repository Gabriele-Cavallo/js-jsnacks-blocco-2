// BONUS:

// - Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

// 1 - Chiedo un numero a quattro cifre all'utente
let userNumber = prompt('Dimmi un numero a 4 cifre');
// console.log('user-number' , userNumber);
// 2 - Leggo le 4 cifre del numero
        // - sommo le 4 cifre
        for (let i = 0; i < userNumber.length; i++) {
            let numbers = parseInt(userNumber[i]);
            console.log('numbers' , numbers);
        }
        
