// function fibonacci(num) {
//   let a = 1, b = 0, temp;
//   let arr = [];
//   while (num >= 0) {
//     temp = a;
//     a = a + b;
//     b = temp;
//     num--;
//     if (b <= num) {
//       arr.push(b);
//     }
//   }

//   console.log(arr)

//   return arr.reduce((a, b) => a + b);
// }

// console.log(fibonacci(1000));
// console.log((987 <= 1000))

function fibonacci(num) {
  if (num <= 1) return 1;
  let fib = fibonacci(num - 1) + fibonacci(num - 2);
  console.log(fib)
  return fib;
}

console.log(fibonacci(10));