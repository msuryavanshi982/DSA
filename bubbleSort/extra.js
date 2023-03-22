function bubbleSort(arr){
    let swapped=false
    for(let i=0;i<=arr.length-1;i++){
      for(let j=0;j<=length-2;j++){
        if(arr[j]>arr[j+1]){
          arr[j]=arr[j]+arr[j+1]
          arr[j+1]=arr[j]-arr[j+1]
          arr[j]=arr[j]-arr[j+1]
          swapped=true
          // let temp=arr[j]
          // arr[j]=arr[j+1]
          // arr[j+1]=temp
        }
      }
      if(swapped==false) break
    }
    
    return arr
    }
    console.log(bubbleSort([63,0,2]))