var x = 2;
var y = 3;
var z = y * x;


	var a = document.querySelector('div');
	a.addEventListener('click', updateNumber);


	
	function updateNumber() {
		counter.textContent = "x = " + x + ", " + "z = " + z;
		return x++, z = y * x; 
		
	}