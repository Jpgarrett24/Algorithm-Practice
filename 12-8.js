// The fib numberbers, commonly denoted F(n) form a sequence, called the fib sequence, such that each numberber is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), for N > 1.
// Given N, calculate F(N).

// Example 1:
// Input: 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Example 2:
// Input: 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

// Example 3:
// Input: 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

const fib = (number) => {
    const fibNums = [0, 1];
    while (fibNums.length <= number) {
        fibNums.push(fibNums[fibNums.length - 1] + fibNums[fibNums.length - 2]);
    };
    return fibNums[number]
};

// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));
// console.log(fib(5));
// console.log(fib(6));




// Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).

// Example 1:
// Input: 
const root1 = [1, 3, 2, 5, 3, null, 9]
// Output: [1,3,9]

// Example 2:
// Input: 
const root2 = [1, 2, 3]
// Output: [1,3]

// Example 3:
// Input: 
const root3 = [1]
// Output: [1]

// Example 4:
// Input: 
const root4 = [1, null, 2]
// Output: [1,2]

// Example 5:
// Input: 
const root5 = []
// Output: []


const largestValues = (root) => {
    if (root.length < 1) {
        return [];
    }
    let result = [root[0]];
    let last = 2;
    let i = 1;
    while (last < root.length) {
        let newArr = root.slice(i, last + 1);
        // console.log(`i is ${i} \n`, `last is ${last}\n`, `newArr is ${newArr}`);
        let max = Number.NEGATIVE_INFINITY;
        for (j = 0; j < newArr.length; j++) {
            if (newArr[j] > max) {
                max = newArr[j]
            };
        };
        result.push(max);
        i = last + 1;
        last = (last * 2) + 2
    };
    return result
};

console.log(largestValues([1, 3, 2, 5, 3, null, 9]));
console.log(largestValues(root2));
console.log(largestValues(root3));
console.log(largestValues(root4));
console.log(largestValues(root5));