// const purcheses = [19, 40, 50, 60, 70, 100];
// let total = 0;

// for (i = 0; i < purcheses.length; i++) {
//   total += purcheses[i];
// }

// console.log(`total purchese: ${total}`);

const purcheses = [19, 40, 50, 60, 70, 100];
let total = 0;

for (let purchese of purcheses) {
  console.log(purchese);
  total += purchese;
}

console.log(`total purchese: ${total}`);