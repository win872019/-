class Person{
    constructor(name, age, height){
        this.Name = name;
        this.age = age;
        this. height = height;
    }
    sayHi(){
        console.log(`Hi, I'm ${this.Name}.`);
    }
    sayBye(guest){
        console.log(`Good Bye! ${guest}.`);
    }
}


let Peggy = new Person("Peggy", 18, 165);
console.log(Peggy);
Peggy.sayHi();

//

class Student extends Person{
    constructor(name, age, height, major, scholarship){
        super(name, age, height);
            console.log(this);
            this.Major = major;
            this.Scholarship = scholarship;
    }
    studying(){
        console.log(`${this.Name} is studying.`);
    }
}



let Arron = new Student("Arron", 20, 179, "EE", 1000);
console.log(Arron);
Arron.sayHi();
Arron.sayBye("Linda");
Arron.studying();

//

class foreignStudent extends Student{
    constructor(name, age, height, major, scholarship, country){
        super(name, age, height, major, scholarship);
        console.log(this);
        this.Country = country;
    }
    intro(friend){
        console.log(`Hello, ${friend}. My name is ${this.Name}. I came from ${this.Country}.`);
    }
}

let Leo = new foreignStudent("Leo, Crus", 21, 193, "CS", 200, "Germany");
console.log(Leo);
Leo.sayBye("Mr.Wu");
Leo.intro("Mandy");
