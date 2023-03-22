var merge = function(nums1, m, nums2, n) {
let first=m-1;
    let second=n-1;
    let i=nums1.length-1
    while(second>=0){
        let firstVal=nums1[first]
        let secondVal=nums2[second];
        if(firstVal>secondVal){
            nums1[i]=firstVal;
            i--
            first--
        } else {
            nums1[i]=secondVal;
            i--;
            second--;
        }
    }
    return nums1
}

console.log(merge([2,3,4,5,0,0,0],4,[2,3,7],3));

//=======================================>>>

function solution(a,arr) {
    let first, second ;
      if(arr[0]>arr[1]){
          first=arr[0]
          second=arr[1]
      }else {
          first=arr[1]
          second=arr[0]
      }
      for(let i=2; i<a; i++){
          if(arr[i]>first){
              second=first;
              first=arr[i]
          }
          else if(arr[i]>second && arr[1] != first){
              second = arr[i]
          }    
      }
      return first+second;
  }
  

  console.log(solution(3,[7,2,3]))