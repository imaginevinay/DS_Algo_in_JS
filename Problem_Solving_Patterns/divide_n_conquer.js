// Binary search implementation

function binarySearch(arr, num) {
    let min = 0;
    let max = arr.length - 1;
    while(min <= max) {
        let middle = Math.floor((min+max)/ 2);
        if(arr[middle] < num) {
            min = middle + 1;
        } else if (arr[middle] > num) {
            max = middle - 1;
        } else {
            return middle
        }
    }
    return -1;
}

// time complexity => O(log N)