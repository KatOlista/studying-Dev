var myList = [11,21,13,34,10,12];
console.log(myList[4]);

//---
for(let i in myList){
	console.log(myList[i])
}

// to ze samoje 4erez while
var x = 0;
while (x < myList.length) {
	console.log(myList[x])
	x++
}
//while zanimajet bolsze strok, poetomu ispolzujem jego dla matemati4eskih vy4islenij
//-----

for(let i = 0; i < myList.lendth; i++){
	console.log(myList[i])
}

var x = 0;
var n = 0;
while (n < 3) {
	n++;
	x += n;
	console.log('x=', +x, 'n=',+n)
}




























 console.log('%c KatOlista^^!', 'color: white; background-color: black; font-size: 30px; margin: 20px auto; border: 2px solid yellow;');
 //ikonki dla konsoli: https://apps.timwhitlock.info/emoji/tables/unicode