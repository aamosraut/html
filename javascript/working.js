const car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
  start: function() {
    return `${this.make} ${this.model} is starting...`;
  }
};

console.log(car.start()); // "Toyota Camry is starting..."
