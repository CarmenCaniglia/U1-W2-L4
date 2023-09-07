/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
  return l1 * l2;
};
console.log("area rettangolo", area(5, 3)); //NB: ricordati di inserire i valori da dare ai parametri per poter avviare il calcolo della funzione!

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (n1, n2) {
  if (n1 === n2) {
    return (n1 + n2) * 3;
  } else {
    return n1 + n2;
  }
};
console.log("risultato con valori diversi", crazySum(3, 6));
console.log("risultato con valori uguali ", crazySum(2, 2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (a, b) {
  if (b > 19) {
    return Math.abs(a - b) * 3;
  } else {
    return Math.abs(a - b);
  }
};
console.log("differenza assoluta tra i valori 15 e 19 è ", crazyDiff(15, 19));
console.log("nel secondo caso, invece, il risultato è ", crazyDiff(30.45, 19));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return "True";
  } else {
    return "False";
  }
};
console.log("n è compreso tra 20 e 100 ", boundary(75));
console.log("n è 400 ", boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (p) {
  if (p.startsWith("EPICODE")) {
    return p;
  } else {
    return "EPICODE" + p;
  }
};
console.log(epify("EPICODE School"));
console.log(epify(" School, buongiorno a tutti"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (n) {
  if (n <= 0) {
    return "False";
  } else if (n % 3 === 0 && n % 7 === 0) {
    return "True";
  } else {
    return "False";
  }
};
console.log(check3and7(21));
console.log(check3and7(8));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (str) {
  let splitStr = str.split("");
  let reverseArray = splitStr.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
};
console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (stringa) {};

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (str) {
  let str1 = str.slice(1);
  let str2 = str1.slice(0, str.length - 1);
  return str2;
};
console.log("prima Epicode, dopo ", cutString("Epicode"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (n) {
  const randomNum = [];
  for (let i = 0; i < n; i++) {
    randomNum.push(Math.floor(Math.random() * 10));
  }
  return randomNum;
};
console.log(giveMeRandom(5));
