	var element = document.querySelector('div' or 'div.class h1');
	var element = document.getElementById ('counter');

var x = 1;
	element.addEventListener('click', updateNumber);


	var element = document.getElementsByTagName('h1');
	var element = document.getElementsByClassName('.class');
	var element = document.querySelectorAll('span');

var x = 1;
	// element[0].addEventListener('click', updateNumber); нужно указать номер элемента



	function updateNumber() {
		counter.textContent = "Kliknięto :" + x + " razy";
		return x=x+1;
	}