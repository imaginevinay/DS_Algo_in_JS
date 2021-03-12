/**
 * Problem : WAP called same which accepts 2 arrays. The function should return true if every value in array has corresponding value squared inthe 2nd array. Also the frequency of elemnts should match in both arrays.
 * same([1,2,3], [4,1,9])  ** returns true
 * same([1,2,3],[1,9]) ** returns false
 * same([1,2,1], [4,4,9]) ** returns false
 */

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }

  let freqCounter1 = {};
  let freqCounter2 = {};
  for (let val of arr1) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1;
  }

  for (let key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) {
      return false;
    }
    if (freqCounter1[key] !== freqCounter2[key ** 2]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3], [1, 9]))