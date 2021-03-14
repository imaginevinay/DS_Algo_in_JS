// return odd values in an array

function collectOddValues(arr) {
    let result = []
    function helper(inp) {
        if(inp.length === 0) {
            return;
        }
        if(inp[0] % 2 !== 0) {
            result.push(inp[0])
        }
        helper(inp.slice(1))
    }
    helper(arr)
    return result;
}


console.log(collectOddValues([1,2,3,4,5,6,7,8,9,10]))