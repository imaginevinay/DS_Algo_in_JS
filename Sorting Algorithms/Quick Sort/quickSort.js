// using recursion
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function pivotHelper(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let swapIdx = start;
    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, i, swapIdx)
        }
    }
    swap(arr, start, swapIdx)
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right){
        let pivotIndex = pivotHelper(arr, left, right); // returns index of pivot
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}


var data = Array.apply(null, {length : 100000}).map(Function.call, Math.random)

console.log(quickSort(data))