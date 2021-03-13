// Write a function called findLongestSubstring which accepts a string and
// returns the length of the longest substring with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6

// Time Complexity - O(N)

// Sliding Window pattern + Frequency counter pattern
function findLongestSubstring(str) {
    let start = 0;
    let maxLength = 0;
    while(start < str.length) {
        let windowLength = 0;
        let end = start;
        let freqCounter = {};
        while(end < str.length) {
            let char = str[end];
            if(freqCounter[char]) {
                break;
            } else {
                freqCounter[char] = 1;
                // increasing window size
                end++;
                windowLength++;
            }
        }
        maxLength = Math.max(maxLength, windowLength)
        // reducing window size
        start++;
    }

    return maxLength
}


console.log(findLongestSubstring('rithmschool'))