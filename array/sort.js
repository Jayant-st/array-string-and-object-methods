const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.sort());
console.log(array1); //change array1
const array2 = [1,, 39, 29, 10, 13];
console.log(array2.sort());//empty value shift to end of the array [ 1, 10, 13, 29, 39, <1 empty item> ]

const array3 = [1, 30, 4, 21, 100000];
console.log(array3.sort()); //[ 1, 100000, 21, 30, 4 ]
const array4 = [1, 30, 4,100000,21,];
var ab=array4.sort((a,b)=>a-b);  // result < 0 => return a,  result > 0 => return b, result==0 => nothing return
console.log(ab);

const array5=['bsd','abc','dac','aac','bcc'];
console.log(array5.sort());
