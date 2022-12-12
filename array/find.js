const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.find((el)=>el>30));
var t=40;
var ab=array1.find((el,i,array1)=>{
  array1.push(t);
  t++;
  return el>40
});
console.log(ab);

const arr2 = [
  { name: "abc", q: 2 },
  { name: "def", q: 4 },
  { name: "ghi", q: 5 },
];
console.log(arr2.find( (ab)=> ab.name==='def' ));

const array3 = [0,1,2,3,4,5,6];

array3.find((value, index) => {
  if (index === 2) {
    array3.splice(4,1);
  }
  console.log(" index ", index, "  value ", value);
});
