const s = "all you need to do is rest";
console.log(s.startsWith("all"));//true
console.log(s.startsWith("All"));//false
//console.log(s.startsWith(/All/i));First argument must not be a regular expression
console.log(s.startsWith("need",8));//true
