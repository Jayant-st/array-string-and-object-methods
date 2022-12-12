const obj1 = { a: 1, b: 2 };

console.log(obj1.a);//1
obj1.a=4;
console.log(obj1.a);//4

Object.freeze(obj1);

obj1.a = 3;

console.log(obj1.a);//4
