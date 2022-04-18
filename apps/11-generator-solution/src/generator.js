/**
 * @name iterator#generatorFunction
 * @type {function}
 * @description Test if generator function has understood
 * @param {number} x
 * @returns {number} final result = 13
 */
export function generatorFunction() {
  let finalResult;
  let fib = [];
  fib[0] = 0;
  fib[1] = 1;

  function* fibonacci(i) {
    yield (fib[i] = fib[i - 2] + fib[i - 1]);
  }

  for (let j = 2; j <= 7; j++) {
    finalResult = fibonacci(j).next().value;
  }
  return finalResult;
}
