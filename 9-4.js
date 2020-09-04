//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
const createPhoneNumber = (arr) => {
    let result = "("
    arr.forEach((num, idx) => {
        result += num;
        if (idx == 2) {
            result += ") "
        }
        if (idx == 5) {
            result += "-"
        }
    });
    return result;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // => returns "(123) 456-7890"

//Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.
// Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

const duplicates = (arr) => {
    let map = {};
    let strings = {};
    let result = [];
    arr.forEach((num, idx) => {
        if (!map.hasOwnProperty(num) && typeof num !== 'string') {
            map[num] = 1;
        }
        else if (map.hasOwnProperty(num) && typeof num !== 'string') {
            map[num]++;
            if (!result.includes(num)) {
                result.push(+num);
            }
        };
        if (!strings.hasOwnProperty(num) && typeof num == 'string') {
            strings[num] = 1;
        }
        else if (strings.hasOwnProperty(num) && typeof num == 'string') {
            strings[num]++;
            if (!result.includes(num)) {
                result.push(num);
            }
        };
    });
    return result;
};
console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"])); // returns ==> [4, 3, 1]
console.log(duplicates([0, 1, 2, 3, 4, 5]));               // returns==>  []