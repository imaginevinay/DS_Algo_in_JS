// Linear Search
function linearSearch(arr, val) {
    for (let i in arr) {
        if(arr[i] === val) {
            return i;
        }
    }
    return -1;
}