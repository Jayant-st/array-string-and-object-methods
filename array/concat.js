var arrt=[];
// simple concat
const arr1 = ["a", "b", "c"];
const arr2 = ["d", "e", "f"];
console.log("arr1 and arr2 : "+arr1.concat(arr2));

// concat with multiple values
const arr3 = ["g", "h", "i"];
const arr4 = ["j", "k", "l"];
console.log("arr1, arr2, arr3 and arr4 : "+arr1.concat(arr2,arr3,arr4));

// concat direct array
console.log("with direct array :".concat(arr1.concat(arr2,["1","2"])));

// nested array
const arr5=[[3],4];
console.log("with nested array :".concat(arr1.concat(arr2,[[1,2]],arr5)));


const obj1 = { 0: 1, 1: 2, 2: 3,};
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
console.log([0].concat(obj1, obj2));

// array with null value
console.log([1, , 3].concat([4, 5]));
console.log([1, 2].concat([3, , 5]));

console.log(arr1.copyWithin(0, 3, 4));
