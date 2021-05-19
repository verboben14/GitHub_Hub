/*index.js*/
"use strict";	//This says the variables should be defined

// Variables and types

var msg = "Hello JavaScript";
console.log(msg);

var resultsDiv = document.getElementById("results");
resultsDiv.innerHTML = "<p>This is from JavaScript</p>";

console.log("msg is " + typeof(msg));
console.log("resultsDiv is " + typeof(results));

var none;
console.log("none is " + typeof(none));

var aNumber = 10;
console.log("aNumber is " + typeof(aNumber));

var trueFalse = true;
console.log("trueFalse is " + typeof(trueFalse));

//noneexistent = "this shouldn't work.";


// Conditionals

if (none == undefined) {
	console.log("no type");
}
else {
	console.log("has type");
}

if (none == false) {
	console.log("none is false");
}
else {
	console.log("it does not work this way");
}

if (!none) {
	console.log("none is not true");
}

if (aNumber == 10) {
	console.log("10 is 10");
}

if (aNumber == "10") {
	console.log("10 is 10");
}

if (aNumber === "10") {
	console.log("10 is exactly 10");
}
else {
	console.log("this way 10 is not 10");
}


// Functions

/* This is overriden by the next function
function showMsg(msg) {
	console.log("showMsg: " + msg);
}*/

function showMsg(msg, more) {
	if (more) {
		console.log("showMsg+: " + msg + more);
	}
	else {
		console.log("showMsg: " + msg);
	}
}

showMsg("some information");
showMsg("some information", " and even more");

var showIt = function (msg) {
	console.log(msg);
}

showIt("Some message");


// Inline Callback function

function showItThen(msg, callback) {
	showIt(msg);
	callback();
}

showItThen("showItThen called", function () {
	console.log("callback called");
});


// Scopes

var inGlobal = true;

if (window.inGlobal) {
	console.log("Global variables are created in object window.");
}

function testMe() {
	console.log("testMe(): " + inGlobal);
	
	var someMsg = "some Message";
	console.log("testMe(): " + someMsg);
	
	showItThen("with Closure", function () {
		showIt("testMe With Closure(): " + someMsg);
	});
}

/* This is not defined in this scope:
console.log("global: " + someMsg);*/

testMe();


// Objects

var result = {
	name: "jQuery",
	language: "JavaScript",
	score: 3.5,
	showLog: function () {
		
	},
	owner: {
		login: "vbence",
		id: 123456
	}
};

console.log(result.name);

result.phoneNumber = "123-456-7890";
console.log(result.phoneNumber);


// Arrays

var results = [{
	name: "java",
	language: "JavaScript",
	score: 5.5,
	showLog: function () {
		
	},
	owner: {
		login: "vbence",
		id: 123456
	}
}, {
	name: "jQuery UI",
	language: "JavaScript",
	score: 8.5,
	showLog: function () {
		
	},
	owner: {
		login: "vbence",
		id: 123456
	}
}];
results.push(result);
results.push({
	name: "dummy result"
});

console.log(results.length);
console.log(results[0].name);


// Looping

console.log("Score is more than 4");
for (var i = 0; i < results.length; i++) {
	var currentResult = results[i];
	if (currentResult.score < 4){
		break; // ending the for iteration here and quitting the loop
	}
	console.log(currentResult.name);
}

console.log("Score is less than 4");
for (var i = 0; i < results.length; i++) {
	var currentResult = results[i];
	if (currentResult.score > 4){
		continue; // ending the current execution here and going to the next item
	}
	console.log(currentResult.name);
}