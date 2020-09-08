// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

const maxSequence = (arr) => {
    let max = arr[0];
    let start = 0;
    let end = 0;
    for (let i = 0; i < arr.length; i++) {
        let testMax = 0;
        for (let j = i; j < arr.length; j++) {
            testMax += arr[j];
            if (testMax > max) {
                max = testMax;
                start = i;
                end = j;
            }
        }
    }
    if (max < 0) {
        return 0;
    }
    return max ? max : 0;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4]));
// should be 6: [4, -1, 2, 1]

console.log('\n Next:');
// Jumbo Juice makes a fresh juice out of fruits of your choice.Jumbo Juice charges $5 for regular fruits and $7 for special ones. Regular fruits are Banana, Orange, Apple, Lemon and Grapes. Special ones are Avocado, Strawberry and Mango. Others fruits that are not listed are also available upon request. Those extra special fruits cost $9 per each. There is no limit on how many fruits she/he picks.The price of a cup of juice is the mean of price of chosen fruits. In case of decimal number (ex. $5.99), output should be the nearest integer (use the standard rounding function of your language of choice).

const mixFruit = (arr) => {
    const pricing = {
        "banana": 5,
        "orange": 5,
        "apple": 5,
        "lemon": 5,
        "grapes": 5,
        "avocado": 7,
        "strawberry": 7,
        "mango": 7,
        "other": 9
    };
    let total = 0;
    arr = arr.map((element) => { return element.toLowerCase(); });
    arr.forEach((fruit) => {
        if (pricing.hasOwnProperty(fruit)) {
            total += pricing[fruit];
        }
        else {
            total += pricing["other"];
        };
    });
    return Math.round(total / arr.length);
}

console.log(mixFruit(['Mango', 'Banana', 'Avocado'])); //the price of this juice bottle is (7+5+7)/3 = $6($6.333333...)