// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

// Example 1:
// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15

// Example 2:
// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21

const subtractProductAndSum = (n) => {
    let arr = n.toString().split('');
    arr = arr.map((num) => Number(num));
    let product = arr[0];
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        product = product * arr[i];
        sum += arr[i];
    }
    return product - sum;
}

console.log(subtractProductAndSum(234));
console.log(subtractProductAndSum(4421));


// You have n boxes. You are given a binary string boxes of length n, where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.
// In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent to box j if abs(i - j) == 1. Note that after doing so, there may be more than one ball in some boxes.
// Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box.
// Each answer[i] is calculated considering the initial state of the boxes.

// Example 1:
// Input: boxes = "110"
// Output: [1,1,3]
// Explanation: The answer for each box is as follows:
// 1) First box: you will have to move one ball from the second box to the first box in one operation.
// 2) Second box: you will have to move one ball from the first box to the second box in one operation.
// 3) Third box: you will have to move one ball from the first box to the third box in two operations, and move one ball from the second box to the third box in one operation.

// Example 2:
// Input: boxes = "001011"
// Output: [11,8,5,4,3,4]

const minOperations = (boxes) => {
    const result = [];
    for (let i = 0; i < boxes.length; i++) {
        let count = 0;
        for (let j = 0; j < boxes.length; j++) {
            if (i !== j && boxes[j] == "1") count += Math.abs(i - j);
        }
        result.push(count);
    }
    return result;
};

console.log(minOperations('110'));
console.log(minOperations('001011'));
