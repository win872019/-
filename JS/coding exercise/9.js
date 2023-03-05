function findAllSmall(arr, int) {
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < int) {
      finalArr.push(arr[i]);
    }
  }
  return finalArr;
}


console.log(findAllSmall([1, 2, 3], 10)); // returns [1, 2, 3]
console.log(findAllSmall([1, 2, 3], 2)); // returns [1]
console.log(findAllSmall([1, 3, 5, 4, 2], 4)); // returns [1, 3, 2]