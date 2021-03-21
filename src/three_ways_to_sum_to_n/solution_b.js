// Problem 1 B
// Task: Provide 3 unique implementations of the following function.
// Input: `n` - any integer from `0` to `Number.MAX_SAFE_INTEGER`.
// Output: `return` - summation to `n`, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.

//usage of for loop
var sum_to_n = function (n) {
  var result = 0;
  for (i = 1; i <= n; i++) {
    result += i;
  }
  return result;
};

console.log(sum_to_n(5));
//output: 15
