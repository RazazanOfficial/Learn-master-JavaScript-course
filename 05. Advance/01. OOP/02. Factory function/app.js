const vehicle = (type, brand, model, year) => {
  return {
    type,
    brand,
    model,
    year,
  };
};
const _206 = vehicle("Car", "Peugeot", "206", 2004);
const bugatti = vehicle("Car", "Bugatti", "Veyron", 2010);
const yamaha = vehicle("Motorcycle", "Yamaha", "YZF-R1", 2015);

console.table([_206, bugatti, yamaha]);
