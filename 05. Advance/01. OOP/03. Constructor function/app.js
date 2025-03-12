function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.printInfo = function () {
    console.log(
      `Name: ${this.name}, Age: ${this.age} , Gender: ${this.gender}`
    );
  };
}

const person1 = new Person("Korush", 25, "male");
const person2 = new Person("Mia", 22, "female");
const person3 = new Person("Meraj", 21, "male");

console.table([person1, person2, person3]); // Output: [Object, Object, Object]
person1.printInfo();
person2.printInfo();
person3.printInfo();
