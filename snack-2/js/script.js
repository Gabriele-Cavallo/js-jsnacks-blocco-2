// - L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// 1 - Chiedo all'utente due parole
let userWord = prompt('Dimmi una parola');
let userWord2 = prompt('Dimmi una parola');
// 2 - Confronto la lunghezza delle due parole
    // - stampo prima la parola più corta e poi la più lunga
if(userWord.length < userWord2){
    console.log('user-word-short' , userWord);
    console.log('user-word-long' , userWord2);
}else{
    console.log('user-word-long' , userWord2);
    console.log('user-word-short' , userWord);
}

// Oppure