//https://leetcode.com/problems/height-checker/submissions/866966224/

/**
* @param {number[]} heights
* @return {number}
*/
var heightChecker = function(h) {
  
   let hashArr = new Array(101).fill(0);
 
   for(let i=0;i<h.length;i++)
   {
       hashArr[h[i]]++;
   }
 
   let indexOfHashArr =0;
   let ans = 0;
 
   for(let i=0;i<h.length;i++){
 
           while(hashArr[indexOfHashArr] == 0)
              { indexOfHashArr++;}
 
           if(h[i] != indexOfHashArr)
             { 
                 ans++;
             }
          
            hashArr[indexOfHashArr]--;
   }
   return ans;
};



//https://leetcode.com/problems/boats-to-save-people/description/

/**
* @param {number[]} people
* @param {number} limit
* @return {number}
*/
var numRescueBoats = function(p, limit) {
  
   p.sort((a,b) => a-b);
 
   let low = 0;
   let high = p.length -1;
   let boatsCount =0;
 
   while(low <= high){
 
       if(p[low] + p[high] <= limit)
           {
               boatsCount++;
                low++;
                high--;
           }
 
       else{
            high--;
            boatsCount++;
       }
   }
   return boatsCount;
 
   //TC: nlog+n
   //SC: O(1)
};



//https://leetcode.com/problems/merge-intervals/description/

/**
* @param {number[][]} intervals
* @return {number[][]}
*/
var merge = function(intervals) {
  
   let answer = [];
 
   intervals.sort((a,b) => a[0] != b[0] ? a[0]-b[0] : a[1] - b[1]);
    let prevWindow = intervals[0];
       answer.push(prevWindow);
 
    for(let i=0; i< intervals.length; i++){
          
           let currWindow = intervals[i];
 
           if(currWindow[0] <= prevWindow[1])
               {
                   prevWindow[1] = Math.max(currWindow[1] , prevWindow[1]);
               }
 
           else{
               answer.push(currWindow);
               prevWindow = currWindow;
           }
    }
 
   return answer;
 
   //TC: nlogn +n
   //SC: O(n*2) -> o(n)
};
 
 
 

//https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/description/

//to do using median 






// HomeWork
// https://leetcode.com/problems/majority-element/
// https://leetcode.com/problems/majority-element-ii/description/
// https://leetcode.com/problems/valid-anagram/description/


// https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/description/

/**
* @param {number[]} nums
* @return {number}
*/
var minMoves2 = function(nums) {
  
   nums.sort( (a,b )=> a-b);
 
   let n = nums.length;
 
   let median = nums[Math.floor(n/2)];
 
   let ans = 0;
   for(let i = 0;i< n;i++){
           ans+= Math.abs(nums[i] - median);
   }
 
   return ans;
 
};




// https://leetcode.com/problems/peak-index-in-a-mountain-array 


/**
* @param {number[]} arr
* @return {number}
*/
var peakIndexInMountainArray = function(arr) {
  
   let n = arr.length;
   let low = 0;
   let high = n-1;
 
   while(low < high){
         let mid = low + Math.floor((high-low)/2);
 
         if(arr[mid] < arr[mid+1])
           low = mid+1;
 
         else
           high = mid;
   }
 
   return low;
 
   //TC: O(logn)
   //SC: O(1)
};




// https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/ 
/**
* @param {number[]} skill
* @return {number}
*/
var dividePlayers = function(skill) {
 
   // skill.sort((a,b) => a-b);
 
   // let n = skill.length;
   // let low = 0;
   // let high = n-1;
   // let eachGrpSum = skill[0] + skill[n-1];
   // let ans = 0;
 
   // while(low < high){
   //         if(skill[low] + skill[high] == eachGrpSum )
   //             ans+= skill[low] * skill[high];
 
 
   //         else{
   //             return -1;
   //         }
 
   //         low++;
   //         high--;
   // }
 
   // return ans;
 
   //TC: O(nlogn + n/2) ~ O(nlogn)
   //SC: O(1)
 
 
 
 
   //approach 2 -> using map
   let map = new Map();
 
   let n = skill.length;
   let totalSum = 0;
 
   for(let i=0;i<n;i++){
       totalSum+= skill[i];
       map.set(skill[i] , (map.get(skill[i]) || 0) +1);
   }
 
   let countOfGroup = n/2;
  
   if(totalSum % countOfGroup != 0 )
       return -1;
  
   let eachGroupSum = totalSum/countOfGroup;
 
   let sumOfGroupsProd = 0;
 
   for(let i = 0;i<n;i++){
      
       let complement = eachGroupSum - skill[i];
 
       if( !map.has(complement) || map.get(complement) <=0)
           return -1;
      
       sumOfGroupsProd += complement* skill[i];
 
       map.set(complement , map.get(complement) -1);
   }
 
   return sumOfGroupsProd/2;
 
   //TC: O(N)
   //SC: O(N)
 
};




//https://leetcode.com/problems/h-index/

