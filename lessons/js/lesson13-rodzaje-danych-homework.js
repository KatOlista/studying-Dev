
var z = "SppAAAAAAAAAAAAAAAaaaaaaaaartaaaaaaaaa";
var smallLetters;
var dlugosc;
let x=1;
let y=1;
var letter;



smallLetters = z.toLowerCase();
console.log(smallLetters);

dlugosc = smallLetters.length; 
console.log('length = ', dlugosc)

 let TablicaZ = [...smallLetters];
 console.log(TablicaZ)

for (let i = 0; i <= dlugosc; i++) {
 if (TablicaZ[i]==TablicaZ[i+1]){
 x++;
//console.log('wyraz ',TablicaZ[i]);
//console.log('how many the same letters = ', x)
}
else if (x > y){
	y = x;
letter = TablicaZ[i];
}
// x = 1;
}
console.log('najdłuższy ciąg składa się z liter "', letter, ' i wynosi', y)




































 console.log('%c KatOlista^^!', 'color: white; background-color: black; font-size: 30px; margin: 20px auto; border: 2px solid yellow;');
 //ikonki dla konsoli: https://apps.timwhitlock.info/emoji/tables/unicode