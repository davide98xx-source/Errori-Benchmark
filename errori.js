/*Quale sarà l'output del codice seguente su console?
Books   (FALSE)
sale    (TRUE)
fantasy (FALSE)
['books','fantasy'] (FALSE)
*/
const book ={
    title: "Game of Thrones",
    category: "books",
    price: 20,
    category: " fantasy"
};
const book1 = book;
book1.category = "sale";
console.log(book.category);
/*La risposta esatta è sale perchè console log sta mostrando book category,
book category è uguale a book1 category poichè abbiamo detto che book1 = book,
quindi scrivendo console.log (book.category) è come dire book1.category,
che abbiamo definito come sale */


//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------


/*Quale sarà l'output del codice seguente su console?
Verrà generato un errore (true)
Stampa numeri da 1 a 10 (false)
Stampa numeri da 0 a 9 (false)
Stampa numeri da 0 a 10 (false)
*/

for (let i = 0; i <10; i++) {
}
console.log(i)

/*La risposta esatta è che genera un errore poichè la variabile i è stata dichiarata
all'interno del ciclo for, poichè il console.log si trovava all'esterno del ciclo for,
essa non trovava l'esistenza della variabile i, quindi non trovando la variante
esso genera un reference error,(un errore che avviene quando si prova ad accedere ad una
variabile che non è disponibile)inoltre le altre rosposte sono tutte false poichè i inizia
da 0 e i non è accessibile dopo la sua conclusione, per essere vere le altre risposte sarebbero
dovute essere scritte in questo modo:
1-10
for (let i = 1; i <= 10; i++) {
    console.log(i);}
0-9
for (let i = 0; i < 10; i++) {
    console.log(i);}
0-10
for (let i = 0; i <= 10; i++) {
    console.log(i);}*/



//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------



/*Considera il codice qui sotto. Quale sarà il valore di 'result'? 
16  (false)
NaN (true)
Si vewrificherà un errore (false)
4 (false)
*/

const a = 4;

function square(a) {
    return a*a
}
const result = square();

/*La lettera a () all'interno della funzione non è la stessa a dichiarata dalla costante,
la a all'interno della funzione è undefined quindi quando return a*a viene eseguito esso è
undefined * undefined, quindi non essendo un numero la const result = square (); darà
NaN poiche significa Not a Number.

Per ottenere il risultato di 16 come sperato sarebbe dovuto essere scritto in questo modo.

const a = 4;
function square(a) {
    return a * a;
}
const result = square(a);
*/



//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------


/* Quale è il metodo corretto per stampare il name di ogni oggetto nel seguente array?
console.log(users.name)  (false)
console.log(users[length].name)  (false)
console.log(users.[name])  (false)
un ciclo for contenente console.log(users[i].name) (true)
*/

const users = [
{
    name: "Jhon",
    surname: "Rambo",
},
{
    name: "Arnold",
    surname: "schwarzenegger",
},
{
    name: "Chuck",
    surname: "Norris",
},
]

/* è vera l'uso del ciclo for poichè [i] avrebbe avuto il valore di ogni idice all'interno
dell'array users quindi dicendo user[i].name stai prendendo gli indici di users con la
propietà name.
il ciclo for è:
for (let i = 0; i < users.length; i++) {
    console.log(users[i].name);}
*/


//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------



/*Quale sarà il risultato del codice, in console?
undefied (true)
[25,20] (false)
25      (false)
20      (false)
*/

const user = [
    {name: "John", age: 25},
    {name: "Jack", age: 20}
];
console.log(user.age);

/*user è un array di oggetti, il console.log di user.age non trova la propietà age poichè
un array contiene i suoi oggetti tramite i numeri dagli indici [0,1,2,...] quindi non
trovando la propietà essa è undefied.
per avere i risultati delle altre risposte sarebbe stato necessario scrivere.
25-20
console.log([user[0].age, user[1].age]); oppure console.log(user.map(user => user.age));
25
console.log(user[0].age);
20
console.log(user[1].age);
*/


