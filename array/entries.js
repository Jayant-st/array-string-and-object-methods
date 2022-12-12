const arr1 = ["a", "b", "c","d"];
const arR=arr1.entries();
console.log(arR);
console.log(arR.next());
console.log(arR.next().value);
console.log(arR.next().value[0]);
console.log(arR.next().value[1]);
const arr2 = ["a", "b", "c","d","e"];
const arR1=arr2.entries();

for(let a of arR1){
  console.log(a[1]);
}
console.log(arR1.next());
