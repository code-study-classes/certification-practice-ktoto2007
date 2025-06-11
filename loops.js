export const sumOfSquares = (a, b) => {
  let result = 0;
  for (let i = a; i <= b; i += 1) {
    result += i ** 2;
  }
  return result;
};

export const power = (a, n) => {
  let result = 1;
  for (let i = 1; i <= n; i += 1) {
    result *= a;
  }
  return result;
};

export const factorialProduct = (num) => {
  let result = 1;
  for (let i = num; i >= 1; i -= 1) {
    result *= i;
  }
  return result;
};

export const fibonacciSequence = (num) => {

};
