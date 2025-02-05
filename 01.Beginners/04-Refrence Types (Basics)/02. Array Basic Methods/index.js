// concat()	joins two or more arrays and returns a result
// includes() checks if an array contains a specified element
// push() adds a new element to the end of an array and returns the new length of an array
// unshift() adds a new element to the beginning of an array and returns the new length of an array
// pop() removes the last element of an array and returns the removed element
// shift() removes the first element of an array and returns the removed element
// sort() sorts the elements alphabetically in strings and in ascending order
// slice() selects the part of an array and returns the new array
// splice() removes or replaces existing elements and/or adds new elements

const numArr1 = [1, 2, 3];
const numArr2 = [4, 5, 6];

console.log(numArr1.concat(numArr2));
console.log(numArr1.includes(2)); //be true

numArr1.push("CR7");
console.log(numArr1.length);

numArr2.unshift("Messi");
console.log(numArr2.length);

console.log(numArr1.pop());
console.log(numArr2.shift());

const alphabetically = ["D", "C", "B", "A"];
console.log(alphabetically.sort());

const newAlphabetically = alphabetically.slice(0, 2);
console.log(newAlphabetically);

const numArr3 = numArr1.splice(1, 1, "hello");
console.log(numArr3); // [2]
console.log(numArr1); //[1, "hello", 3]
