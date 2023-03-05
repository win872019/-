function fib(n) {
  let fibo = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo[n];
}


console.log(fib(0)); // returns 0
console.log(fib(1)); // returns 1
console.log(fib(2)); // returns 1
console.log(fib(3)); // returns 2
console.log(fib(8)); // returns 21
console.log(fib(9)); // returns 34
console.log(fib(10)); // returns 55
console.log(fib(11)); // returns 89
console.log(fib(12)); // returns 144