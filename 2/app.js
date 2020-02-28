//Hoisting

//Functon & Functon Expression
/* calcAge(1999);

function calcAge(year) {
	console.log(2016 - year);

}

var retirement = function (year) {
	console.log((65 - (2016 - year)));

}
retirement(1999);

//Varialbes
console.log(age);
var age = 23;

function foo() {
	console.log(age);

	var age = 65;
	console.log(age);

}

foo();
console.log(age); */

//First scoping example
/* 
var a = 'Hello ';

first();

function first() {
	var b = 'Hi ';
	second();

	function second() {
		var c = 'Hey';
		console.log(a + b + c);

	}
} */
/* 
var a = 'Hello ';
first();

function first() {
	var b = 'Hi ';
	second();
	console.log(a + b);


	function second() {
		var c = 'Hey ';
		third();
		console.log(a + b + c);

	}

}

function third() {
	var d = 'Tom';
	console.log(a + d);

}

//hello tom
//hello hi hey
//hello hi */

//This keyword

//console.log(this);

//calcAge(1985);
/* 
function calcAge(year) {
	console.log(2016 - year);
	console.log(this);
}

var john = {
	name: 'John',
	calcAge: function (year) {
		console.log(2016 - year);
		console.log(this);

	}
}

//john.calcAge(1985);

var mike = {
	name: 'Mike',
	birth: 1984
}

mike.calcAge = john.calcAge;
mike.calcAge(1999); */