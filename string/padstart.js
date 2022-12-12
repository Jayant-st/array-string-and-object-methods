var text = "5";
console.log(text.padStart(10));//        5
var padded = text.padStart(4,".");
console.log(padded);//...5
text="12"
console.log(text.padStart(6,"abcdef"));//abcd12

var number = '9876543210';
var ab = number.slice(-3);
var mn = ab.padStart(number.length, '*');

console.log(mn);//*******210
