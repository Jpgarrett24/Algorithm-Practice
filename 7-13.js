/*
Intersect Sorted Arrays (dedupe)
Efficiently combine two already sorted multiset arrays
into an array containing the sorted set intersection of the two.
Output: only the shared values between the two arrays (deduped).

Input: [1,2,2,2,7], [2,2,6,6,7]
Output: [2,7]
*/
let arr1 = [1, 2, 2, 2, 7];
let arr2 = [2, 2, 6, 6, 7];
let arr3 = [1, 4, 5, 7, 9];
let arr4 = [1, 3, 4, 8, 10];
let arr5 = [24, 33, 34, 42, 42, 44];
let arr6 = arr5;

const intersectSorted = (array1, array2) => {
    let newArray = [];
    let i = 0; // two indexes stored in variables i and j
    let j = 0; // two indexes stored in variables i and j

    while (i < array1.length && j < array2.length) {
        if (array1[i] == array2[j] && array1[i] !== newArray[newArray.length - 1]) {
            newArray.push(array1[i]);
            i++;
            j++;
        }
        else if (array1[i] < array2[i]) {
            i++;
        }
        else if (array1[i] > array2[j]) {
            j++;
        }
        else {
            i++;
        }
    }
    return newArray;
}
console.log(intersectSorted(arr1, arr2));
console.log(intersectSorted(arr3, arr4));
console.log(intersectSorted(arr5, arr6));