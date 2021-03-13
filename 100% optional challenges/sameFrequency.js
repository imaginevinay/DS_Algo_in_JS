// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities: O(N)

function sameFrequency(num1, num2) {
    let num1Str = num1.toString();
    let num2Str = num2.toString();
    if (num1Str.length !== num2Str.length) {
        return false;
    }
    let num1Lookup = {};
    for (let val of num1Str) {
        num1Lookup[val] = (num1Lookup[val] || 0) + 1;
    }
    for(let val of num2Str) {
        if(!(num1Lookup[val])) {
            return false
        }
    }
    return true;

}

console.log(sameFrequency(1000, 100))