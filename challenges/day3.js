// const chunkyMonkey = (values, size) => {
//   let chunks = [];
//   while(values.length) {
//     chunks.push(values.splice(0, size));
//   }
//   return chunks;
// }

// console.log(chunkyMonkey([1, 2, 5, 4, 5, 6, 7, 8, 9], 3)) 

const chunkyMonkey = (values, size) => {
  let chunks = [];
  var position = 0;
  while(position < values.length) {
    chunks.push(values.slice(position, position+size));
    position+=size;
  }
  return chunks;
}

console.log(chunkyMonkey([1, 2, 5, 4, 5, 6, 7, 8, 9], 3)) 