# Dynamic-Programming

-   What is it? - A programming technique where an algorithmic problem is first broken down into sub-problems, & sub-problems are use to find the optimal solution.

-   Memoization - store duplicate sub problems, so it can be reused when it occus again.

## Fib memoization [view code](Fib_memoization/fib.js)

```
const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
};
```

above code will work fine for n like, 2, 3, 4. but if we consider big numbers like 50, 100, 200 this approach will take alot of time O(2^n). Take a look at the below tree structure.

![Fib tree structure with O(n^2) complexity](Fib_memoization/imgs/fib-tree-structure.png)

-   here you can see that, fib(5) have been calculated twice. Which leads to higher time complexity.
-   Insted of calculating the fib(5) twice we can use the approach of **Memoization** to store the result of fib(5) and reuse the value on next call.

```
const newFib = (n, memo = {}) => {
    if(n in memo) return memo[n]; // calling
    if (n <= 2) return 1;
    memo[n] = newFib(n - 1, memo) + newFib(n - 2, memo); // storing
    return memo[n];
};

console.log(newFib(7));
console.log(newFib(50)); // won't take long time
```

-   In above mrthod it won't recalculate same n twice.
-   This will also decrease the time complexity to O(n).
    ![Fib tree structure with O(n) complexity](Fib_memoization/imgs/memoized-Fib.png)

## gridTraveler memoization

## Memoization recipe
