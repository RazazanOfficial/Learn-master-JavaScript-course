const car = { type: "Fiat", model: 500, color: "white" };
console.log(typeof car); // object
car.type = "Toyota";
car.wheels = 4;
console.log(car); // { type: 'Toyota', model: 500, color: 'white', wheels: 4 }  
