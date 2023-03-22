
function pro(arr){
    if(arr.length==0) return 1;
    return arr[0]* pro(arr.slice(1))
}

console.log(pro([0]))