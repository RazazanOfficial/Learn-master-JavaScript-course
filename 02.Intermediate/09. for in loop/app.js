const object = { a: 1, b: 2, c: 3 };

for (keys in object){
  console.log(`${keys} : ${object[keys]}`);
}