// Write a recursive function called someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true when passed to the callback.
// Otherwise it returns false.

// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false


function someRecursive(arr, cb) {
    if(arr.length === 0) return false;
    if(cb(arr[0])) return true;
    return someRecursive(arr.splice(1), cb)
}

const isOdd = val => val % 2 !== 0;

console.log(someRecursive([4,6,8], isOdd))