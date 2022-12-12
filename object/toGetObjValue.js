const obj1={
  rollNo:7115,
  name:'Joe',
  age:15
};
console.log("Roll No "+obj1.rollNo+" Name "+obj1.name+" age "+obj1.age);
console.log(Object.values(obj1));
var ab=Object.keys(obj1).map(k => obj1[k]);
console.log(ab);
let text = "";
for (let x in obj1) {
  text += x+" "+obj1[x]+" ";
}
console.log(text);
