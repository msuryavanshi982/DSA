// function sum(n) {
//   if (n == 1) return 1;
//   else {
//    return n+ sum(n-1);
//   }
// }
// console.log(sum(2))

function sum2(n) {
  if (n <= 0) return 0;
  return n + sum2(n - 1);
}
console.log(sum2(8));
