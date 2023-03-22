function pow(a,b){
    //base
    if(b==0) return 1 
    //recusive call
    return a*pow(a,b-1)
}