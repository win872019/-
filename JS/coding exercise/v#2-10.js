function findNthMin(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    let counter = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        counter++;
      }
    }
    if (counter == n - 1) {
      return arr[i];
    }
  }
}

console.log(findNthMin([1, 2, 3, 4, 5], 1)); // returns 1
console.log(findNthMin([1, 3, 5, 7, 9], 3)); // returns 5
console.log(findNthMin([1, -3, 5, 46, -9], 2)); // returns -3
console.log(findNthMin([1, 35, 44, 7, -29], 5)); // returns 44
