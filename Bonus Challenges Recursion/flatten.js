// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values attened.

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

// using seperate function to do the recursion

function flatten(arr) {
    let flattened = [];

    function flattenHelper(inp) {
        if(inp.length === 0) return;
        for(let val of inp) {
            if(val instanceof Array) {
                flattenHelper(val)
            } else {
                flattened.push(val)
            }
        }
    }

    flattenHelper(arr)
    return flattened;
}

// using a singular function

function flattenV2(arr) {
    let flattened = [];
    for(let val of arr) {
        if(val instanceof Array) {
            flattened = flattened.concat(flatten(val))
        } else {
            flattened.push(val)
        }
    }
    return flattened
}

console.log(flattenV2([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))