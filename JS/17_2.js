function findBiggest(arr) {
  let biggestNumber = -100000000;
  if (arr = []){
      return undefined;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > biggestNumber) {
      biggestNumber = arr[i];
    }
  }
  return biggestNumber;
}

let ar = [2,3];
let a = findBiggest(ar);
console.log(a);