function BMFunc(name, month) {
  console.log(`Hi, ${name}. You were born in ${month}.`);
}

function newCar(color, brand) {
  console.log(`You bought a ${color} ${brand}.`);
}

function sayHi(a, b) {
  BMFunc(a, b);
}

exports.BMFunc = BMFunc;
exports.newCar = newCar;
exports.sayHi = sayHi;
