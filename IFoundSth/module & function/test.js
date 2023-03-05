const test = require("./testModule");
const hello = require("./testModule").sayHi();  // module 裡的 function B return 另一個 function A ，只能用此方法 exports function B ? 



// console.log(test);
// console.log(hello);

test.BMFunc("Harry", "April");
// test.newCar("Black", "Benz");

test.sayHi("Landy", "september"); // 不會顯示。 why?

hello("Leo", "April");  