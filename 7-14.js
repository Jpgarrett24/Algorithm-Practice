// const { testDriver } = './helpers';

// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
//expected = 2;
/* 
left to right diagonal: 1 + 5 + 9 = 15
right to left diagonal: 3 + 5 + 9 = 17
absolute difference = 2
*/

function diagonalDifference(matrix) {
    let size = matrix.length - 1;
    let left = right = absoluteDiff = 0;
    for (let i = 0; i <= size; i++) {
        left += matrix[i][i];
        right += matrix[i][size - i];
    }
    absoluteDiff = right - left;
    return Math.abs(absoluteDiff);
}
console.log(diagonalDifference(squareMatrix));




/* 
  Union Sorted Arrays
  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.
  Unions by default will take the set of dupes
  that has the highest occurences from one array.
*/
const numsA = [1, 2, 2, 2, 7];
const numsB = [2, 2, 6, 6, 7];
// expected = [1, 2, 2, 2, 6, 6, 7];
/* 
  Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
  because it occurs 3 times at most in ONE set
*/

function orderedMultisetUnion(nums1, nums2) {
    let result = [];
    let idx1 = idx2 = 0;
    while (idx1 < nums1.length || idx2 < nums2.length) {
        if (idx1 === nums1.length) {
            result.push(nums2[idx2++]);
            continue;
        }
        else if (idx2 === nums2.length) {
            result.push(nums1[idx1++]);
            continue;
        }
        if (nums1[idx1] < nums2[idx2]) {
            result.push(nums1[idx1]);
            idx1++;
        }
        else if (nums2[idx2] < nums1[idx1]) {
            result.push(nums2[idx2]);
            idx2++;
        }
        else {
            result.push(nums2[idx2]);
            idx2++;
            idx1++;
        }
    }
    return result;
}
console.log(orderedMultisetUnion(numsA, numsB));