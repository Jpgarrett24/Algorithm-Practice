// There is a hidden integer array arr that consists of n non-negative integers.
// It was encoded into another integer array encoded of length n - 1, such that encoded[i] = arr[i] XOR arr[i + 1]. For example, if arr = [1,0,2,1], then encoded = [1,2,3].
// You are given the encoded array. You are also given an integer first, that is the first element of arr, i.e. arr[0].
// Return the original array arr. It can be proved that the answer exists and is unique.



// Example 1:
// Input: encoded = [1,2,3], first = 1
// Output: [1,0,2,1]
// Explanation: If arr = [1,0,2,1], then first = 1 and encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]

// Example 2:
// Input: encoded = [6,2,7,3], first = 4
// Output: [4,2,0,7,4]


// Constraints:
// 2 <= n <= 104
// encoded.length == n - 1
// 0 <= encoded[i] <= 105
// 0 <= first <= 105

const decode = (encoded, first) => {
    let result = [first];
    let index = 0;
    while (result.length <= encoded.length) {
        let temp = encoded[index] ^ result[index];
        result.push(temp)
        index++
    }
    return result
};

let example1 = {
    arr: [1, 2, 3],
    first: 1
};

let example2 = {
    arr: [6, 2, 7, 3],
    first: 4
};

let example3 = {
    arr: [6],
    first: 1
}

console.log(decode(example1.arr, example1.first));
console.log(decode(example2.arr, example2.first));
console.log(decode(example3.arr, example3.first));