//Object and Prototype
/* 
var Person = function (name, birth, job) {
	this.name = name;
	this.birth = birth;
	this.job = job;
}

Person.prototype.calcAge = function () {
	//console.log(2016 - this.birth);

}

Person.prototype.lName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var mark = new Person('Mark', 1999, 'developer');
 */
//john.calcAge();
//mark.calcAge();
//console.log(john instanceof Person);

//Object.create
/* 
var personProto = {
	calcAge: function () {
		console.log(2016 - this.birth);

	}
}

var john = Object.create(personProto);
john.name = 'John';
john.birth = 1999;
john.job = 'teacher';
 */
//Primitives Vs Object
/* 
//Primitive
var a = 23;
var b = a;
a = 46;
//console.log(a);
//console.log(b);


//Object
var obj1 = {
	name: 'John',
	age: 26
}

var obj2 = obj1;
obj1.age = 30;
//console.log(obj2.age);

var age = 30;
var obj = {
	name: 'John',
	city: 'Dhaka'
}

function change(a, b) {
	a = 50;
	b.city = 'Ctg';
	console.log(a);

}
 */
/* 
change(age, obj);
//console.log(age);
//console.log(obj.city);

var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

//Passing function as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrProcess(arr,
	fn) {
	var arrRes = [];
	for (var i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calcAge(el) {
	return new Date().getFullYear() - el;
}

function isFullAge(el) {
	return el >= 18;
}

var calcAgeRes = arrProcess(years, calcAge);
var fullAge = arrProcess(calcAgeRes, isFullAge);
console.log(fullAge);

 */

//Function returning function
/* 
function interviewQuestion(job) {
	if (job === 'designer') {
		return function (name) {
			console.log(name + ' Designer!');
		}
	} else if (job === 'teacher') {
		return function (name) {
			console.log(name + ' Teacher');

		}
	} else {
		return function (name) {
			console.log(name + ' You are not a Designer or Teacher!');

		}
	}
}

var john = interviewQuestion('teacher');
john('John');
var mark = interviewQuestion('designer');
mark('mark');
interviewQuestion('Police')('Bob'); */

//IIFE
/* 
(function (name) {
	const score = Math.floor((Math.random() * 10) + 1);
	console.log(score >= 5);
})('John'); */

//CLOSURES
/* 
function calcRetirementAge(retireAge) {
	let left = 'left from retirement!';
	let update = new Date().getFullYear();
	return functi on (birth) {
		console.log(`${retireAge-(update-birth)} ${left}!`);

	}
}

var age = calcRetirementAge(65);
age(1999);
 */
/* 
function interviewQuestion(job) {
	return name => {
		if (job === 'designer') {
			console.log(name + ' Designer!');
		} else if (job === 'teacher') {
			console.log(name + ' Teacher');
		} else {
			console.log(name + ' OOPS! you are not a Designer or a Teacher!');
		}
	}
}

interviewQuestion('teacher')('John');
interviewQuestion('designer')('Mike');
interviewQuestion('cop')('Bob'); */

//Bind(),Call(),Apply()
/* 
var john = {
	name: 'John',
	presentation: function (formal) {
		if (formal === 'morning') {
			console.log(this.name + ' Good Morning!');

		} else if (formal === 'noon') {
			console.log(this.name + ' Good Afternoon!');

		} else if (formal === 'night') {
			console.log(this.name + ' Good Night!');

		} else {
			console.log(this.name + ' What are the times now!');

		}
	}
}

var emily = {
	name: 'Emily'
}

//john.presentation.call(emily, 'morning');
//john.presentation('night');

var emily = john.presentation.bind(emily);
emily('night'); */

var years = [1990, 1965, 1937, 2005, 1998];

function arrProcess(arr,
	fn) {
	var arrRes = [];
	for (var i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calcAge(el) {
	return new Date().getFullYear() - el;
}

function isFullAge(limit, el) {
	return el >= limit;
}

var age = arrProcess(years, calcAge);
var japan = arrProcess(age, isFullAge.bind(this, 20));
console.log(japan);