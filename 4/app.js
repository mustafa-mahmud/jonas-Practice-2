//Lecture: let & const

//ES5
/* 
var name5 = 'John';
name5 = 'John Doe';

//ES6
const name6 = 'Jane';
let age6 = 25;
 */
//ES5
/* 
function lincence5(pass) {
	if (pass) {
		console.log(fName);

		var fName = 'John5';
	}
	console.log(fName);
} */
//lincence5(true);

//ES6
/* 
function lincence6(pass) {
	if (pass) {
		console.log(fName);

		let fName = 'John6';
		console.log(fName);
	}
}
 */
//lincence6(true);

//ES5
/* 
var i2 = 25;
for (var i2 = 0; i2 < 5; i2++) {
	console.log(i2);

}
console.log(i2);
 */
//ES6
/* let i = 25;
for (let i = 0; i < 5; i++) {
	console.log(i);

}
console.log(i); */

//IIFE

/* {
	const a = 1;
	let b = 2;
}

console.log(a);
console.log(b); */

//Strings

//ES6
/* 
let fName = 'John';
let lName = 'Smith';
const birth = 1990;

function calcAge(year) {
	return 2016 - year;
} */
/* 
const fName = 'John';
console.log(`${fName} `.repeat(6));
 */
/* 
//const years = [1999, 1965, 1982, 1937];

//ES5

var ages5 = years.map(function (el) {
	return 2016 - el;
});

console.log(ages5); */

//Arrow Functions

//ES5

//const years = [2018, 1985, 1965, 1920];

/* var ages5 = years.map(function (el) {
	return 2016 - el;
});

console.log(ages5); */

//ES6
/* 
let ages6 = years.map(el => 2016 - el);

ages6 = years.map((el, index) => `Age index: ${index + 1} & element: ${el}`);
//console.log(ages6);

ages6 = years.map((el, index) => {
	const now = new Date().getFullYear();
	const age = now - el;
	return age;
});

console.log(ages6); */

//Laxical this

//ES5
/* 
var box5 = {
	color: 'green',
	position: 1,
	clickMe: function () {
		var self = this;
		document.querySelector('.green').addEventListener('click', function () {
			var str = 'Color: ' + self.color + ' Position: ' + self.position;

			alert(str);
		});
	}
}
 */
//box5.clickMe();

//ES6
/* 
var box6 = {
	color: 'green',
	position: 1,
	clickMe: function () {
		document.querySelector('.green').addEventListener('click', () => {
			const str = `Color: ${this.color}, Position: ${this.position}`;

			alert(str);
		});
	}
}
 */
//box6.clickMe();

/* 
var box69 = {
	color: 'green',
	position: 1,
	clickMe: function () {
		document.querySelector('.green').addEventListener('click', () => {
			const str = `Color: ${this.color}, Position: ${this.position}`;

			alert(str);
		});
	}
}

console.log(box69); */
/* 
function Person(name) {
	this.name = name;
}

//ES5
Person.prototype.myFriends = function (friends) {
	var arr = friends.map(function (el) {
		return this.name + ' has friend with ' + el;
	}.bind(this));
	console.log(arr);

}

var friendsArr = ['Bob', 'Smith', 'Doe'];

//new Person('John').myFriends(friendsArr);

//ES5
Person.prototype.myFriends = function (friends) {
	let arr = friends.map(el =>
		`${this.name} has friend with ${el}`
	);
	console.log(arr);

}

new Person('Mike').myFriends(friendsArr); */

//Destructuring

//ES6
/* 
const [name, age] = ['John', 30];
console.log(name);
console.log(age);

const obj = {
	fName: 'John',
	lName: 'Smith'
}

const {
	fName,
	lName
} = obj;
console.log(fName);
console.log(lName);

const {
	fName: a,
	lName: b
} = obj;
console.log(a);
console.log(b); */
/* 
function calcRetirment(years) {
	var age = new Date().getFullYear() - years;
	return [age, 65 - age];
}

const [age, retire] = calcRetirment(1999);
console.log(age);
console.log(retire); */

//Arrays

//const boxes = document.querySelectorAll('.box');

//ES5
/* 
var boxes5 = Array.prototype.slice.call(boxes);

boxes5.forEach(function (cur) {
	cur.style.backgroundColor = 'Olive';
}); */

//ES6

/* const boxes6 = Array.from(boxes);
boxes6.forEach(cur =>
	cur.style.backgroundColor = 'red'
); */

//const boxes = document.querySelectorAll('.box');

//ES5
/* 
var boxes5 = Array.prototype.slice.call(boxes);

console.log(boxes5[0].classList.contains('greent'));

for (var i = 0; i < boxes5.length; i++) {
	if (boxes5[i].classList.contains('blue')) {
		continue;
	}
	boxes5[i].style.backgroundColor = '#1E90FF';
	boxes5[i].textContent = 'I\'m Changed!';
} */

