{
  class Car {
    constructor(
      public make: string,
      public model: string,
      public year: number
    ) {
      this.model = model;
      this.make = make;
      this.year = year;
    }
    getCarAge() {
      const carAge: number = new Date().getFullYear() - this.year;
      //   console.log(`${carAge} (assuming current year is 2024)`);
      //   console.log(carAge);
      return carAge;
    }
  }
  const car = new Car("Honda", "Civic", 2018);
  car.getCarAge();
}
