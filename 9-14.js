// You need to write regex that will validate a password to make sure it meets the following criteria:
// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.
const validate = (password) => {
    let re = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/)
    return (re.test(password));
};

validate('djI38D55'); // 'djI38D55 - Expected true');
validate('a2.d412'); // 'a2.d412 - Expected false');
validate('JHD5FJ53'); // 'JHD5FJ53 - Expected false');
validate('!fdjn345'); // '!fdjn345 - Expected false');
validate('jfkdfj3j'); // 'jfkdfj3j - Expected false');
validate('123'); // '123 - Expected false');
validate('abc'); // 'abc - Expected false');
validate('Password123'); // 'Password123 - Expected true');


// Define a function that takes in two non-negative integers a and b and returns the last decimal digit of a^b. Note that a and b may be very large!
// For example, the last decimal digit of 9^7 is 9, since 9^7 = 4782969. The last decimal digit of (2^200)^(2^300), which has over 10^92 decimal digits, is 6. Also, please take 0^0 to be 1.
// You may assume that the input will always be valid.
const lastDigit = (str1, str2) => {
    return +str2 == 0 ? 1 : Math.pow(+str1.slice(-1), +str2.slice(-2) % 4 + 4) % 10;
}

lastDigit("9", "7");           // returns 9
lastDigit("4", "1")            // returns 4
lastDigit("4", "2")            // returns 6
lastDigit("9", "7")            // returns 9    
lastDigit("10", "10000000000")  // returns 0
lastDigit("1606938044258990275541962092341162602522202993782792835301376", "2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376") // returns 6