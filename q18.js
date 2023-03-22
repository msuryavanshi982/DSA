function getMissing(array, n) {
  let sum = (n * (n + 1)) / 2;
  for (let i = 0; i < array.length; i++) {
    sum = sum - array[i]; //doubt
  }
  return sum;
}
const result = getMissing([1, 2, 3, 4, 6, 7], 7);
console.log(result);

function n1(n) {
  if (n % 3 == 0 && n % 5 == 0) {
    return "c";
  } else if (n % 3 == 0) return "a";
  else if (n % 5 == 0) return "b";
  else {
    return -1;
  }
}

console.log(n1(-1));

//same
function n1(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return "a";
  } else if (n % 3 === 0) {
    return "b";
  } else if (n % 5 === 0) {
    return "c";
  } else {
    return -1;
  }
}
console.log(n1(10));

function sqrt(n) {
  for (i = 0; i < n; i++) {
    if (i * i * i == n) {
      return i;
    }
  }
  return "it is not a perfect square of any number";
}

console.log(sqrt(27));

let arr = [34, 54, 67, 78, 98];
function findmaxmin(arr) {
  let max = arr[0];
  let min = arr[arr.length - 1];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [max, min];
}
console.log(findmaxmin(arr));
