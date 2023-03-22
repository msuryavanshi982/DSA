function merge(arr1,arr2){
    let res=[]
    let i=0,j=0
    while(i<arr1.length && j<arr2.length){  // compare 
      if(arr1[i]<arr2[j]){
        res.push(arr1[i])
        i++
      }else{
        res.push(arr2[j])
        j++
      }
    }
      while(i<arr1.length){  //remaing
        res.push(arr1[i])
        i++
      }
      while(j<arr2.length){ ///remaing
        res.push(arr2[j])
        j++
      
    }
    return res 
    }          //       i               j
    console.log(merge([100,2,3,40],[50,963]))  
    console.log(merge([100],[50,963]))
    
    
    function sort(arr){                          // m
     if(arr.length<=1)return arr          //[10,6,9,8,7,5,1,3,0]
                                            //[10,6,9]   [8,7,5,1,3,0]
      let mid=Math.floor(arr.length/2)     //[10] [6,9]  [8,7] [5,1,3,0]
                                              //  [6] [9] [8][7]
      let left=sort(arr.slice(0,mid))
      let right=sort(arr.slice(mid))
      return merge(left,right)
    }
    console.log(sort([10,6,6,9,8,7,5,1,3,0]))