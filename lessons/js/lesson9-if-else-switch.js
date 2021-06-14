var x = 2;
var text1 = "HTML";
var text2 = "CSS";
var text3 = "JavaScript";
var skills = "CSS";

if( x == 3){
	console.log(text3)
}
else if(x == 2) {
	console.log(text2)
}
else {
	console.log(text1)
}


console.log('_________________________')


function chekMyValue(el) {
	if (x < 3) {
		console.log(text1)
		if (x == 2){
			console.log(text2)
		}
		return // funkcja zamknieta i dalej nie idzie ten loop
	}
	console.log('Brak')
}
chekMyValue(x)


console.log('_________________________')

switch(skills) {
	case "HTML":
		console.log('Umiem HTML');
		break; // jesli case html zezwolony to switch sie wyloguje
	case "CSS":
		console.log('Umiem CSS');
		break;
		case "React":
		case "JavaScript":
		console.log("znam HTML, CSS, JavaScript, i React");
		break;

		default:// po umol4aniu zna4enie kotoroje vydajetsa jesli ni 1 uslovije nie vypolnieno
		console.log("Dopiero sie ucze")
}










 console.log('%c KatOlista^^!', 'color: white; background-color: black; font-size: 30px; margin: 20px auto; border: 2px solid yellow;');
 //ikonki dla konsoli: https://apps.timwhitlock.info/emoji/tables/unicode