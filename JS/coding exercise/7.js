function findSmallCount(arr, int) {
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < int) {
      n++;
    }
  }
  return n;
}

console.log(findSmallCount([1, 2, 3], 2)); // returns 1
console.log(findSmallCount([1, 2, 3, 4, 5], 0)); // returns 0
console.log(findSmallCount([1, 2, 3, 4, 5], 6));
