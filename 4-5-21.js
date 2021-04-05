// Given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
// Return the shuffled string.

// Example 1:
// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

// Example 2:
// Input: s = "abc", indices = [0,1,2]
// Output: "abc"
// Explanation: After shuffling, each character remains in its position.

// Example 3:
// Input: s = "aiohn", indices = [3,1,4,2,0]
// Output: "nihao"

// Example 4:
// Input: s = "aaiougrt", indices = [4,0,2,6,7,3,1,5]
// Output: "arigatou"

// Example 5:
// Input: s = "art", indices = [1,0,2]
// Output: "rat"

const restoreString = (s, indices) => {
    let result = new Array(s.length).fill(0)
    for (let i = 0; i < s.length; i++) {
        result[indices[i]] = s[i]
    }
    return result.join('')
}

const inputs = {
    1: {
        s: "codeleet",
        indices: [4, 5, 6, 7, 0, 2, 1, 3]
    },
    2: {
        s: "abc",
        indices: [0, 1, 2]
    },
    3: {
        s: "aiohn",
        indices: [3, 1, 4, 2, 0]
    },
    4: {
        s: "aaiougrt",
        indices: [4, 0, 2, 6, 7, 3, 1, 5]
    },
    5: {
        s: "art",
        indices: [1, 0, 2]
    },
}

console.log(restoreString(inputs[1].s, inputs[1].indices));
console.log(restoreString(inputs[2].s, inputs[2].indices));
console.log(restoreString(inputs[3].s, inputs[3].indices));
console.log(restoreString(inputs[4].s, inputs[4].indices));
console.log(restoreString(inputs[5].s, inputs[5].indices));
