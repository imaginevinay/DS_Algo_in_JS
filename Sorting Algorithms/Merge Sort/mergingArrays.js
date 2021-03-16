
function mergeArray(arr1, arr2) {
    let merged = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            merged.push(arr1[i])
            i++;
        } else if (arr1[i] > arr2[j]) {
            merged.push(arr2[j]);
            j++;
        }
    }

    // now whatever is left in either array push them into merged array
    while(j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }
    while(i < arr1.length) {
        merged.push(arr1[i]);
        i++
    }
    return merged;
}


console.log(mergeArray([1,3,4,10],[5,6,7,8]))