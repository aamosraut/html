const scores = [45, 82, 99, 12, 54];

const highest = Math.max(...scores); // Uses Spread (...) operator
const lowest = Math.min(...scores);

console.log(`Max: ${highest}, Min: ${lowest}`); // "Max: 99, Min: 12"
