/**
 *  Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the
    letters of another, such as cinema, formed from iceman. 
    validAnagram ('', '') // true
    validAnagram('aaz', 'zza') // false
    validAnagram('anagram', nagaram') // true
    validAnagram("rat", "car") // false) // false
    validAnagram('awesome', awesom') // false
    validAnagram('qwerty', qeywrt') // true
    validAnagram('texttwisttime! timetwisttext') // true
 */

// using freqCounter approach
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let lookup = {};
    for (let val of str1) {
        lookup[val] = (lookup[val] || 0) + 1;
    }
    for(let key of str2) {
        if(!lookup[key]) {
            return false;
        } else {
            lookup[key] -= 1;
        }
    }
    return true;
}