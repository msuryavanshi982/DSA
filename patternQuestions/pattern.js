//  Pattern-1

// * * * *
// * * * *
// * * * *
// * * * *

// let n=4
// for(let i=1;i<=n;i++){
//     let str=""
//     for(let j=1;j<=n;j++){
//         str+="* "
//     }
//     console.log(str)
// }



//  Pattern-2

// *
// * *
// * * *
// * * * *
// * * * * *

// let n=5;
// for(let i=0;i<n;i++){
//     let str=""
//     for(let j=0;j<=i;j++){
//         str+="* "
//     }
//     console.log(str)
// }


//  Pattern-3

// * * * * * 
// * * * * 
// * * * 
// * * 
// * 

// let n=5;
// for(let i=0;i<n;i++){
//     let str=""
//     for(let j=0;j<n-i;j++){
//         str+="* "
//     }
//     console.log(str)
// }


//  Pattern-4

//         * 
//       * * 
//     * * * 
//   * * * * 
// * * * * * 

// let n=5;
// for(let i=0;i<n;i++){
//     let str=""
//     for(let j=0;j<=n;j++){
//         if(j<n-i){
//         str+="  "
//         }else{
//             str+="* "
//         }
//     }
//     console.log(str)
// }



//  Pattern-5

// * * * * *
//   * * * *
//     * * *
//       * *
//         *

// let n=5;
// for(let i=0;i<n;i++){
//     let str=""
//     for(let j=0;j<n;j++){
//         if(j<i)
//         str+="  " 
//         else
//         str+="* "
//     }
//     console.log(str)
// }


//  Pattern-6

    //         *
    //       * * *
    //     * * * * *
    //   * * * * * * *
    // * * * * * * * * *

    // let n=5;
    // for(let i=0;i<n;i++){
    //     let str=""
    //     for(let j=0;j<n*2;j++){
    //         if(j>=n-i && j<=n+i){
    //             str+="* "
    //         }else{
    //             str+="  "
    //         }
    //     }
    //     console.log(str)
    // }



    //  Pattern-7

    // * * * * * * * * *
    //   * * * * * * *
    //     * * * * * 
    //       * * *
    //         *

    // let n=5;
    // for(let i=0;i<n;i++){
    //     let str=""
    //     for(let j=0;j<n*2;j++){
    //         if(j>i && j<n*2-i){
    //             str+="* "
    //         }else{
    //             str+="  "
    //         }
    //     }
    //     console.log(str)
    // }



//  Pattern-8

    //         *
    //       * * *
    //     * * * * *
    //   * * * * * * *
    // * * * * * * * * *
    //   * * * * * * *
    //     * * * * * 
    //       * * *
    //         *


    // let n=5;
    // for(let i=0;i<n*2;i++ ){
    //     if(i<n){
    //     let str=""
    //     for(let j=0;j<n*2;j++){
    //         if(j>=n-i && j<=n+i){
    //             str+="* "
    //         }else{
    //             str+="  "
    //         }
    //     }
    //     console.log(str)
    //     } 
    // }

    // for(let i=1;i<n;i++){
    //     let str=""
    //     for(let j=0;j<n*2;j++){
    //         if(j>i && j<n*2-i){
    //             str+="* "
    //         }else{
    //             str+="  "
    //         }
    //     }
    //     console.log(str)
    // }


//  Pattern-9

//     *
//    * *
//   * * *
//  * * * *
// * * * * *

// let n=5;
// for(let i=0;i<n;i++){
//     let str=""
//     for(let j=0;j<=n*2;j++){
//         if((i+j)%2===0 && (j>=n-i && j<=n+i+1)){
//             str+="* "
//         }else{
//             str+="  "
//         }
//     }
//     console.log(str)
// }


// Pattern-10

//       * * * * *
//        * * * *
//         * * *
//          * *
//           * 

// let n=5;
// for(let i=0;i<n;i++){
//     let str=""
//         for(let j=0;j<=n*2;j++){
//             if((i+j)%2===0 && (j>=i && j<=2*n-i-2)){
//                 str+="* "
//             }else{
//                 str+="  "
//             }

//         }
//         console.log(str)
//     }



