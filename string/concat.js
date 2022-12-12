const a = "hey there ";
const b = "i'm ";
const c = "you know who i'm";
console.log(a.concat(b,c));

const hola = "Hola guys ";
console.log(hola.concat("i am joe "," how you doin"));

const monica = ["Hey ", "yaa ", "Monica", "!"];
console.log(a.concat(monica));

console.log("".concat(10,20));

console.log("".concat(null));

console.log("".concat(true));

const chand = " my fav Food is ";
let pj = {
  name:"chandler",
  favFood: "pizza"
};
console.log(b.concat(pj.name , chand , pj.favFood));
