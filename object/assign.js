const t = { a: 1, b: 2 };
const s = { b: 4, c: 5 };

const r = Object.assign(t,s);

console.log(t);//Object { a: 1, b: 4, c: 5 }

console.log(r === t);//true
