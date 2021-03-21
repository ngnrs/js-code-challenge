// Problem 1 C
// Task: Provide 3 unique implementations of the following function.
// Input: `n` - any integer from `0` to `Number.MAX_SAFE_INTEGER`.
// Output: `return` - summation to `n`, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.

//usage of while loop
var sum_to_n = function (n) {
  var i = 1;
  var total = 0;
  while (i <= n) {
    total += i;
    i++;
  }
  return total;
};

console.log(sum_to_n(6));
//output: 21
