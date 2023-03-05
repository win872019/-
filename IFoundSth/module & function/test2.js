const { sayHi } = require("./testModule");
const test = require("./testModule2");
const hello = require("./testModule2").sayHi();  // module 裡的 function B return 另一個 function A ，只能用此方法 exports function B ? 

// test.sayHi("Jenny", "may");
// console.log(hello);
sayHi("123","123");