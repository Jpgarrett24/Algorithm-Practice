/* 
- visualization with playing cards (scroll down): https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
- array / bar visualization: https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
- efficient for small data sets or mostly sorted data sets
Time Complexity
    - Best: O(n) linear when array is already sorted
    - Average: O(n^2) quadratic
    - Worst: O(n^2) quadratic when the array is reverse sorted
Space: O(1) constant
- this sort splits the array into two portions (conceptually, not literally)
- the left portion will become sorted, the right portion (that hasn't been iterated over yet) is unsorted
// can shift OR swap target element until it reaches desired position
// shifting steps:
1. consider the first item as sorted
2. move to the next item
3. store current item in a temp var (to make this position availale to shift items)
4. if item to the left of current is greater than current item, shift the left item to the right
5. repeat step 4 as many times as needed
6. insert current item
7. move to the next item and repeat
// swap steps:
1. consider the first item as sorted
2. move to the next item
4. if item to left of current item is less than current, swap
5. repeat step 4 until item to left is less than current item
6. move to next item and repeat
*/

const arrRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const arrOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++){
        let testValue = array[i];
        let x = i - 1;
        while (x >= 0 && array[x] > testValue){
            array[x+1] = array[x];
            x -= 1;
        }
        array[x+1] = testValue;
    }
    return array;
}
console.log(insertionSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]));
console.log(insertionSort([3, 6, 2, 1, 5, 64, 2342, 6, 453]));
console.log(insertionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));

// A Narcissistic Number is a number which is the sum of its own digits, 
// each raised to the power of the number of digits in a given base. 
// In this Kata, we will restrict ourselves to decimal (base 10).
// For example, take 153 (3 digits):
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1634 (4 digits):
//     1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
// The Challenge:
// Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.
// Error checking for text strings or other invalid inputs is not required, 
// only valid integers will be passed into the function.

const narcissistic = (num) => {
    let exponent = num.toString().length;
    let digits = (num+"").split("");
    let sum = 0;
    digits.forEach((value, idx) => {
        digits[idx] = parseInt(value);
        digits[idx] = Math.pow(value, exponent);
        sum += digits[idx];
        return digits;
    })
    if (sum == num){
        return true;
    }
    else{
        return false;
    }
}
console.log(narcissistic(7));
console.log(narcissistic(371));
console.log(narcissistic(159));
console.log(narcissistic(1634));