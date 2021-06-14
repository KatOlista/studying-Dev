var myToDo = [];
var x1 = 'Love';
var x2 = 'Sex';
var x3 = 'Rok'
var x4 = '&';
var x5 = 'Roll';


function writeInConsole(des, el) {
console.log(des, el, myToDo)
}

writeInConsole('Dodanie vartosci =', myToDo.push(x1), myToDo.push(x2), myToDo.push(x3), myToDo.push(x4), myToDo.push(x5));

 

html = '<div><ul>';
myToDo.forEach(function(item, i, arr) {
  html += '<li>'+item+'</li>';
});
html += '</ul>'

document.write(html);




















 console.log('%c KatOlista^^!', 'color: white; background-color: black; font-size: 30px; margin: 20px auto; border: 2px solid yellow;');
 //ikonki dla konsoli: https://apps.timwhitlock.info/emoji/tables/unicode