function maxSumPair(arr) {
  let max = 0;
  let sMax = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      sMax = max;
      max = arr[i];
    } else if (arr[i] > sMax) {
      sMax = arr[i];
    }
  }
  console.log(max,sMax)
  return max + sMax;
}


let res = maxSumPair([1, 2, 3, 4]);
console.log(res)