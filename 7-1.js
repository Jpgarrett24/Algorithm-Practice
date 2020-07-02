// You are going to be given an array of integers. 
// Your job is to take that array and find an index N where the sum of the integers to the 
// left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

function findEvenIndex(arr){
    var SumLeft = 0;
    for (let i = 0; i < arr.length; i++){
        SumRight = 0;
        for (let j = i + 1; j < arr.length; j++){
            SumRight += arr[j];
        }
        if (SumLeft == SumRight){
            return i;
        }
        else{
            SumLeft += arr[i];
        }
    }
    return -1
}
console.log(findEvenIndex([1,2,3,4,3,2,1]));
console.log(findEvenIndex([1,100,50,-51,1,1]));
console.log(findEvenIndex([20,10,-80,10,10,15,35]));


// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    var vowelsCount = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
            vowelsCount += 1
        }
    }
    return vowelsCount;
}
console.log(getCount('abracadabra'));
console.log(getCount('kallimizzou'));


// You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
// Write a method that takes the array as an argument and returns this "outlier" N.
// Examples: [2, 4, 0, 100, 4, 11, 2602, 36]  Should return: 11 (the only odd number) ------ [160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)

function findOutlier(integers){
    odd = 0;
    even = 0;
    for (let i = 0; i < integers.length; i++){
        if (integers[i] % 2 == 0){
            even += 1;
        }
        else{
            odd += 1;
        }
    }
    if (even > 1){
        for (let i = 0; i < integers.length; i++){
            if (integers[i] % 2 !== 0){
                return integers[i]
            }
        }
    }
    else{
        for (let i = 0; i < integers.length; i++){
            if (integers[i] % 2 == 0){
                return integers[i]
            }
        }
    }
}

// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
    if(str == ''){
        return true;
    }
    RegExp = /[xX]/g
    var x = str.match(RegExp);
    RegExp = /[oO]/g
    var y = str.match(RegExp);
    if (x == undefined || y == undefined){
        return false;
    }
    if (x.length == y.length){
        return true;
    }
    else{
        return false;
    }
}
console.log(XO('ooxx'))
console.log(XO('xooxx'))
console.log(XO('ooxXm'))
console.log(XO('zpzpzpp'))
console.log(XO('zzoo'))

// Number of people in the bus
// There is a bus moving in the city, and it takes and drop some people in each bus stop.
// You are provided with a list (or array) of integer arrays (or tuples). 
// Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

function number(busStops){
    var passengers = 0;
    for (let i = 0; i < busStops.length; i++){
        passengers += busStops[i][0];
        passengers -= busStops[i][1];
    }
    return passengers
}
console.log(number([[10,0],[3,5],[5,8]]));
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]));
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]));