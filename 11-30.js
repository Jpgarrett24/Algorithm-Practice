// Given a binary array, find the maximum number of consecutive 1s in this array.

// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.

const findMaxConsecutiveOnes = (nums) => {
    result = 0
    current = 0
    for (i = 0; i < nums.length; i++) {
        if (i === 0) {
            if (nums[i] === 1) {
                current++;
            };
        };
        if (i > 0) {
            if (nums[i] === 1) {
                current++;
            }
            else {
                if (current > result) {
                    result = current;
                };
                current = 0;
            }
        };
    };
    return (current > result ? current : result)
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([0, 0, 0, 1, 0, 0, 1, 0, 1, 0]));
console.log(findMaxConsecutiveOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]));