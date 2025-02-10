const arrNum = [1, 2, 3, 4, 5];
let sum = 0;

function adder(number) {
  sum += number;
console.log(sum);

}
arrNum.forEach(adder);
