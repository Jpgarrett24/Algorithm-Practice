// create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

const permutations = (string) => {
    let result = [];
    if (string.length === 1) {
        result.push(string);
        return result;
    };
    for (let i = 0; i < string.length; i++) {
        let firstChar = string[i];
        let charsLeft = string.substring(0, i) + string.substring(i + 1);
        let inner = permutations(charsLeft);
        for (let j = 0; j < inner.length; j++) {
            if (!result.includes(firstChar + inner[j])) {
                result.push(firstChar + inner[j]);
            };
        };
    };
    return result;
}

console.log(permutations('a')); // ['a']
console.log(permutations('ab')); // ['ab', 'ba']
console.log(permutations('aabb')); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']