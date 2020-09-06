// For a given chemical formula represented by a string, count the number of atoms of each element contained in the molecule and return an object

function parseMolecule(formula) {
    const pattern = new RegExp(/(\([^\(\)]*\)|\[[^\[\]]*\]|\{[^\{\}]*\})(\d+)/, 'g');

    while (formula.match(pattern)) {
        formula = formula.replace(pattern, (_, group, multiplier) => {
            return group.slice(1, -1).repeat(multiplier);
        });
    }

    return formula.match(/[A-Z][a-z]?\d*/g).reduce((acc, m) => {
        let [_, e, q] = m.match(/([A-Z][a-z]?)(\d*)/);
        q = Number(q) || 1;
        if (e in acc) acc[e] += q;
        else acc[e] = q;
        return acc;
    }, {});
}

var water = 'H2O';
console.log(parseMolecule(water)); // return {H: 2, O: 1}

var magnesiumHydroxide = 'Mg(OH)2';
console.log(parseMolecule(magnesiumHydroxide)); // return {Mg: 1, O: 2, H: 2}

var fremySalt = 'K4[ON(SO3)2]2';
console.log(parseMolecule(fremySalt)); // return {K: 4, O: 14, N: 2, S: 4}


// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.
let nums = [1, 2, 3, 4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
let nums2 = [1, 1, 1, 1, 1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
let nums3 = [3, 1, 2, 10, 1]
// Output: [3,4,6,16,17]

function runningSums(nums) {
    let result = [];
    nums.forEach((num, idx) => {
        if (idx !== 0) {
            result.push(num + result[idx - 1]);
        }
        else {
            result.push(num);
        }
    });
    return result;
}
console.log(runningSums(nums));
console.log(runningSums(nums2));
console.log(runningSums(nums3));