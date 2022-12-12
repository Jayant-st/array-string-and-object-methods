const array1 = [1, 30, 39, 29, 10, 13];
const ab=array1.filter(a=> a>20);
console.log(ab);
console.log(array1);
const arr2=['abc','avcc', '    ','dasds','sdsds'];
console.log(arr2.filter(b => b.length>=4));

const arr = [{ id: 15 },{ id: -1 },{ id: 0 },{ id: 3 },{ id: 12.2 },{},{ id: null },{ id: NaN },{ id: "undefined" },];
let invalidEntries = 0;
function filterByID(item) {
  if (item.id>1 && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}
const arrByID = arr.filter(filterByID);
console.log("Filtered Array\n", arrByID);
console.log("Number of Invalid Entries = ", invalidEntries);

const fruits = ["apple", "banana", "grapes", "mango", "orange"];
function filterItems(arr2, query) {
  return arr2.filter((el) => el.includes(query) );
}

console.log(filterItems(fruits, "ap"));
console.log(filterItems(fruits, "an"));

const deleteWords = fruits.filter((word, index, arr3) => {
  arr3.pop();
  return word.length < 7;
});

console.log(deleteWords);
