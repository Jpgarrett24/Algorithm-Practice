// Given an array nums of integers, return how many of them contain an even number of digits.

// Example 1:
// Input:
nums1 = [12, 345, 2, 6, 7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.

// Example 2:
// Input:
nums2 = [555, 901, 482, 1771]
// Output: 1
// Explanation: 
// Only 1771 contains an even number of digits.

const findNumbers = (nums) => {
    let result = 0;
    nums.forEach((num, idx) => {
        if (num.toString().length % 2 === 0) {
            result++;
        }
    });
    return result;
}
console.log(findNumbers(nums1));
console.log(findNumbers(nums2));



// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

// Example 1:
// Input: "Hello"
// Output: "hello"

// Example 2:
// Input: "here"
// Output: "here"

// Example 3:
// Input: "LOVELY"
// Output: "lovely"

const ToLowerCase = (str) => {
    const difference = ('a'.charCodeAt(0) - 'A'.charCodeAt(0));
    return Array
        .from(str)
        .map((letter) => (letter >= 'A' && letter <= 'Z') ? String.fromCharCode(letter.charCodeAt(0) + difference) : letter)
        .join("");
};

console.log(ToLowerCase("Hello"));
console.log(ToLowerCase("here"));
console.log(ToLowerCase("LOVELY"));