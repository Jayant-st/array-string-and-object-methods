const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.some((val)=>val>30));
var ab=array1.some((val,index)=>{
  if(index==2){
    array1[3]=50;
  }
  return val>40;
});
console.log(ab);

console.log(array1.some(val=>val%2==0));

function biggerThan40(val) {
  return val > 40;
}
const array2 = [1, 30, 39, 29, 10, 13];
const array3 = [1, 30, 50, 29, 10, 13];

console.log(array2.some(biggerThan40));
console.log(array3.some(biggerThan40));
