'use strict';

function fibonacci(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacci2(n) {
  let resultado;
  for (let index = 1; index < n; index++) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      resultado = index + 1 - index + 2;
    }
  }
  return resultado;
}

function memofibonacci2(n) {
  let memo = [0, 1];
  for (let index = 2; index <= n; index++) {
    memo[index] = memo[index - 2] + memo[index - 1];
  }
  return memo[n];
}

console.log(memofibonacci2(8));
console.log(fibonacci(8));
console.log(fibonacci2(8));
