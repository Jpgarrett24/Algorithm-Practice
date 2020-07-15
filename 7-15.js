/**
 * Send a feelingless automaton test driver to drive your functions to see if it crashes to avoid personal injury.
 * Algos should be ran with node or nodemon because the console logs are clipped in debugger
 * @param {Array<Function>} testFuncs - Array of functions to test, alsow ill work with a single function instead of array
 * @param {Array<{ arguments: Array, expected: any }>} testCases - Array of objects with the specified keys: array of "arguments" to pass to each function and an "expected" output for those arguments, also will work with a single test case instead of array
 */
function testDriver(testFuncs = [], testCases = []) {
    // allow 1 or an array of testFuncs and testCases to be passed in, if they aren't an array, put the 1 item passed in
    // into an array so the below loops will work either way
    let funcs = testFuncs;
    let cases = testCases;

    if (typeof testFuncs === "function") {
        // it's not an array, so put the 1 function into an array so below loop will work
        funcs = [testFuncs];
    }

    if (Array.isArray(testCases) === false) {
        cases = [testCases];
    }

    for (let i = 0; i < funcs.length; i++) {
        const func = funcs[i];
        console.log("\n" + "*".repeat(85));
        console.log(`Testing ƒunction: ${func.name}\n`);

        // execute each test case against each function
        for (let j = 0; j < cases.length; j++) {
            // object destructure syntax for object at j index to put the values for the "arguments" and "expected" keys into vars of the same name
            let { arguments, expected } = cases[j];

            if (Array.isArray(arguments) === false) {
                // only 1 arg, it needs to be in an array so we can spread the array later
                arguments = [arguments];
            }

            const caseNumPrefix = `Case ${j + 1}.`;

            try {
                // pass the arguments into the func by spreading them apart as comma separated arguments to get the actual returned value
                const actual = func(...arguments);

                console.log(`${caseNumPrefix} Expected:`, expected);
                console.log(`${caseNumPrefix} Actual  :`, actual);
            } catch (err) {
                console.log(`Error on ${caseNumPrefix}`);
                console.log(err);
            }

            const lastFunc = i === funcs.length - 1;
            const lastCase = j === cases.length - 1;
            const lastCaseAndNotLastFunc = lastCase && !lastFunc;

            if (lastCaseAndNotLastFunc === false) {
                // for aesthetic reasons, log this unless it's the last case being tested on any function but the last one
                console.log("-".repeat(85));
            }
        }
    }
}

module.exports = {
    testDriver,
};

/*
  Given two arrays of ints
  return the symmetric differences, (aka disjunctive union)
    - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
      think of a venn diagram filled in except the ovlerapping middle part is not filled in (the intersection is excluded)
    - i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)
  Venn Diagram Visualization: https://res.cloudinary.com/practicaldev/image/fetch/s--Kuq7OH5V--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/eq8zrfkbs9jntiimwjk9.png
*/

const test1SetA = [1, 2];
const test1SetB = [2, 1];
const expected1 = [];
// Explanation: 1 and 2 are in both arrays so are excluded

const test2SetA = [1, 2, 3];
const test2SetB = [4, 5, 6];
const expected2 = [1, 2, 3, 4, 5, 6];
// Explanation: neither array has shared values, so all are included

const test3SetA = [4, 1, 2, 3, 4];
const test3SetB = [1, 2, 3, 5, 5];
const expected3 = [4, 5];
/* 
  Explanation: 1, 2, and 3 are shared so are excluded
    4 and 5 are included because they exist only in 1 array, but have duplicates, so only one copy of each is kept
*/

const testCases = [
    { arguments: [test1SetA, test1SetB], expected: expected1 },
    { arguments: [test2SetA, test2SetB], expected: expected2 },
    { arguments: [test3SetA, test3SetB], expected: expected3 },
];
testDriver([deltaOfTwoSets], testCases);

function deltaOfTwoSets(setA, setB) {
    let result = [];
    let shared = [];
    shared = setA.filter((value) => { return (setB.includes(value)) });
    for (let i = 0; i < setA.length; i++) {
        if (!shared.includes(setA[i]) && !result.includes(setA[i])) {
            result.push(setA[i]);
        }
    }
    for (let i = 0; i < setB.length; i++) {
        if (!shared.includes(setB[i]) && !result.includes(setB[i])) {
            result.push(setB[i]);
        }
    }
    return result;
};