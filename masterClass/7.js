// Binary search 

const funct = () => {
    let arr = [1, 2, 3, 4, 5, 5, 6, 7];
    let target = 5;
    let low = 0;
    let high = arr.length - 1;
    let mid;

    while (low <= high) {
        mid = Math.floor(low + (high - low) / 2);

        if (arr[mid] == target) {
            return mid;
        }

        else if (arr[mid] < target) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
}

console.log(funct())



const func = (arr, target) => {
    let n = arr.length;
    let low = 0;
    let high = n - 1;
    let mid;
    while (low <= high) {
        mid = Math.floor(low + (high - low) / 2);

        if (arr[mid] == target)
            return mid;

        else if (arr[low] <= arr[mid]) {
            if (target < arr[mid] && target >= arr[low]) {
                high = mid - 1;

            }
            else {
                low = mid + 1;
            }
        }

        else if (arr[mid] <= arr[high]) {
            if (target > arr[mid] && target <= arr[high]) {
                low = mid + 1

            }
            else {
                high = mid - 1;
            }
        }
    }
    return -1
}
let arr = [8, 9, 1, 2, 3, 4, 5, 7], target = 1
console.log(func(arr, target))