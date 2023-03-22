//=> Sliding window:
/*
Eg: [-3,-4,1, ,123,56,4,7,12,23]

=> Find the longest sunstring (of a string) that contains distinct characters
i.e. all the characters are unique
Eg: "Helloothere" => ....lother
Eg: "longestsubstring" => logest
Eg: "abcdabcdeabcdefac" = abcdef
*/

// Basic solution (not allowed in interview):->

/*
-> generate all possible substrings : n(n+1)/2 combinations are possible  - n*n
-> evaluate all these subsctrings for unique characters and maintain the highest length so far= O(n)
total O(n^n^n)

//=> solution using sliding window:=> 

let str = "hellothere"
indexStartOfLongestSub =0;
indexEndOfLongestSub =0;
let SwStart=0;
let SwLast=0;

windowMap={}

while(SwLast<=str.length){
 if(windowMap[str[SwLast]]){
    windowMap[str[SWLast]]:1

    if(SwLast-SwStart > indexEndOfLongestSub- indexStartOfLongestSub){
        indexOfLongestsub=swStart
        indexOfLongestsub=swStart
    }
    swLast++
 }
 Else{
    while(str[swStart]!=str[swLast]){
        swStart++
        delete windowMap(str(swStart))
    }
 }
}
return (indexstartOfLongestSub,  indexEndOfLongestSub)
*/