// //Make a copy of an array

// let friends = ["Charlotte", "Lilly", "Anson", "Alex"];
// let copy = [...friends];

// copy.push("Zac");
// console.log(copy);
// console.log(friends);


// //Higher Order Function

// function firstLetter(friendName){
// if (friendName[0] == "A"){
//     console.log("Your friend's name start with an 'A'.")
// } else {
//     console.log("Hello!")
// }
// }

// friends.forEach(firstLetter);


// //Ternary Operator

// let age = 30;

// let ticket = (age < 18) ? 100 : (age < 65) ? 150 : 60;

// console.log(ticket);



// // Default Parameter

// function multiply(a = 1, b = 1){
//     console.log(a * b);
// }

// multiply(3, 9);


// //back-tick

// let myName = "Ryan";
// let greet = "Where are you from?"

// console.log(`${myName} says hi. ${greet}` )


// // Floting Point

// console.log((0.4 + 0.2).toFixed(1) == 0.6.toFixed(1));


// // IIFE means Immediately Invoked Function Expression.

// (function (name){
//     console.log("Hello! " + name);
// })("Henry"); 


// //Destructing an object

// let Sandra = {
//     firstName: "Sandra",
//     age: 35,
//     gender: "female",
//     height: 164,
//     weiget: 50,
//     friends: {
//         fullName: "Eko, Liu",
//         age: 40,
//         gender: "male",
//     }
// }

// let {firstName, age, height} = Sandra;
// let {fullName} = Sandra.friends;

// console.log(firstName, age, height, fullName);
// console.log(Sandra.friends.age);


// // switch expression

// /*
// let month = prompt("input month");

// if(month == "Jannuary"){
//     alert("一月");
// } else if(month == "Febuary"){
//     alert("二月");
// } else if(month == "March"){
//     alert("三月");
// } else if(month == "April"){
//     alert("四月");
// } else if(month == "May"){
//     alert("五月");
// // } else if(month == "June"){
//     alert("六月");
// } else {
//     alert("???")
// }
// */

// let  month = prompt("input month. January to June.");
// switch(month) {
//     case "Jannuary":
//         alert("一月");
//         break;
//     case "Febuary":
//         alert("二月");
//         break;
//     case "March":
//         alert("三月");
//         break;
//     case "April":
//         alert("四月");
//         break;
//     case "May":
//         alert("五月");
//         break;
//     case "June":
//         alert("六月");
//         break;
//     default:
//         alert("???");
// }


