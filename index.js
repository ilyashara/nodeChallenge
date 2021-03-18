var cowsay = require("cowsay");
const myInformation = require('./information.js');
myInformation();

console.log(cowsay.say({
	text : message,
	e : "oO",
	T : "U "
}));

console.log(cowsay.think({
	text : message,
	e : "oO",
	T : "U "
}));