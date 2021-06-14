function test(e, o = null, n = 2) {
	console.log(typeof o)
	//console.log(e, o, n, e*o+n)
}

test(5);
test(56);
test();
test(7, 1);


function rest(a, b = null, c = []) {
	c.push(a)
	c.push(b)
	return c;
}

var x = rest(2, 1);
console.log(x)


function myTest1() {
	return ('funkcja test nr.1')
}

function myTest2(thing = myTest()) {
	return ('funkcja test nr.2')
}


function test2(thing = myTest1()) {
	return thing;
}

console.log(test2())







































console.log('%c KatOlista^^!', 'color: white; background-color: black; font-size: 30px; margin: 20px auto; border: 2px solid yellow;');
//ikonki dla konsoli: https://apps.timwhitlock.info/emoji/tables/unicode