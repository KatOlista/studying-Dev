	var element = document.querySelector('div');
	var counter = document.getElementById('counter');

	var x = 1;
	element.addEventListener('click', updateNumber);

	function updateNumber() {
		counter.textContent = "Kliknięto :" + x + " razy";
		return x=x+1;
	}