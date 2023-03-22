// Frequency Counter Method:=>

let arr = [1, 2, 7, 3, 4, 2, 1]

let mp = new Map() // has , get ,set

for (let i = 0; i < arr.length; i++) {
    let x = arr[i]
    if (mp.has(x)) { // already present
        mp.set(x, mp.get(x) + 1)
    } else { // not present
        mp.set(x, 1)
    }
}
console.log(mp.get(2));

mp.forEach((value, key) => {
    console.log("key=", key, "and value=", value)
})


// Maximum repeating  number : GFG =>

function maxRepeating(arr,n,k){
    let mp=new Map();

    for(let i=0; i<n; i++){
        let x=arr[i]
        if(mp.has(x)){
            mp.set(x,mp.get(x)+1)
        }
        else{
            mp.set(x,1)
        }
    }
    let maxfreq=0;
    let ans=0;
    mp.forEach((value,key)=>{
        if(value>maxfreq){
            maxfreq=value
            ans-key
        }else if(value==maxfreq){
            if(key<ans){
                ans=key
            }
        }
    })
    return ans
}