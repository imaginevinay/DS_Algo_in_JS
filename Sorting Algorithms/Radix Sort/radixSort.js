function radixSort(nums) {
    let maxDigitCount = maxDigit(nums);
    // looping over the number till number of maxdigitCount;
    for(let k= 0; k< maxDigitCount; k++) {
        let bucket = Array.from({length: 10}, ()=> []);
        for(let i=0; i< nums.length; i++) {
            let digit = getDigit(nums[i],k);
            bucket[digit].push(nums[i])
        }
        nums = [].concat(...bucket);
    }
    return nums
}



function maxDigit(arr){
    let max = 0;
    for(let i of arr) {
        max = Math.max(max, digitCount(i));
    }
    return max;
}

function digitCount(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getDigit(num, pos) {
    return Math.floor(Math.abs(num) / Math.pow(10,pos)) % 10;
}



console.log(radixSort([123,234,123,3,345,123,567,2344,12312,3,123,123,34,534534,5345,345,34,5]))

