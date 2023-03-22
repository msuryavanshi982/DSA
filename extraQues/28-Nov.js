// Ques:1= Given an array like (e.g [1,1,2,22,3,5,11,2]) . Filter out duplicate elements and give unique elemens in arr:=>
// O/p= [22,3,5,11]

/* Pseudo code=>
step:1 map for frequency counting
step:2 iterate over this map and whenever the frequency count is 1, push it into the result.
{
    1:2,
    2:2,
    22:1,
    5:1,
    11:1
}
=> loop over this map : for of over map & then pair[1]==1;
res.push(pair[1])
*/

// solution:

//let Arr =[1,1,2,22,3,5,11,2];

function uniqueNums(Arr){ 
    let map = new Map()
for(nums of Arr){
    if(map.has(nums)){
      map.set(nums, (map.get(nums)+1))
    }
    else{
        map.set(nums,1)
    }
}
let result=[]
for([key,values] of map){
    if(values==1){
        result.push(key)
    }
}
return result;
}

console.log(uniqueNums([1,1,2,22,3,5,11,2]))

//=========================================================================>>>

// Ques:2=> Find unique pairs of elements (inside an array) whose sum is equal to a target K=>>>

let arr=[7,2,4,6,9,11,34, 3,2,1]
let k=5;
//return res = (2,3), (4,1)
function uniquePairs(Arr, k){ 
    let map = new Map()
for(nums of Arr){
    if(map.has(nums)){
      map.set(nums, (map.get(nums)+1))
    }
    else{
        map.set(nums,1)
    }
}
let result=[]
for(ele of map){
    let product=k-ele[0] ;
    if(map.has(product)){
        result.push([ele[0], product])
       // map.delete(product)
    }
}
return result;
}

console.log(uniquePairs(arr, k ))


/*
=> Pseudo code=>
frequency ocunter map=>>>
step:1=> create a map(frequency counter) 
step:2=> iterate over the map and check if(k pair[0]) is present in the loop 
=> if yes, then add the pair in a seperate map at the time of adding , check if the pair is already exist in the map . 
=> if not , then go to next element.

result pair ={
    2:3,
    4:1
}
*/

//=====================================================================>>>

// Ques:3=> Take an input and check whether the input is an integer or not =>>
/*
function checkInt(inp){

}

=> checkInt(12,34)=>false
=> checkInt("addsum")=>false
=> checkInt([23,34])=>false
=> checkInt(78)=> true


====>>> Techniues=>>>

=> Approach:1=>
-> if the input is an integer then every character should be digit i.e. every character shouyld be among 0 to 9 
step: have a seperate array , check if 1st character is "-":
-> if yes, check if all the remaining characters lie among[0,1,2,3,4,5,6,7,8,9] 
-> if no, check all character (i=0 to length-1)

=> Approach:2
//regex:

step-1: define the proper regex for an integer
-> test if the input falls in this pattern or not.

let pattern /^?[0-9]+$/;
let result = pattern.test(inp)

*/
 
function checkInt(inp){
    let pattern =(/^-?[0-9]+$/);
    let result = pattern.test(inp)
    return result;
}
console.log(checkInt("meenakshi"))

//========================================================================>>>

//Ques:4=> Take a number and if number is multiple of 3 print "Foo".
//-> if numbers are multiple of 5 print "Bar".
//-> And if number is multiple of both 5 and 3 , ptiny "FooBar"
//-> If not a multiple of either , print noyhing.
/*
6=> foo
10=> Bar
30=> fooBar
13=>
*/ 

/*
=> Pseudo code=>
if(renmainder3==0) console.log("Foo")
if(renmainder5==0) console.log("Bar")
*/

function multiple(nums){
    let multipleOfBoth="";
    if(nums%3==0) multipleOfBoth += ("Foo") 
    if(nums%5==0) multipleOfBoth += ("Bar") 
    return multipleOfBoth;
}
console.log(multiple(5))


//====================================================================>>>

// geeks for geeks : Reverse each word in a given string:=>
let s="i.like.this.program.very.much"
// o/p : i.ekil.siht.margorp.yrev.hcum

// function reverseword(w){
//     //let w=s
//     let i=0;
//     let j=w.length-1;
//     while(i<j){
//         let temp =w[i]; 
//         w[i]=w[j];
//         w[j]=temp;
//         i++
//         j--
//       }
//      return w
// }

// function reversewords(w){
//     let res= reverseword(w)
//     return res;
// }

// console.log(reversewords([1,1,2,1,2,1,3,6,5]))
// function reverse(w){
//     if(w.length==1)
//     return w

//     return reverse(w.slice(1))+w[0]


function reverseword(w){
    let s=""
    for(let i=w.length-1; i>=0; i--){
        s+=w[i]
    }
    return s;
}
function reversewords(s){
    let w=""
    let ans=""
    for(let i=0; i<s.length; i++){
        if(s[i]=='.'){
            w=reverseword(w)
            ans+=w
            ans+="."
            w=""
            }
            else{
                w+=s[i]
            }     
        } 
        if(w!=""){
            w=reverseword(w)
            ans+=w
        }
        return ans;
    }
    console.log(reversewords("i.like.this.program.very.much"))

//==========================================>>>
let str="hello.welcome.to.our.show"
    
function reverse(w){
    let rev=""
        for(let i=w.length-1;i>=0;i--){
            rev+=w[i]
        }
       return rev
    }
    function reverseWords(str){
        let s="",ans=""
        for(let i=0;i<str.length;i++){
            if(str[i]=="."){
            s=reverse(s)
            ans+=s
            ans+="."
            s=""
        }else{
            s+=str[i]
        }
       
    }
    if(s!=""){
        s=reverse(s)
        ans+=s
    }
    return ans
    }
    console.log(reverseWords(str));

    //===============================================>>>
    //leetcode :=> 442: Find all duplicates in an array:=>
    /*
    1. length-n
    2. nums arr in array (1,n)
    3. each number either appears either one or twice
    4. all number are positive
    */

    function duplicate(arr){
        const count ={};
        let ans=[];
        for(let num of arr){
            count[num]=count[num]?count[num]+1:1;
        }
        for(let counter of arr){
            if(count[counter]==2){
                ans.push(counter)
                delete count[counter]
            }
        }
        return ans;
    }
    console.log(duplicate([1,1,2,3,45,5,5,6]))

    // note => do not for of loop use on obj
  
    let array =[1,5,6,7,7,8,8,8,8,9,9]
    function duplicateEle(array){
    let answer =[]
    for(let i=0; i<array.length; i++){
        let x=Math.abs(array[i])
        let index=x-1
        if(array[index]<0){
            answer.push(x)
        }
        else{
            array[index]=array[index]*-1
        }
    }
    return answer
}
    console.log(duplicateEle(array))

    //=================================>>>>

    function findDuplicates(arr) {
        let ans = []
    
        for (let i = 0; i < arr.length; i++) {
            let x = Math.abs(arr[i])
            let index = x - 1
            if (arr[index] < 0) {
                ans.push(x)
            } else {
                arr[index] = arr[index] * -1
            }
        }
        return ans
    }
    let res = [1,5,6,7,7,8,8,8,8,9,9]
    console.log(findDuplicates(res))
