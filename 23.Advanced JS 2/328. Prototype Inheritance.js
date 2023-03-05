function Person(name, age, height){
    this.Name = name;
    this.age = age;
    this. height = height;
}

Person.prototype.sayHi = function(){
    console.log(`Hi, I'm ${this.Name}.`);
}

Person.prototype.sayBye = function(guest){
    console.log(`Good Bye! ${guest}.`);
}

let Peggy = new Person("Peggy", 18, 165);
console.log(Peggy);
Peggy.sayHi();

//

function Student(name, age, height, major, scholarship){
    console.log(this);
    Person.call(this, name, age, height);
    this.Major = major;
    this.Scholarship = scholarship;
}

Student.prototype = Object.create(Person.prototype);

let Arron = new Student("Arron", 20, 179, "EE", 1000);
console.log(Arron);
Arron.sayHi();
Arron.sayBye("Linda");