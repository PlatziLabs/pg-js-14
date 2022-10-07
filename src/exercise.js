export function fibonacci(number) {
  const fibonacciArray = [0, 1];

  for (let i = 2; i <= number; i++){
    fibonacciArray.push(fibonacciArray[i - 2] + fibonacciArray[i - 1]);
  }
  fibonacciArray.shift(0);
  return fibonacciArray;
}

