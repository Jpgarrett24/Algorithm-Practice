/*
  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.
  # character means a backspace character.

  i.e., after processing the backspaces, are the two strings equal?

  Bonus: solve in O(n) time
*/

const S1 = "ab#c";
const T1 = "ad#c";
// Explanation: Both S and T become "ac"
const S2 = "ab##";
const T2 = "c#d#";
// Explanation: Both S and T become ""
const S3 = "a##c";
const T3 = "#a#c";
// Explanation: Both S and T become "c"
const S4 = "a#c";
const T4 = "b";
// Explanation: S becomes "c" while T becomes "b".

function backspaceCompare(S, T) {
    let newS = [];
    let newT = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '#') {
            newS.pop();
        }
        else {
            newS.push(S[i]);
        }
    }
    for (let j = 0; j < T.length; j++) {
        if (T[j] === '#') {
            newT.pop();
        }
        else {
            newT.push(T[j]);
        }
    }
    for (let x = 0; x < newS.length; x++) {
        if (newS[x] !== newT[x]) {
            return false;
        }
    }
    return true;
}

console.log(backspaceCompare(S1, T1));
console.log(backspaceCompare(S2, T2));
console.log(backspaceCompare(S3, T3));
console.log(backspaceCompare(S4, T4));