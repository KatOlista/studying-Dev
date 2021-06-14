

// boolean
// null
// undefined
// number
// string
// symbol
// object


//___________________________________
// null
// undefined
var el = 0 === 0 ? null : undefined;
var el2 = 0 === 1 ? null : undefined;
console.log(el, isNaN(el))
console.log(el2, isNaN(el2)) 
// isNaN - proveriajet javlajetsa li nomerom

console.log(el, el+1)
console.log(el2, el2+1)

console.log(typeof el)
//______________________________________
// number

var a = 0;
console.log(a, typeof a, isNaN(a))

//__________________________________________
// boolean

var b = true;
console.log(b, typeof b)

//___________________________________________
// string

var c = " To jest tekst testowy";
console.log(c, typeof c)

//____________________________________________
// symbol - unikalnoe zna4enie

//___________________________________________
// object
var d = ['asd', '0'];
console.log(d, typeof d)





































 console.log('%c KatOlista^^!', 'color: white; background-color: black; font-size: 30px; margin: 20px auto; border: 2px solid yellow;');
 //ikonki dla konsoli: https://apps.timwhitlock.info/emoji/tables/unicode