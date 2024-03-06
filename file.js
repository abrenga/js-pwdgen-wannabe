
/*Preferisco usare const perchè vengono considerati valori costanti quei valori che non cambiano durante
 tutta l'esecuzione del programma */
const nome = prompt("Inserisci il tuo nome");  // restituisce una Stringa o Null
const cognome = prompt("inserisci il tuo cognome"); // restituisce una Stringa o Null
const colore = prompt("inserisci un colore"); // restituisce una Stringa o Null
const randomNum = Math.random() * 100; //restituisce un numero da 0 a 99
const intRandomNumber = Math.round(randomNum);//restituisce un numero arrotondato

const mostraPw = "La tua password generata è: " + nome + cognome + colore + intRandomNumber;
console.log(mostraPw);
document.write(mostraPw);






