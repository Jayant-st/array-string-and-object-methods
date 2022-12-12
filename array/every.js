 const array1 = [1, 30, 39, 29, 10, 13];
const r1=array1.every(function(element){
  return element<40;
});
console.log(r1+" "+typeof r1);

console.log(array1.every(function(element){
  return element<40;
}));
console.log([1,3].every( function(x) { return x !== undefined}));
console.log([2, , 2].every(function(x){ return x === 2})); // true not read empty value

// run only two times
arr1 = [1, 2, 3, 4];
arr1.every(function (elem) {
  arr1.pop();
  console.log(elem);
  return elem < 4;
});
