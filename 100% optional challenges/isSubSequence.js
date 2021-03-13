// Write a function called isSubsequence which takes in two strings and checks whether
// the characters in the first string form a subsequence of the characters in the second
// string. In other words, the function should check whether the characters in the first
// string appear somewhere in the second string, without their order changing.

// Examples:
// isSubsequence('hello', 'by hecatl in lo world') // true
// isSubsequence('sing', 'sting') // true
// isSubsequence('abc', 'abracadabra') // true
// isSubsequence('abc', 'acb') // false

// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

function isSubSequence(str1, str2) {
    if (str1.length > str2.length) {
        return false;
    }
    let str1Index = 0;
    for(let str2Index = 0; str2Index < str2.length; str2Index++) {
        if(str1[str1Index] === str2[str2Index]) {
            str1Index ++;
        }
        if(str1Index === str1.length) {
            return true;
        }
    }
    return false;
}

console.log(isSubSequence('abc', 'acb'))