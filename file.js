
let nome = prompt("Inserisci il tuo nome");  // restituisce una Stringa o Null
let cognome = prompt("inserisci il tuo cognome"); // restituisce una Stringa o Null
let colore = prompt("inserisci un colore"); // restituisce una Stringa o Null
let randomNum = (Math.random()) * 10; //restituisce un numero base 10
let intRandomNumber = Math.round(randomNum);//restituisce un numero arrotondato

let mostraPw = "La tua password generata è: " + nome + cognome + colore + intRandomNumber;
console.log(mostraPw);
document.write(mostraPw);






