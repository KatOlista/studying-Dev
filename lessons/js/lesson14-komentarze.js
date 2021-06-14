
var z = "SpAAAAAAAAAAAAAAAaaaaaaaaartaaaaaaaaa";


var r = z.toLowerCase();
console.log(r)
console.log('length = ', r.length)


// let TablicaR = [...r];
// console.log(TablicaR)



// function writeInConsole(des, el) {
// 	console.log(des, el, r)
// 	if(el > 0) {
// 		console.log('Jest ok')
// 	}
// }

// let lengths = [...r].map(item => item.length);
// console.log(lengths)
//  function NumberOfLetters() {
 
//  	return console.log()
// }


arr.forEach(function(a, i, array) {
  // ... делать что-то с item
});




let results = arr.filter(function(item, index, array) {
  // если true - элемент добавляется к результату, и перебор продолжается
  // возвращается пустой массив в случае, если ничего не найдено
});let someUsers = users.filter(item => item.id < 3);
alert(someUsers.length); // 2







function unique(arr) {
let collection = [];
arr.forEach(element => {
if (collection.indexOf(element) == -1) {
collection.push(element);
}
});
return collection;
}





let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

alert( unique(strings) );



let result = [...r].reduce((sum, lengths) => sum + lengths, 0);
console.log(result); 



console.log('jest a = ', [...r].includes('a') )
console.log('index a = ', [...r].indexOf('a') )
//test na istnienie obcych
//writeInConsole('czy obcy jest wewnatrz =', myList.includes('CSS'));

//sprawdzenie numeru indexowego
//

//Dodawanie albo zamiana elementu
//writeInConsole('add', myList[4]='css');








spr(text){
var tekst2 = tekst.toUpperCase();
var array = [...tekst2];
var d = array.length;
let naj =1;
let akt=1;
let znak;
for (let i = 0; i < d; i++) {
if (array[i]==array[i+1]){
akt++;
console.log('wyraz ',array[i], array[i+1]);
console.log(akt)
}
else {if(akt>naj){
naj=akt
znak= array[i]
}
akt=1
}
}
console.log('długość ciągu wynosi: ',d, naj)
console.log('najdłuższy ciąg składa się z liter "',znak, '" i wynosi',naj)



























 console.log('%c KatOlista^^!', 'color: white; background-color: black; font-size: 30px; margin: 20px auto; border: 2px solid yellow;');
 //ikonki dla konsoli: https://apps.timwhitlock.info/emoji/tables/unicode