// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// example: moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

const moveZeros = (arr) => {
    let count = 0;
    let newArr = [];
    arr.forEach((element) => {
        if (element !== 0) {
            newArr.push(element);
        }
        else {
            count++;
        }
    });
    for (let i = 0; i < count; i++) {
        newArr.push(0);
    }
    arr = newArr;
    return arr;
}

const moveZeros2 = (arr) => {
    noZeros = arr.filter((element) => element !== 0);
    zeros = arr.filter((element) => element === 0);
    arr = noZeros.concat(zeros);
    return arr;
}

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
moveZeros2([false, 1, 0, 1, 2, 0, 1, 3, "a"]);


// Given a long number, return all the possible sum of two digits of it.
// For example, 12345: all possible sum of two digits from that number are:
// [ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]
// Therefore, the result must be: [ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]

const digits = (num) => {
    sNum = num.toString();
    let arr = [];
    for (let i = 0; i < sNum.length; i++) {
        arr.push(+sNum[i]);
    }
    let result = [];
    let j = 0;
    while (j < arr.length) {
        for (let x = j + 1; x < arr.length; x++) {
            result.push(arr[j] + arr[x]);
        }
        j++;
    }
    return result;
};
digits(12345);