//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------


/*Quale sarà il risultato del codice, in console?
true (true)
false (false)
Verrà generato un errore (false)
Nella console non verrà generato nulla (false)
*/

let b = 10;
let c = 5;

if (b = c){
    console.log("true");
}
else{
    console.log("false");
}

/* La risposta è vera poiche all'interno dell'if quando viene scritto b = c viene
assegnato a b lo stesso valore di c, non è una comparazione poiche non è ne == ne ===.
quindi l'if dice b ha il valore di c, mostra in console true.
*/


//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------


/*Qual è il risultato del codice di seguito, in console?
Hello, world (false)
Verra generato un errore (false)
Hello (false)
Hello, world undefined (true)
*/

const myFunction = (firstParameter, secondParameter) => {
   console.log(`${firstParameter} ${secondParameter}`)
}
myFunction("Hello, world")

/* myFunction("Hello, world") passa soltanto il valore di firstParameter poichè la virgola
si trova all'interno delle doppie virgolette quindi il parameteo di secondParameter diventa
quello di default, in questo caso undefined.
Per avere il risultato di Hello, world andave scritto:
myFunction("Hello", "world")
*/


//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------


/*Come posso recuperare il contenuto di questo campo input?
inputField.value (true)
inputField.innerText (false)
inputField.innerHTML (false)
inputField.content (false)
*/

let inputField = document.getElementById('my-input-field')

/*il document rappresenta la pagina HTML, il getElementById va a prendere ID dell'elemento
che all'interno dell'HTML ha ciò che è scritto tra parentesi, viene usato .value poichè esso
restituisce il valore all'interno del campo input, mentre .innerText viene usato solo per testo
e non restituisce i tag, .innerHTML restituisce il testo compreso di tag ma può comportare
problemi di sicurezza, .content non è una propietà per testo ed è di solito utilizzata per 
accedere al contenuto di un template
*/


//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------



/*Qual è il risultato del codice di seguito, in console?
i'm foo (false)
Non verrà visualizzato nulla (true)
*/

function foo() {
    console.log ("i'm foo");
}

/*La funzione è stata solo definita non è mai stata eseguita,
per essere eseguita sarebbe stato necessario scrivere dopo le parentesi
foo();
*/


//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------




/*Quale sarà l'output del codice seguente su console?
last:3 length:4 (false)
last:3 length:3 (false)
last:1,2,3 length:1 (true)
last:0 length:1 (false)
*/

const arr1 = [0];
const arr2 = [1, 2, 3];
arr1.push(arr2);
console.log("last: " + arr1.pop() + "length: " + arr1.length);

/*Quando arr1 esegue push(arr2) esso diventa un array con due elementi [0 che corrisponde a 0]
e [1 che corrisponde a 1[0], 2[1], 3[2]], quando viene eseguito il pop esso rimuove l'ultimo elemento
dell'array, restituendo solo il contenuto rendendolo [0 che corrisponde a 1, 2, 3], mentre la
length dell'array corrisponde ad un singolo elemento ovvero [0], quindi la console mostrerà
last = 1, 2, 3 lenght = 1 poichè [0] 
*/


//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------



/*Quale sarà l'output del codice seguente?
undefined (true)
3 (false)
Si verificherà un errore (false)
null (false)
*/

const A = [1, 2, 3];
console.log(a[6]);

/*La console log cerca di accedere all'idice di A cercando il settimo elemento della sua lunghezza,
ma da undefined poichè l'accesso ad un indice di un array non esistente genera undefined.
*/



//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------


/*Il metodo getElementsByClassName ritornerà sempre una lista, 
anche quando non vengono trovati elementi con la classe specificata.
vero (true)
falso (false)
*/

/* getElementsByClassName restituisce sempre una HTMLCollection anche quando non sono presenti elementi,
in HTML con quella classe, in quel caso esso restituirà HTMLCollection []
*/