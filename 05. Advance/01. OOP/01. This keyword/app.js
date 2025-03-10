const person = {
  name: "Meraj",
  age: 21,
  greetRegular: function () {
    console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
  },
  greetArrow: () => {
    console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
  },
};

person.greetRegular(); // Hello my name is Meraj and I am 21 years old
person.greetArrow(); // Hello my name is undefined and I am undefined years old