// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.
// The ith item is said to match the rule if one of the following is true:
// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

// Example 1:
// Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
// Output: 1
// Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].

// Example 2:
// Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
// Output: 2
// Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. Note that the item ["computer","silver","phone"] does not match.

const countMatches = (items, ruleKey, ruleValue) => {
    let index =
        ruleKey === 'type' ? 0 :
            ruleKey === 'color' ? 1 :
                2;
    return items.filter((item) => item[index] === ruleValue).length
};

const items = [["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]];
const ruleKey1 = 'color';
const ruleValue1 = 'silver';

const ruleKey2 = 'type';
const ruleValue2 = 'phone';

console.log(countMatches(items, ruleKey1, ruleValue1));
console.log(countMatches(items, ruleKey2, ruleValue2));




