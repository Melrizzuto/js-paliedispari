"use strict"
console.clear()

/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma



cose da fare:
user word : prompt inserisci parola

la funzione a cui daremo un nome deve fare:

1. girare la parola e verificare sia palindroma (creare funzione per questo)
(if word.toLowerCase === userWord console.log la parola è palindroma
else 
la parola non è palindroma.)

*/
function isPalindromaWord() {
    const userWord = prompt("Inserisci una parola:");
    
    if (userWord) {
      const reversed = reversedWord(userWord);
      if (reversed.toLowerCase() === userWord.toLowerCase()) {
        console.log("La parola è palindroma.");
      } else {
        console.log("La parola non è palindroma.");
      }
    } else {
      console.log("Inserimento non valido.");
    }
  }
  
//   isPalindromaWord() funzione da evocare

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.


cose da fare:
- prompt
- funzione ocn math.floor e math.random per generare numero
- numero pc + numero user
- funzione per pari o dispari
- condizione per decidere vincitore
*/

// dichiaro le variabili

function oddEven(){

const userChoice = prompt("Scegli 'pari' o 'dispari'.").toLowerCase();
console.log(userChoice);
const userNumber = parseInt(prompt("Scegli un numero da 1 a 5."), 10);
console.log(userNumber);
const pcNumber = getRandomNumber(1, 5);
console.log(pcNumber);

// Calcolare la somma
const sum = userNumber + pcNumber;
console.log(sum);

// Controllare se la somma è pari
const isEven = sum % 2 === 0;

// Stabilire chi ha vinto
if ((userChoice === "pari" && isEven) || (userChoice === "dispari" && !isEven)) {
    console.log("Hai vinto!");
} else {
    console.log("Hai perso!");
}

}

// oddEven() funzione da evocare 