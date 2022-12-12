const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.findIndex((val)=> val===10));
var array2 = [1, 30, 39, 29, 10, 13];
var ab=array2.findIndex( (value,index,array2)=>{
if(index==1){
  array2[3]=49;
} 
return value==49;
});
console.log(ab);  //return -1
