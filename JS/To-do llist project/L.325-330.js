// //Constructor function

// function Car(brand, cc, year) {
//   this.brand = brand, 
//   this.cc = cc, 
//   this.year = year
// }

// let toyota = new Car("Toyota", 3000, 1999);
// let juagra = new Car("Juagra", 3500, 2013);
// let benz = new Car("Benz", 4000, 2006);
// let mazda = new Car("Mazda", 2800, 1980);
// let honda = new Car("Honda", 4200, 2021);


// //Prototype

// Car.prototype.start = function () {
//   console.log(this.brand + " boom boom.");
// }

// Car.prototype.OldOrNew = function () {
//   if (this.year < 2000) {
//     console.log("This " + this.brand + " is an old car.");
//   }else{
//     console.log("This " + this.brand + " is a pretty new car.");
//   }
// }


// //bind, call, apply

// function getBrand(look){
//   console.log(this.brand);
//   console.log("It's " + look);
// }

// let getHondaBrand = getBrand.bind(honda,"pretty");
// /* getHondaBrand(); */

// function getAge(age){
//   console.log("This " + this.brand + " is " + age + " years old." );
//   if(this.year < 2000){
//     console.log("It's an old car.")
//   } else {
//     console.log("It's a pretty new car.")
//   }
// }
// /* getAge.call(juagra, 10) */

// function BigCar(brand, cc, year, color, hp){
//   Car.call(this, brand, cc, year);
//   this.Color = color,
//   this.Hp = hp
// }


// BigCar.prototype = Object.create(Car.prototype);

// let fort = new BigCar("Fort", 3250, "blue", 2019, 150);
// console.log(fort);
// fort.start();


// //class
// class Car{
//   constructor(brand, cc, year) {
//     this.brand = brand, 
//     this.cc = cc, 
//     this.year = year
//   }
//   start() {
//     console.log(this.brand + " boom boom.");
//   }
//   OldOrNew() {
//     if (this.year < 2000) {
//       console.log("This " + this.brand + " is an old car.");
//     }else{
//       console.log("This " + this.brand + " is a pretty new car.");
//     }
//   }
// }

// let toyota = new Car("Toyota", 3000, 1999);
// let mazda = new Car("Mazda", 2800, 1980);

// console.log(toyota,mazda);


//static propoties and methods

class Circle{
  static pi = 3.14159

  constructor(radius){
    this.radius = radius;
  }

  getArea(){
    return this.radius * this.radius * Circle.pi;
  }

  get perimeter(){
    return 2 * this.radius * Circle.pi;
  }

  static getAreaFormula(){
    console.log( "r * r * 3.14");
  }
}

let c1 = new Circle(3);
console.log(c1.getArea());
Circle.getAreaFormula();