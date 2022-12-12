const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.includes(29));
console.log(array1.includes(11));

const arr = ["a", "b", "c"];
console.log(arr.includes("c", 2));
console.log(arr.includes("c", 4));
console.log(arr.includes("c", -1));
console.log(arr.includes("c", -4)); //  the entire array will be searched.

var array2 = [1, 30, 39, 29, 10, 13];
 for(value of array2){
   if(array2.indexOf(value)==2){
     console.log("index 4 before change value "+value);
     array2[4]=40;
   }
   console.log("index "+array2.indexOf(value)+" value "+value+" change is "+array2.includes(40) );
   // console.log(array2.includes(40));
 }
