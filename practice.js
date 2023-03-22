// // let arr = [23,5,4,2,1,33,56];
// // function buySell(arr){
// //     let profit =0;
// //     let buy = arr[0];
// //     for(let i=1; i<arr.length; i++){
// //         if(buy>arr[i]){
// //         buy=arr[i]
// //     }
// //         else if(profit<arr[i]-buy){
            
// //             profit = arr[i]-buy
// //         }
// //     }
// //     return profit;

// // }

// // console.log(buySell(arr))



function largest(arr){
    let max = 0;
    let smax= 0;
    for(let i =0; i<=arr.length-1; i++){
        if(arr[i]>max){
            smax = max;
            max= arr[i];
        }
    }
    return smax;
}

console.log(largest([3,21,3,4,5,57,65,23,41,7]));


function anagram(str1, str2){
    
    if(str1.length!==str2.length) return false;

    // let s1=str1.split('').sort().join('');
    // let s2=str2.split('').sort().join('');

    // if(s1!==s2) return false;
    let obj ={};
    for(let char of str1){
        obj[char]=(obj[char]||0)+1
    }
    for(let key of str2){
        if(!obj[key]) return false;
        else{
            obj[key]=(obj[key]||0)-1
        }
    }


    return true;
   
}

console.log(anagram("hello", "elloi"))