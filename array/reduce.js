const array1 = [1, 30, 39, 29, -30, 13];
var sum=array1.reduce((s,val)=> {return s+val},0 );  //s=0 val=1
console.log(sum);


var sum1=array1.reduce((s,val)=> {return s+val});  //s=1 val=30
console.log(sum1);

var ab=array1.reduce((sum1,val,index,array1)=>{
  if(index==2){
    array1[4]=-12;
  }
  return sum1+val;
});
console.log(ab);
const array2 = [1, 30, 39, 29,13];

console.log(array2.reduce((sum1,val,index,array2)=>{
  if(index==2){
    array2.pop();
  }
  return sum1+val;
}));

var array3 = [30,10,20,10];
console.log(array3.reduce((sum1,val,index,array3)=>{
  if(index==2){
    array3.push(30);  //value add not work
  }
  return sum1+val;
}));
