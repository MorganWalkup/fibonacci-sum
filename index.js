const fibonacciSum = require('./fibonacciSum');

// Calculate the sum of even fibonacci elements less than 4,000,000
const isEven = (element) => element % 2 === 0;
const sum = fibonacciSum(isEven, 4000000);
console.log(sum);
// Result: 4,613,732