function BMFunc(name, month) {
  console.log(`HII, ${name}. You were born in ${month}.`);
}

function newCar(color, brand) {
  console.log(`You bought a ${color} ${brand}.`);
}

function sayHi() {
  return BMFunc;
}

exports.BMFunc = BMFunc;
exports.newCar = newCar;
exports.sayHi = sayHi;