// Pattern-11

    //        *
    //       * *
    //      * * *
    //     * * * *
    //    * * * * *  
    //     * * * *
    //      * * *
    //       * *
    //        * 

    // let n=5;
    // for(let i=0;i<n;i++){
    //     let str=""
    //     for(let j=0;j<=n*2;j++){
    //         if((i+j)%2===0 && (j>=n-i && j<=n+i+1)){
    //             str+="* "
    //         }else{
    //             str+="  "
    //         }
    //     }
    //     console.log(str)
    // }
    // for(let i=1;i<n;i++){
    //     let str=""
    //         for(let j=0;j<=n*2;j++){
    //             if((i+j)%2===0 && (j>=i+1 && j<=(2*n)-i)){
    //                 str+="* "
    //             }else{
    //                 str+="  "
    //             }
    
    //         }
    //         console.log(str)
    //     }


// Pattern-12

//         * * * * *
//       * * * * *
//     * * * * *
//   * * * * *
// * * * * *

// let n=5;
// for(let i=0;i<n;i++){
//     let str=""
//     for(let j=0;j<n*2;j++){
//         if(j>=n-i && j<=n*2-i-1){
//             str+="* "
//         }else{
//             str+="  "
//         }
//     }
//     console.log(str)
// }


// Pattern-13

    //       *
    //      * *
    //     *   *
    //    *     *
    //   * * * * *

// let n=5;
// for(let i=1;i<=n;i++){
//     let str="";
//     if(i===n){
//         for(let j=1;j<n*2;j++){
//             if(j%2===1){
//                 str+="* "
//             }else{
//                 str+="  "
//             }
//         }
      
//     }else{
//     for(let j=1;j<n*2-1;j++){
//         if(j===n-i+1 || j===n+i-1){
//             str+="* "
//         }else{
//             str+="  "
//         }
//     }
//     }
//     console.log(str)
// }



// Pattern-14

// *                 *
// * *             * *
// * * *         * * *
// * * * *     * * * *
// * * * * * * * * * * 
// * * * * * * * * * * 
// * * * *     * * * *
// * * *         * * *
// * *             * *
// *                 *

let n=10;
for(let i=1;i<=5;i++){
    let str="";
    for(let j=1;j<=10;j++){
        if(j<=i || j>=n-i+1){
            str+="* "
        }else{
            str+="  "
        }
    }
    console.log(str)
}
for(let i=5;i<=10;i++){
    let str="";
    for(let j=1;j<=10;j++){
        if(j<=n-i || j>i){
            str+="* "
        }else{
            str+="  "
        }
    }
    console.log(str)
}


// Pattern-15

        //                *
        //               * *
        //              * * *
        //             * * * * 
        //    * * * * * * * * * * * * *
        //     * * * * * * * * * * * *
        //      * * * * * * * * * * *
        //       * * * * * * * * * *
        //        * * * * * * * * *
        //       * * * * * * * * * *
        //      * * * * * * * * * * *
        //     * * * * * * * * * * * *
        //    * * * * * * * * * * * * *
        //             * * * *
        //              * * *
        //               * *
        //                * 




// Pattern-01

// A B C D E 
// A B C D E 
// A B C D E 
// A B C D E 
// A B C D E 

// let n = 5
// for (let i = 1; i <= n; i++) {
//     let str = ""
//     for (let j = 0; j < n; j++) {
//         str += String.fromCharCode(65 + j) + " ";
//     }
//     console.log(str)
// }


// Pattern-02

// a b c d e 
// a b c d e 
// a b c d e 
// a b c d e 
// a b c d e 


// let n = 5
// for (let i = 1; i <= n; i++) {
//     let str = ""
//     for (let j = 0; j < n; j++) {
//         str += String.fromCharCode(97 + j) + " ";
//     }
//     console.log(str)
// }

// Pattern-03

// A
// A B
// A B C
// A B C D
// A B C D E


// let n=5;
// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=1;j<=i;j++){
//         str += String.fromCharCode(64 + j) + " ";
//     }
//     console.log(str)
// }


// Pattern-04

// A
// B C
// D E F 
// G H I J
// K L M N O

// let n=5,count=0;
// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=1;j<=i;j++){
//         str += String.fromCharCode(65 + count) + " ";
//         count++;
//     }
//     console.log(str)
// }


// Pattern-05

// A
// B B
// C C C
// D D D D
// E E E E E

