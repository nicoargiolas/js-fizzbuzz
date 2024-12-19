// Esercizio di oggi: FizzBuzz
// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”;
// Dopo esserci concentrati sul far funzionare le cose e averle testate,
// ragioniamo  sul possibile refactoring, quindi ottimizzazione possibile,
// sia del codice come performance, ma anche, se non soprattutto come leggibilità e mantenibilità.


// ______________ SVOLGIMENTO 1 _________________

// Inizio del ciclo
for (let i=1; i<=100; i++) {

    // Riconoscimento dei numeri multipli di 3 o di 5
    if ((i%3===0) || (i%5===0)) {

        // Riconoscimento dei numeri multipli sia di 3 che di 5
        if ((i%3===0) && (i%5===0)){
            // In questo caso stamperemo FizzBuzz
            console.log("FizzBuzz");

        // Riconoscimento multipli di 3
        } else if (i%3===0) {
            // In questo caso stamperemo Fizz
            console.log("Fizz");

        // Riconoscimento multipli di 5
        } else {
            // In questo caso stamperemo Buzz
            console.log("Buzz");
        }

    // Altrimenti stamperemo il numero
    } else {
        console.log(i);
    }
}


// ______________ SVOLGIMENTO 2 _______________
// Dichiarazione variabile risultato
let risultato;


// Inizio del ciclo
for (let i=1; i<=100; i++) {
    risultato = ""

    if ((i%3!==0) && (i%5!==0)) {

        risultato = `${i}`;

    } else {
        if (i%3===0) {
            risultato = "Fizz";
        }

        if (i%5===0) {
            risultato = risultato + "Buzz";
        }
    }

    console.log(risultato);
}

