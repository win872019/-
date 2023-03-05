
// let walking=(name)=>{
//     console.log(name+" is walking.")
// }

// walking("Jean")

let Lean ={
    name:"Lean Wang",
    age:26,
    height:163,
    greeting:function(person){
        console.log("Hi, "+person+".")
    },
    introduceHowTall(h){
        console.log("I'm "+this.height+" cm.")
    },

    /* 通常不會在 Object 使用 Arrow Function Expression。
    Arrow Function Expression 的 this.是指 Window object */
    introduceAge:(a)=>{
        console.log("I'm "+Lean.age+" years old.")
    }
}


Lean.greeting("Kathy");
Lean.introduceHowTall();
Lean.introduceAge();