// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents. 
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

// Complexity introduced by recursive nature: O(N)
// Complexity introduced by function: O(1)
// Memory allocated by function: O(1)

function power(base, exp) {
    if(exp === 1) return base;
    return base*power(base, exp-1);
}

console.log(power(2,3))