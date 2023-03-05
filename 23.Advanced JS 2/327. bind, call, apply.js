// bind

let a = "Lyla";

function sayHi() {
  console.log(this);  
  console.log(`${this} says Hi.`);  
}

let LSayHi = sayHi.bind(a);
console.log(typeof(LSayHi)); // function

LSayHi();

// 

let York = {
    name: "York, Lin",
    age: 25
}

function intro(country, city){
    console.log(`${this.name} comes from ${city}, ${country}.`)
}

let YIntro = intro.bind(York);
YIntro("Taiwan", "Taipei");


// call

let Roy = {
    name: "Roy, Huang",
    age: 32
}

intro.call(Roy, "Taiwan", "Taipei");


// apply

intro.apply(Roy, ["Taiwan", "Taipei"]);