function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return mergeArrays(left, right);
}

function mergeArrays(arr1, arr2) {
    let i = 0;
    let j = 0;
    let merged = [];
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        }
        if(arr1[i] > arr2[j]) {
            merged.push(arr2[j]);
            j++;
        }
    }
    // merge remaining items in either array
    while(i < arr1.length) {
        merged.push(arr1[i]);
        i++
    }
    
    while(j < arr2.length) {
        merged.push(arr2[j]);
        j++
    }

    //return merged array;
    return merged
}


var data = Array.apply(null, {length : 100000}).map(Function.call, Math.random)

console.log(mergeSort(data))