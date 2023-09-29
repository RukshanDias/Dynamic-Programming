const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
};

console.log(fib(7));
// console.log(fib(50)); // will take long time

// ---------------------------
const newFib = (n, memo = {}) => {
    if(n in memo) return memo[n]; // calling
    if (n <= 2) return 1;
    memo[n] = newFib(n - 1, memo) + newFib(n - 2, memo); // storing
    return memo[n];
};

console.log(newFib(7));
console.log(newFib(50)); // won't take long time
