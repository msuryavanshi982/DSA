function binarySearch(arr, start, end, num) {


    if (end >= start) {

        let mid = Math.round((start + end) / 2)
        if (num == arr[mid]) return mid
        else if (num > arr[mid]) return binarySearch(arr, mid + 1, end, num)
        else if (num < arr[mid]) return binarySearch(arr, start, mid - 1, num)


    }

    return false

}
let arr = [1, 2, 3, 4, 5, 6]
let n = arr.length
let result = binarySearch(arr, 0, n - 1, 5)
console.log(result)


//=========================================================>>>

/*function binarySearch(arr,target){
let min=0
let max=arr.length-1
while(min<=max){
    let mid=Math.floor((min+max)/2)
    if(arr[mid]===target){
        return mid
    }else if (arr[mid]<target){
        min=mid
    }else if(arr[mid]>target){
        max=mid
    }
}
return false
}
const result=binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],7)
console.log(result)*/