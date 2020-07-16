
/* 
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
  The first element is never considered non-consecutive.
  Return an array of objects where each object contains the number itself
  and it's index.
*/

const nums1 = [1, 2, 3, 4, 6, 7, 8, 10];
const expected1 = [
    { i: 4, n: 6 },
    { i: 7, n: 10 },
];

const testCases = [{ arguments: [nums1], expected: expected1 }];
testDriver([allNonConsecutive], testCases);

function allNonConsecutive(nums) {
    let expected1 = [{ key: "i", value: "n" }]
    for (p = 1; p < nums.length; p++) {
        if (nums[p] !== (nums[p - 1] + 1)) {
            let thing = {
                'i': p,
                'n': nums[p]
            }
            //   expected1.push(thing)
            expected1.push({ 'i': p, 'n': nums[p] })
            //   console.log(expected1)
        }
    }
}

console.log(allNonConsecutive(nums1));


// Interview Algo given to alumni

/* 
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/


const nums3 = [2, 5, 3, 6, 7, 23, 12];
const sum3 = 16;
const expected1 = [
    [2, 5, 3, 6],
    [3, 6, 7],
];

// Bonus, with 0 potentially as part of the input:
const nums4 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum4 = 16;
const expected2 = [
    [2, 5, 3, 6],
    [3, 6, 7],
    [3, 6, 7, 0],
    [3, 6, 7, 0, 0],
];

const testCases = [
    { arguments: [nums1, sum1], expected: expected1 },
    { arguments: [nums2, sum2], expected: expected2 },
];
testDriver([findConsqSums], testCases);

function findConsqSums(nums, sum) {
    let currentSum = 0;
    let start = 0;
    let loopSum = [];
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        if (currentSum === sum) {
            loopSum = nums.slice(start, i + 1);
            result.push(loopSum);
            loopSum = [];
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] == 0) {
                    loopSum = nums.slice(start, j + 1);
                    result.push(loopSum);
                    loopSum = [];
                }
                else {
                    j = nums.length;
                }
            }
            currentSum = 0;
            i = start;
            start++;
        }
        else if (currentSum > 16) {
            currentSum = 0;
            i = start;
            start++;
        }
    }
    return result;
};
console.log(findConsqSums(nums3, sum3));
console.log(findConsqSums(nums4, sum4));
