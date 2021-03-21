// Problem 1 A
// Task: Provide 3 unique implementations of the following function.
// Input: `n` - any integer from `0` to `Number.MAX_SAFE_INTEGER`.
// Output: `return` - summation to `n`, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.

//usage of arithmitic progression formula
var sum_to_n = function (n) {
  return ((n + 1) * n) / 2;
};
console.log(sum_to_n(4));
//output: 10
