// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?
// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

const cakes = (recipie, ingredients) => {
    let limit = Number.POSITIVE_INFINITY;
    for (const [key, value] of Object.entries(recipie)) {
        if (ingredients.hasOwnProperty(key)) {
            if (Math.floor(ingredients[key] / value) < limit) {
                limit = Math.round(ingredients[key] / value)
            };
        }
        else {
            limit = 0;
        };
    };
    // console.log(limit);
    return limit;
};

// must return 2
cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 });
// must return 0
cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 });

// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
const firstNonRepeatingLetter = (string) => {
    let arr = string.split('');
    let map = {};
    arr.forEach((letter) => {
        if (map.hasOwnProperty(letter.toLowerCase())) {
            map[letter.toLowerCase()] += 1;
        }
        else if (map.hasOwnProperty(letter.toUpperCase())) {
            map[letter.toUpperCase()] += 1;
        }
        else {
            map[letter] = 1;
        }
    });
    for (const [key, value] of Object.entries(map)) {
        if (value === 1) {
            console.log(key);
            return key;
        }
    }
    return "";
}

firstNonRepeatingLetter('a');
firstNonRepeatingLetter('stress');
firstNonRepeatingLetter('moonmen');