const gridTraveler = (m, n) => {
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 3));
// console.log(gridTraveler(50, 50));

//--------------------------------------------------------------

const newGridTraveler = (m, n, memo = {}) => {
    const key = m + "," + n;
    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    memo[key] = newGridTraveler(m - 1, n, memo) + newGridTraveler(m, n - 1, memo);
    return memo[key];
};

console.log(newGridTraveler(2, 3));
console.log(newGridTraveler(3, 3));
console.log(newGridTraveler(50, 50));
