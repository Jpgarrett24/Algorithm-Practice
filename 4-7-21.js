// On a 2D plane, there are n points with integer coordinates points[i] = [xi, yi]. Return the minimum time in seconds to visit all the points in the order given by points.

// You can move according to these rules:

// In 1 second, you can either:
// move vertically by one unit,
// move horizontally by one unit, or
// move diagonally sqrt(2) units (in other words, move one unit vertically then one unit horizontally in 1 second).
// You have to visit the points in the same order as they appear in the array.
// You are allowed to pass through points that appear later in the order, but these do not count as visits.


// Example 1:
// Input: points = [[1,1],[3,4],[-1,0]]
// Output: 7
// Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]   
// Time from [1,1] to [3,4] = 3 seconds 
// Time from [3,4] to [-1,0] = 4 seconds
// Total time = 7 seconds

// Example 2:
// Input: points = [[3,2],[-2,2]]
// Output: 5

const minTimeToVisitAllPoints = (points) => {
    let second = 0;

    points.forEach(([x, y], idx) => {
        if (idx) {
            const [preX, preY] = points[idx - 1]
            const moveX = Math.abs(x - preX)
            const moveY = Math.abs(y - preY)

            second += Math.max(moveX, moveY)
        }
    })
    return second
}

console.log(minTimeToVisitAllPoints([[1, 1], [3, 4], [-1, 0]]));
console.log(minTimeToVisitAllPoints([[3, 2], [-2, 2]]));


// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.

// Example 1:
// Input: s = "Hello how are you Contestant", k = 4
// Output: "Hello how are you"
// Explanation:
// The words in s are ["Hello", "how" "are", "you", "Contestant"].
// The first 4 words are ["Hello", "how", "are", "you"].
// Hence, you should return "Hello how are you".

// Example 2:
// Input: s = "What is the solution to this problem", k = 4
// Output: "What is the solution"
// Explanation:
// The words in s are ["What", "is" "the", "solution", "to", "this", "problem"].
// The first 4 words are ["What", "is", "the", "solution"].
// Hence, you should return "What is the solution".

// Example 3:
// Input: s = "chopper is not a tanuki", k = 5
// Output: "chopper is not a tanuki"

const truncateSentence = (s, k) => {
    return s.split(" ").slice(0, k).join(" ");
};

console.log(truncateSentence("Hello how are you Contestant", 4));
console.log(truncateSentence("What is the solution to this problem", 4));
console.log(truncateSentence("chopper is not a tanuki", 5));