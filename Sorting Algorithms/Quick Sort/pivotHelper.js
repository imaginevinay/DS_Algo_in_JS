  function pivotHelper(arr, start = 0, end = arr.length + 1) {
    let pivot = arr[start];
    let swpIdx = start;
    for(let i = 1; i < arr.length; i++) {
        if(pivot > arr[i]) {
            swpIdx ++;
            swap(arr, i, swpIdx);
            console.log('after swap',arr)
        }
    }
    // finaly swap the pivot value;
    swap(arr, start, swpIdx)
    console.log('final swap',arr)
    return swpIdx; 
  }

  function swap(arr, i, j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }

  console.log(pivotHelper([5,2,1,8,4,7,6,3]))