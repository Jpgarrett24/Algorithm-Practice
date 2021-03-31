// Given non-negative integer N, for each interger i starting at 1 to integer n, print out: 
// "FizzBuzz" if i is a multiple of 3 AND 5
// "Fizz" if i is a multiple of 3 but not 5
// "Buzz" if i is a multiple of 5 but not 3
// or the integer if i is not a multiple of either 3 nor 5.

function fizzBuzz(n) {
    for (i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        }
        else if (i % 3 === 0) {
            console.log('Fizz');
        }
        else if (i % 5 === 0) {
            console.log('Buzz');
        }
        else console.log(i);
    }
    return
}

fizzBuzz(15)