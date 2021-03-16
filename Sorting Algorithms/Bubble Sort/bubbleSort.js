// Bubble sort

function bubbleSort(arr) {
    console.time('start');
    for (let i = arr.length; i > 0; i --) {
        for(let j = 0; j < i-1; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.timeEnd('start');
    return arr;
}



var data = Array.apply(null, {length : 100000}).map(Function.call, Math.random)
console.log(bubbleSort(data))