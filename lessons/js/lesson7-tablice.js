var myList = ['HTML', 'CSS', 'JS'];
var x = 2;
var createFromString = 'devHero';

// function writeInConsole(des, el) {
// 	console.log(des)
// 	console.log(el)
// 	console.log(myList) // ili v 1 stroku: console.log(des, el, myList)
// 	if(el > 0) {
// 		console.log('Jest ok')
// 	}  // ili v 1 stroku: console.assert(el, 'element nie jest zadeklarowany')
// }
// writeInConsole('Test', 1);

//koli4estvo elementov v tablice. Jesli elementov net - nie pokazet zna4enie
myList.length; 

writeInConsole('Ilosc elementow wewnatrz tablicy', myList.length);


 //vybor elementov


writeInConsole('Wybralem 2 element z tablicy, =', myList[1]);

//dobavlajet kakoe to zna4enie k nashej tablice 

writeInConsole('Dodanie vartosci =', myList.push('React'));

//klonirovanie tablicy
var clonedList = myList.slice();
// vyvod rezultata sravnenia klona i originala
function writeInConsole(des, el){
	console.log(des, el, myList)
	if(myList!= clonedList){
		console.log(clonedList)
	}
}

//zabranie wartosci z tablicy ostatniej

writeInConsole('Zabranie wartosci =', myList.pop());

//zabranie 1 elementu
writeInConsole('Zabranie wartosci =', myList.shift());

// dodanie wartosci na poczatek
writeInConsole('Dodanie wartosci =', myList.unshift("HTML"));

//sprawdzenie numeru indexowego
writeInConsole("CSS to element index = ", myList.indexOf());

//usuwanie numeru elementu na podstawie indexu
//writeInConsole("Usuwamy css", myList.splice(myList.indexOf("CSS"), 1));

//usuwanie 2 elementow na podstawie indexu
//writeInConsole("Usuwamy css i nastepny element", myList.splice(myList.indexOf("CSS"), 2));

//Test tablicy - javlajetsa li tablicej
writeInConsole("Czy tablica jest tablica", Array.isArray(myList));

// polaczenie
writeInConsole("laczenie array", myList.join(' To inaczej '));

//stworzenie tablicy z wartosci
writeInConsole("zamiast stringa mamy =", [...createFromString]);

//Dodawanie albo zamiana elementu
writeInConsole('add', myList[4]='css');

//sortowanie
writeInConsole('Sortowanie danych', myList.sort());

//sortowanie odwrotne, od tylu
writeInConsole('Sortowanie danych od tylu', myList.reverse());

//test na istnienie obcych
writeInConsole('czy obcy jest wewnatrz =', myList.includes('CSS'));

//okreslenie typu: czy jest bulean, czy string czy numerem, czy objektem, czy ...
writeInConsole('nasza wartosc =', typeof myList);















 console.log('%c KatOlista^^!', 'color: white; background-color: black; font-size: 30px; margin: 20px auto; border: 2px solid yellow;');
 //ikonki dla konsoli: https://apps.timwhitlock.info/emoji/tables/unicode