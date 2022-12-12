const s = "today is a good day bco TodaY is my day";
const re = /[A-Z]/;
const reDot = /[.]/;
console.log(s.search("good"));
console.log(s.search(re)); //start & end with capital letter
console.log(s.search(reDot));
