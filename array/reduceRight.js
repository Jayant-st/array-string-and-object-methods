const array1 = [1, 30, 39, 29, 10, 13]; 
console.log(array1.reduceRight((s,v)=>s+v)); //same as reduce

const array2 = [[0, 1],[2, 3],[4, 5],];
console.log( array2.reduceRight((a, b) => a.concat(b))); //[4, 5, 2, 3, 0, 1]
