const array1 = [1, 30, 39, 29, 30, 13];

console.log(array1.indexOf(30));
console.log(array1.indexOf(30,3));
console.log(array1.indexOf(40));
console.log(array1.indexOf(39,-4));

const arr2 = [];
const array2 = ["a", "b", "a", "c", "a", "d"];
const el = "a";
let idx = array2.indexOf(el);
while (idx !== -1) {
  arr2.push(idx);
  idx = array2.indexOf(el, idx + 1);
}
console.log(arr2);
