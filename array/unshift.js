var arr = [4, 5, 6];
arr.unshift(1, 2, 3);
console.log(arr);// [1, 2, 3, 4, 5, 6]
arr = [4, 5, 6];
arr.unshift(1);
arr.unshift(2);
arr.unshift(3); arr.m
console.log(arr);// [3, 2, 1, 4, 5, 6]
arr.unshift({name:'abc',age:21});
console.log(arr);
arr.unshift([1,2]);
console.log(arr);
