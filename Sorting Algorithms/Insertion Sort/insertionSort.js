function insertionSort(arr) {
    console.time('start');
    for(let i = 1; i< arr.length; i++) {
        currentVal = arr[i];
        for(var j = i-1; j>=0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
        // here we have not done arr[j] = currentVal because the j loop has completed once and now j has decremented by 1 
        //so the original position will be j+1
    }
    console.timeEnd('start')
    return arr;
}



var data = Array.apply(null, {length : 100000}).map(Function.call, Math.random)


console.log(insertionSort(data))