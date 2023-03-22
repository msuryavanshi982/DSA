//=>>> Geeks for Geeks : Find unique elements in an array:->

function duplicate(arr, n) {
    let mp = new Map()
    for (let i = 0; i < n; i++) {
        let x = arr[i]
        if (mp.has(x)) {
            mp.set(x, mp.get(x) + 1)
        }
        mp.set(x, 1)
    }
}
let ans = []
mp.forEach((value, key) => {
    if (value > 1) {
        ans.push(key)
    }
});
if (ans.length == 0) {
    ans.push(-1)
}
ans.sort(function (a, b) {
    return a - b
})
return ans;


// Geeks for Geeks : Count pairs with given sum:

//BruteForce:=>
function getPairsCount(arr, n, k) {
    let ans = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let sum = arr[i] - arr[j]
            if (sum == k) {
                ans++
            }
        }
    }
    return ans;
}
//Optimize:=>

function getPairsCount(arr, k) {
    let ans = 0;
    let mp = new Map()
    for (let i = 0; i < n; i++) {
        let x = arr[i]
        let y = k - x
        if (mp.has(y)) { // to add in all
            ans += mp.get(y)
        }
        if (mp.has(x)) { // to add freq
            mp.set(x, mp.get(x) + 1)
        } else {
            mp.set(x, 1);
        }
    }
    return ans;
}


//=> Leetcode - 412 : Fizz Buzz=>

let fizBuzz = function (x) {
    let ans = []
    for (let i = 0; i < n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            ans.push("fizzBuzz")
        } else if (i % 3 == 0) {
            ans.push("fizz")
        } else if (i % 5 == 0) {
            ans.push("Buzz")
        } else {
            ans.push(i + "")
        }
    }
    return ans;
}