//ES6
/* 
const boxes6 = Array.from(boxes);
for (const iterator of boxes6) {
	if (iterator.className.includes('blue')) {
		continue;
	}
	iterator.style.backgroundColor = '#1E90FF';
	iterator.textContent = 'I\'m Changed!';

} */

//ES5
/* 
var ages = [12, 17, 8, 21, 14, 11];

var isFullAge5 = ages.map(function (cur) {
	return cur >= 18;
});

//console.log(isFullAge5.indexOf(true));
//console.log(ages[isFullAge5.indexOf(true)]);

//ES6

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18)); */

//Spread Operator
/* 
function addAges(a, b, c, d) {
	return a + b + c + d;
}

//ES5
var sum = addAges(5, 10, 15, 20);

var arrAges = [5, 10, 15, 20];

var getArr5 = addAges.apply(null, arrAges);
//console.log(getArr5);

//ES6
const getArr6 = addAges(...arrAges);
//console.log(getArr6);

const arr1 = ['a', 'b', 'c'];
const arr2 = ['e', 'f', 'g'];
const arrAll = [...arr1, 'd', ...arr2];

//console.log(arrAll);

const h1 = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const allItems = [h1, ...boxes];
console.log(allItems);

allItems.forEach(cur => cur.style.color = 'red'); */

//Rest Parameters

//ES5
/* 
function isFullAge5(limit) {
	var arrAguments = Array.prototype.slice.call(arguments, 1);
	arrAguments.forEach(function (element) {
		console.log((2016 - element) >= limit);
	});
}

//isFullAge5(21, 1990, 1999, 2005, 2015);

function age6(limit, ...age) {
	let res = [];
	age.forEach(cur => res.push((2016 - cur) >= limit));
	return res;
}

const result = age6(21, 2000, 1984, 1980);
console.log(result); */

//Default parameters

//ES5
/* 
function Person5(fName, birth, nationlity) {
	this.fName = fName;
	this.birth = birth;
	this.nationlity = nationlity === undefined ? 'Bd' : nationlity;
}

var john5 = new Person5('John5', 1999, 'USA');

//ES6

function Person6(fName, birth, nationlity = 'BD') {
	this.fName = fName;
	this.birth = birth;
	this.nationlity = nationlity;
}

const john6 = new Person6('John6', 1999, 'USA');
console.log(john6); */

//Map Object
/* 
const question = new Map();
question.set('question', 'What is algoridom and data structure?');
question.set(1, 'one');
question.set(2, 'two');
question.set(3, 'three');
question.set(4, 'four');
question.set('correct', 3);
question.set(true, 'Correct Answer');
question.set(false, 'Wrong Answer, pls try again!!');
 */
/* question.delete(4);
question.clear();
console.log(question.has(4));
console.log(question); */

//Itarate map by forEach();
/* question.forEach((value, key) => {
	console.log(`Value: ${value}, Key: ${key}`);

}) */
/* 
//Destructuring map by forof
console.log(question.get('question'));

for (const [key, value] of question.entries()) {

	if (typeof key === 'number') {
		console.log(`Key: ${key}, Value: ${value}`);
	}

}

const ans = parseInt(prompt('Write the answer?'));

console.log(question.get(ans === question.get('correct'))); */
/* 
//Classes
var Person5 = function (name, birth, job) {
	this.name = name;
	this.birth = birth;
	this.job = job;
}

Person5.prototype.calcAge = function () {
	var age = new Date().getFullYear() - this.birth;
	console.log(age);

}
var john5 = new Person5('John', 1999, 'designer');
//john5.calcAge();

//ES6

class Person6 {
	constructor(name, birth, job) {
		this.name = name;
		this.birth = birth;
		this.job = job;
	}
	calcAge() {
		var age = new Date().getFullYear() - this.birth;
		console.log(age);
	}
	static hello() {
		console.log('Hello!!!');

	}
}

var john6 = new Person6('John', 1999, 'teacher');

Person6.hello(); */

//Classes and Sub-classes

class Person6 {
	constructor(name, birth, job) {
		this.name = name;
		this.birth = birth;
		this.job = job;
	}
	calcAge() {
		var age = new Date().getFullYear() - this.birth;
		console.log(age);
	}
}

class Athlete6 extends Person6 {
	constructor(name, birth, job, games, medals) {
		super(name, birth, job);
		this.games = games;
		this.medals = medals;
	}
	wonMedal() {
		this.medals++;
		console.log(this.medals);

	}
}

const john69 = new Athlete6('John', 1990, 'swimmer', 3, 1);

john69.calcAge();
john69.wonMedal();