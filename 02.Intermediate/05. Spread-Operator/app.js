let arr = [1, 2, 3];
let arr2 = [4, 5];

let totalArr = [...arr, ...arr2];
console.log(totalArr)

const user = {
  name: "Jen",
  age: 22,
};
let userClone = {...user}
console.log(userClone)
