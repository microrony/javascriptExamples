// const power = (base, exponent) => {
//   let result = 1;
//   for (let count = 0; count < exponent; count++) {
//     result *= base;
//   }
//   return result;
// }
// console.log(power(2, 10));

// function power2(base, exponent) {
//   if (exponent == 0) {
//     return 1;
//   } else {
//     return base * power(base, exponent - 1);
//   }
// }

// console.log(power(2, 3));

// let x = 10;
// if (true) {
//   let y = 20;
//   var z = 40;
//   console.log( x + y + z);
// }

// console.log (x + z);

// const halve = function(n) {
//   return n/2;
// }

// let n = 20;
// console.log(halve(100));

// function greet(who) {
//   console.log("Hello " + who);
// }
// greet("Harry");
// console.log("Bye");

// function minus (a,b) {
//   if (b === undefined) {
//     return -a;
//   } else {
//     return a - b;
//   }
// }

// console.log(minus(10));
// console.log(minus(10,5));

// function power(base, exponent = 2) {
//   let result = 1;
//   for (let count = 0; count < exponent; count++) {
//     result *= base;
//   }
//   return result;
// }

// console.log(power(2, 6));

// function wrapValue(n) {
//   let local = n;
//   return () => local;
// }

// let wrap1 = wrapValue(1);
// let wrap2 = wrapValue(2);

// console.log(wrap1());
// console.log(wrap2());

// function multiplier(factor) {
//   return number => number * factor;
// }

// let twich = multiplier(2);
// console.log(twich(5));

function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
             find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}

console.log(findSolution(31));