// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

function capitalizeFirst(arr) {
    let capitalized = [];
    function helper(inp) {
        if(inp.length === 0) return;
        capitalized.push(inp[0].charAt(0).toUpperCase() + inp[0].slice(1));
        return helper(inp.splice(1))
    }

    helper(arr)
    return capitalized;
}

console.log(capitalizeFirst(['car','taco','banana']))