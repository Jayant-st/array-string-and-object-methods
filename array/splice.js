const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);
months.splice(4, 1, 'May');
console.log(months);

const month1 = ['Jan','feb', 'March', 'April', 'June'];
month1.splice(4,0,'May');
console.log(month1);

const number = [1,2,3,6];
number.splice(1,3,4);
console.log(number);//[1,4]
const number1 = [1,2,3,6];
number1.splice(1,-1,4);
console.log(number1);//[1,4,2,3,6]
const number2 = [1,2,3,6];
number2.splice(2,1);
console.log(number2);//[1,2,6]
number2.splice(2,0,3,4,5); //add 3,4,5
console.log(number2);//[1,2,3,4,5,6]
number2.splice(3);//remove 4,5,6
console.log(number2);//[1,2,3]
