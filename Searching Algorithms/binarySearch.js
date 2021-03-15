function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        let middle = Math.floor((left + right)/2);
        if(arr[middle] > val) {
            right = middle --;
        } else if(arr[middle] < val) {
            left = middle ++;
        } else {
            return middle;
        }
    }
    return -1;

}