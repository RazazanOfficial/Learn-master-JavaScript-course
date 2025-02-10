const person = {
  name: "John Doe",
  age: 30,
  gender: "male",
  country: "USA",
};

const { name: personName, age: personAge, country: personCountry } = person;
console.log(personName);
console.log(personAge);
console.log(personCountry);
