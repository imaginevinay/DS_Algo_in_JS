// Given an array of integers and a number, write a function called maxSubArraySum,
// which finds the maximum sum of a subarray with the length of the number passed
// to the function. Note that a subarray consist of consecutive elements from the
// original array. In the first example below, [100, 200, 300] is a subarray of the
// original array, but [100,300] is not.

// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) // 39
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2) // 5
// maxSubarraySum([2,3], 5) // null

// Constraints:
// Time Complexity - O(N)
// Space Complexity - O(1)
function maxSubArraySum(arr, num) {
    let tempSum = 0;
    let maxSum = 0;
    for (let i = 0; i< num; i ++) {
        maxSum +=  arr[i];
    }
    tempSum = maxSum;
    for (let j = num; j < arr.length; j ++) {
        tempSum = tempSum - arr[j - num] + arr[j];
        maxSum = Math.max(maxSum, tempSum)
    }

    return maxSum;
}

console.log(maxSubArraySum([100,200,300,400], 2))