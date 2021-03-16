// optimization : if the array is sorted or no swap are being made then no need to do extra comparisons



function bubbleSort(arr) {
    let noSwap;
    console.time('start')
    for (let i = arr.length; i> 0; i--) {
        noSwap = true;
        for(let j = 0; j< i-1; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwap = false;
            }
        }
        if(noSwap) break;
    } 
    console.timeEnd('start')
    return arr;
}

var data = Array.apply(null, {length : 100000}).map(Function.call, Math.random)
console.log(bubbleSort(data));