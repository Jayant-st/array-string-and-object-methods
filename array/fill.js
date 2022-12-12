var arr = [1, 2, 3, 4];
arr.fill(2);
console.log(arr);
arr = [1, 2, 3, 4];
console.log(arr.fill(5,2));
arr = [1, 2, 3, 4,5];
console.log(arr.fill(NaN,1,3));
arr = [1, 2, 3, 4,5];
console.log(arr.fill(5,5,6));

const ab = Array(5).fill("girl", 2);
for(let a of ab){
  console.log(a);
}

const arr1 = Array(3).fill({});
arr1[0].A = "hello world";
console.log(arr1); 
