// First Letter Capital 
// ['hello', 'hii', 'who', 'hey']=> [ 'Hello', 'Hii', 'Who', 'Hey' ]

function capitaliseFirst(arr) {
    const result = []

    if (arr.length == 0) {
        return []
    }

    let capt = arr[0][0].toUpperCase() + arr[0].slice(1)
    result.push(capt)
    return result.concat(capitaliseFirst(arr.slice(1)))
}
let arr = ['hello', 'hii', 'who', 'hey']
console.log(capitaliseFirst(arr))



// Reverse string Using 
// ['hello', 'who', 'string']=> [ 'olleh', 'ohw', 'gnirts' ]

function resFun(str) {

    if (str.length == 0) {
        return str
    }
    return resFun(str.slice(1)) + str[0]
}
console.log(resFun('122345'))

function reverseString(str) {
    let res = []

    if (str.length == 0) {
        return []
    }
    res.push(resFun(str[0]))
    return res.concat(reverseString(str.slice(1)))

}
let str = ['hello', 'who', 'string']
console.log(reverseString(str))


//  Print Duplicates in array

function duplicateEle(arr) {
    let map = new Map()
    for (let ele of arr) {
        if (!map.has(ele)) {
            map.set(ele, 1)
        }
        else {
            map.set(ele, map.get(ele) + 1)
        }
    }
    console.log(map)
    let ans = []
    for (let arr of map) {
        console.log(arr)
        if (arr[1] >= 2) {
            ans.push(arr[0])
        }
    }
    return ans
}
let array = [2, 3, 4, 4, 1, 1]
console.log(duplicateEle(array))