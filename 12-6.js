// You own a Goal Parser that can interpret a string command.The command consists of an alphabet of "G", "()" and / or "(al)" in some order.The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al".The interpreted strings are then concatenated in the original order.
// Given the string command, return the Goal Parser's interpretation of command.

// Example 1:
// Input: 
const command1 = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
//     () -> o
//         (al) -> al
// The final concatenated result is "Goal".
//     Example 2:

// Input: 
const command2 = "G()()()()(al)"
// Output: "Gooooal"
// Example 3:

// Input: 
const command3 = "(al)G(al)()()G"
// Output: "alGalooG"

const interpret = (command) => {
    let array = command.split("");
    let result = "";
    for (i = 0; i < array.length; i++) {
        let concat = "";
        if (array[i] == "G") {
            concat = "G";
        }
        else if (array[i] == "(" && array[i + 1] == ")") {
            concat = "o"
        }
        else if (array[i] == "(" && array[i + 1] == "a") {
            concat = "al"
        };
        result += concat;
    };
    return result;
};

console.log(interpret(command1));
console.log(interpret(command2));
console.log(interpret(command3));