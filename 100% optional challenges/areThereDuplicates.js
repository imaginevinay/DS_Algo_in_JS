// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any
// duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'd') // false
// areThereDuplicates('a', 'b', 'c', 'a') // true

// Restrictions:
//     Time - O(N)
//     Space - O(N)

// using freqCounter pattern
function areThereDuplicatesFreqCounter(...args) {
    let freqCounter = {};
    for(let val of args) {
        freqCounter[val] = (freqCounter[val] || 0) + 1;
    }
    for (let val in freqCounter) {
        if(freqCounter[val] > 1) {
            return true;
        }
    }
    return false;
}

// multiple pinter pattern v1 : left pointer fixed right is moving
function areThereDuplicatesmultiplePointerV1(...args) {
   let leftIndex = 0;
   let rightIndex = args.length - 1;
   while(leftIndex < rightIndex) {
       if(args[leftIndex] === args[rightIndex]) {
           return true;
       } else {
           rightIndex --;
       }
   }
   return false;
} 

// multiple pinter pattern v2 : both pointer moving
function areThereDuplicatesmultiplePointerV2(...args) {
    let leftIndex = 0;
    let nextIndex = 1;
    while(nextIndex < args.length) {
        if(args[leftIndex] === args[nextIndex]) {
            return true;
        } else {
            leftIndex ++;
            nextIndex ++;
        }
    }
    return false;
 } 

console.log(areThereDuplicatesmultiplePointerV2(1, 2, 2, 3))