// let n=5,count=0;;
// for(let i=1;i<=n;i++){
//     let str=""
//     for(let j=1;j<=i;j++){
//         str += String.fromCharCode(65 + count) + " ";
//     }
//     count++
    
//     console.log(str)
// }


// Pattern-06

// E
// D E
// C D E
// B C D E
// A B C D E

// let n=5;
// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=i;j>=1;j--){
//         str += String.fromCharCode(64 +n+1-j) + " ";
//     }
//     console.log(str)
// }



// Pattern-01

// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4

// let n=4
// for(let i=1;i<=n;i++){
//     let str=""
//     for(let j=1;j<=n;j++){
//         str+=j+" "
//     }
//     console.log(str)
// }


// Pattern-02

// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 
// 11 12 13 14 15 

// let n=5,count=1;
// for(let i=1;i<=n;i++){
//     let str=""
//     for(let j=1;j<=i;j++){
//         str+=count+" ";
//         count++;
//     }
//     console.log(str)
// }


// Pattern-03

//  1 1 1 1 1
//  2 2 2 2
//  3 3 3
//  4 4
//  5


// let n=5;
// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=i;j<=n;j++){
//         str+=i+" " 
//     }
//     console.log(str)
// }


// Pattern-04

// 1
// 2 3
// 3 4 5
// 4 5 6 7
// 5 6 7 8 9

// let n=5;
// for(let i=1;i<=n;i++){
//     let str="", value=i
//     for(let j=1;j<=i;j++){
//         str+=value+" ";
//         value++

//     }
//     console.log(str)

// }

// let n=5
// for(let i=1;i<=n;i++){
//     let str=""
//     for(j=i;j<=2*i-1;j++){
//      str+=j+" ";
    
//     }
//     console.log(str)

// }


// Pattern-05

// 1 2 3 4 5 
// 2 3 4 5 
// 3 4 5 
// 4 5 
// 5 

// let n=5
// for(let i=1;i<=n;i++){
//     let str=""
//     for(j=i;j<=n;j++){
//      str+=j+" ";
//     }
//     console.log(str)

// }


// Pattern-06

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5


// let n=5;
// for(let i=1;i<=n;i++){
//     let str=""
//     for(let j=1;j<=i;j++){
//         str+=i+" "

//     }
//     console.log(str)
// }


// Pattern-07

// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1

// let n=5;
// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=i;j>=1;j--){
//         str+=j+" "
//     }
//     console.log(str)
// }


// Pattern-08

// 1 1 0 1 1
// 1 1 0 1 1
// 0 0 0 0 0
// 1 1 0 1 1
// 1 1 0 1 1

// Pattern-09

// 1 1 1 1 1
// 1 1 1 1 1
// 1 1 0 1 1
// 1 1 1 1 1
// 1 1 1 1 1

// Pattern-10

// 1 1 1 1 1
// 1 0 0 0 1
// 1 0 0 0 1
// 1 0 0 0 1
// 1 1 1 1 1

// Pattern-11

// 0 1 0 1 0
// 0 1 0 1 0
// 0 1 0 1 0
// 0 1 0 1 0
// 0 1 0 1 0

// Pattern-12

// 1             1
// 1 2         2 1
// 1 2 3     3 2 1
// 1 2 3 4 4 3 2 1


// Pattern-13

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3
// 1 2
// 1


// Pattern-14

// 1 2 3 4 5 4 3 2 1
//   1 2 3 4 3 2 1
//     1 2 3 2 1
//       1 2 1
//         1

// Pattern-15

//         1
//       2 0 2
//     3 0 0 0 3
//   4 0 0 0 0 0 4
// 5 0 0 0 0 0 0 0 5

 
// Pattern-16

//          1
//        1   1
//      1   2   1
//    1   3   3   1
//  1   4   6   4   1 


// Pattern-17

//         1
//       1 0 1
//     1 0 1 0 1
//   1 0 1 0 1 0 1
// 1 0 1 0 1 0 1 0 1

// Pattern-18 

//          1 
//        1 2 1
//      1 2 3 2 1
//    1 2 3 4 3 2 1
//  1 2 3 4 5 4 3 2 1
 


// Pattern-19

// 1 2 3 4 5 5 4 3 2 1
// 1 2 3 4 * * 4 3 2 1
// 1 2 3 * * * * 3 2 1
// 1 2 * * * * * * 2 1
// 1 * * * * * * * * 1