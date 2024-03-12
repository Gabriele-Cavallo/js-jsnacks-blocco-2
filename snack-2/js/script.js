// - L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// 1 - Chiedo all'utente due parole
// let userWord = prompt('Dimmi una parola');
// let userWord2 = prompt('Dimmi una parola');
// // 2 - Confronto la lunghezza delle due parole
//     // - stampo prima la parola più corta e poi la più lunga
// if(userWord.length < userWord2.length){
//     console.log('user-word-short' , userWord);
//     console.log('user-word-long' , userWord2);
// }else{
//     console.log('user-word-short' , userWord2);
//     console.log('user-word-long' , userWord);
// }

// Oppure

let words = [];
let userWord;
for (let i = 0; i <= 1; i++) {
    let userWord = prompt('Dimmi una parola');
    words.push(userWord);
}
console.log('array' , words);
if(words[0].length < words[words.length - 1].length){
    console.log('user-word-short' , words[0]);
    console.log('user-word-long' , words[words.length - 1]);
}else{
    console.log('user-word-short' , words[words.length - 1]);
    console.log('user-word-long' , words[0]);
}


