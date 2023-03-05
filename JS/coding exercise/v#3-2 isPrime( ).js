function isPrime(n) {
  if (n == 1) {
    return false;
  }

  let starter = 2;
  while (starter < n) {
    if (n % starter == 0) {
      return false;
    }
    starter++;
  }
  return true;
}

console.log(isPrime(6));
console.log(isPrime(2));
console.log(isPrime(37));
console.log(isPrime(79));