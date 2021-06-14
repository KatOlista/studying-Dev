
var element = document.querySelector('div.circle');
var x = ['-415px', '-352px', '-332px', '-272px', '-257px', '-162px', '-287px', '-300px', '-373px', '-388px', '-473px', '-415px'];
var y = ['295px', '530px', '465px', '675px', '625px', '980px', '770px', '815px', '658px', '700px', '562px', '295px'];


element.style.marginTop = x;
element.style.marginLeft = y;
var numberOfElementsX = x.length;
var numberOfElementsY = y.length;
console.log(numberOfElementsX, numberOfElementsY);




 for (let name of element.classList) {
      console.log(name); 
    }

element.addEventListener('mouseover', rollForvard);

element.addEventListener('mouseout', rollBackvard);

function rollForvard() {

	element.classList.add("life");

// 	for (let i = 0; i <= numberOfElementsX; i++);
// 	for (let i = 0; i <= numberOfElementsY; i++);
// element.animate({
// "margin-left" : "530px",
// "margin-top" : "-352px"
// }, 4000);


// 		if (x[i] => x[i+1], y[i] => y[i+1]) {
// element.style.marginLeft += y[i] + (y[i+1] - y[i])/10;
// element.style.marginTop += x[i] + (x[i+1] - x[i])/10;
return console.log('объект rollForvard', element.style.marginTop, element.style.marginLeft );
}
		
// }


function rollBackvard() {

	element.classList.add(deth);
// 	for (let i = 0; i <= numberOfElementsX; i++)
// 		for (let i = 0; i <= numberOfElementsY; i++)
// 		if (x[i] <= x[i+1], y[i] <= y[i+1]) {
// element.style.marginLeft += y[i] - (y[i+1] - y[i])/10;
// element.style.marginTop += x[i] - (x[i+1] - x[i])/10;
// }
return console.log('объект rollBackvard', element.style.marginTop, element.style.marginLeft);
		
}















































 console.log('%c KatOlista^^!', 'color: white; background-color: black; font-size: 30px; margin: 20px auto; border: 2px solid yellow;');
 //ikonki dla konsoli: https://apps.timwhitlock.info/emoji/tables/unicode