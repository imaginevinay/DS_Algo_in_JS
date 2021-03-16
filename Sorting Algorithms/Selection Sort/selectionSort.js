function selectionSort(arr) {
    console.time('start')
    for(let i = 0; i< arr.length; i++) {
        let min = i;
        for(let j = i+1; j< arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        if(i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    console.timeEnd('start')
    return arr;
}

var data = Array.apply(null, {length : 100000}).map(Function.call, Math.random)
console.log(selectionSort(data))