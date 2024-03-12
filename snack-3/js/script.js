// - Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.


// 1 - Creo due div con due id diversi
        // - assegno ad uno il colore del testo rosso e all'altro il colore del testo verde
        let redText = document.querySelector('#red');
        console.log('red' , redText);
        redText.style.color = "red";
        let greenText = document.querySelector('#green');
        console.log('green' , greenText);
        greenText.style.color = "green";
// 2 - Creo un array di numeri
        let numbers = [];
        for (let i = 0; i < 10; i++) {
            let number = Math.floor(Math.random() * 10) + 1;
            numbers.push(number);
        }
        console.log('array' , numbers);
        // - quelli pari li metto nell'id rosso
        // - quelli dispari li metto nell'id verde