const num=[1,2,3,4,5];
const num2=num.map(el=>el*5);
console.log(num2);//[5,10,15,20,25]
const num3=[1,4,9,16,25,36];
console.log(num3.map(el=>Math.sqrt(el))); //[1,2,3,4,5,6]
const num4=num3.map((el,index)=>{
  if(index==2){
    num3[3]=49;
  }
  return Math.sqrt(el);
});
console.log(num4);
//num3=[1,4,9,49,25,36]
function returnEvenNumber(numb){
  if( numb%2==0){
    console.log(numb);//4,36
    return numb;
  }
}
const num5=num3.map(returnEvenNumber);
console.log(num5);//[undefined,4,undefined,undefined,undefined,36]
