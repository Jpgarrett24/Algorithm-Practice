// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

function solution(num){
    let sum = 0;
    for (i = 0; i < num; i++){
        if (i % 3 == 0 || i % 5 == 0){
            sum += i;
        }
    }
    return sum
}
console.log(solution(10))

// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str){
    result = ''
    for (let i=0; i < str.length; i++){
        if (str[i] !== 'a' && str[i] !== 'e' && str[i] !== 'i' && str[i] !== 'o' && str[i] !== 'u' && str[i] !== 'A' && str[i] !== 'E' && str[i] !== 'I' && str[i] !== 'O' && str[i] !== 'U'){
            result += str[i];
        }
    }
    console.log(result);
    str = result;
    return str;
}
console.log(disemvowel("This website is for losers LOL!"))
console.log(disemvowel("Peanut Butter Cups"))

// In this kata you will create a function that takes a list of non-negative integers and strings and 
// returns a new list with the strings filtered out.
// Examples:
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
    result = [];
    for (let i = 0; i < l.length; i++){
        if (typeof l[i] !== 'string'){
            result.push(l[i])
        }
    }
    return result;
}
console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));
console.log(filter_list([1,2,'aasf','1','123',123]));

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
// No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
    smallest = Number.POSITIVE_INFINITY;
    second = Number.POSITIVE_INFINITY;
    for (let i = 0; i < numbers.length; i++){
        if (smallest > numbers[i]){
            smallest = numbers[i];
        }
        if (numbers[i+1] == smallest){
            second = numbers[i+1];
        }
    }
    for (let i = 0; i < numbers.length; i++){
        if (second > numbers[i] && numbers[i] > smallest){
            second = numbers[i];
        }
    }
    return smallest + second;
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]))