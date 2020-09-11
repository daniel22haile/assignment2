"use strict";

/**
 * @param {string}  char is a character to checking if it's a vowel
 * @return {boolean} return true or false
 */
function isVowel(char) {
    if (char.length == 1) {
        var vowels = "aeiou";
        var isVowel = vowels.indexOf(char) >= 0 ? true : false;

        return isVowel;
    }
}
console.log(isVowel("e"))