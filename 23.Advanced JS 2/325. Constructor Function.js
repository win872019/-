// Constuctor function

function Car (brand, color, year){
    
    console.log(this);

    this.BRAND = brand;
    this.COLOR = color;
    this.YEAR = year;

    this.start = function(){
        console.log( `${color} ${this.BRAND} Boom Boom.`);
    };
};

let no1 = new Car("Toyota", "Blue", 1999);
let no2 = new Car("Audi", "Black", 2012);
console.log(no1); 
console.log(no2); 

no1.start();

// Comparison

console.log(no1.start === no2.start);

