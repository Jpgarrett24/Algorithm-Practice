/*
  Given a string
  return whether or not it's possible to make a palindrome out of the string's characters

  What is it about a string that makes it possible for it to be a palindrome?
*/

const str1 = "";
const str2 = "a";
const str3 = "ddaa";
const str4 = "dda";
const str5 = "aaadd";
const str6 = "abc";


function canBecomePalindrome(str) {
    if (str.length === 0) {
        return false;
    }

    const charFrequencies = {};
    let oddFreqCount = 0;
    let isOddLen = str.length % 2 !== 0;

    for (const char of str) {
        if (!charFrequencies.hasOwnProperty(char)) {
            charFrequencies[char] = 1;
        } else {
            charFrequencies[char]++;
        }
    }

    for (const key in charFrequencies) {
        const charFreq = charFrequencies[key];

        // if odd occurrences
        if (charFreq % 2 !== 0) {
            oddFreqCount++;

            if ((isOddLen && oddFreqCount > 1) || (!isOddLen && oddFreqCount > 0)) {
                return false;
            }
        }
    }
    return true;
}

console.log(canBecomePalindrome(str1));
console.log(canBecomePalindrome(str2));
console.log(canBecomePalindrome(str3));
console.log(canBecomePalindrome(str4));
console.log(canBecomePalindrome(str5));
console.log(canBecomePalindrome(str6));

/*
  Input: arr, callback
  Output: arr (with elements removed)

  Remove every element in the array, starting from idx 0,
  until the callback function returns true when passed the
  iterated element.

  Return an empty array if the callback never returns true
*/

const nums = [1, 4, 3, 6, 9, 15];
const callback1 = (elem) => {
    return elem > 5;
};
const callback2 = (elem) => {
    return elem > 2;
};
const callback3 = (elem) => false;



function dropIt(arr, callback) {
    let delCount = 0;

    for (const item of arr) {
        if (callback(item) !== true) {
            delCount++;
        } else {
            break;
        }
    }
    arr.splice(0, delCount);
    return arr;
}

console.log(dropIt(nums.slice(), callback1));
console.log(dropIt(nums.slice(), callback2));
console.log(dropIt(nums.slice(), callback3));