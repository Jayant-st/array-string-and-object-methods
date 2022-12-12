const obj1 = { a: 1, b: 2 };
const obj2 = Object.create(obj1);
console.log(obj1.a);//1
console.log(obj2.a);//1
