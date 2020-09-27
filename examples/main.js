// let getValue = function (value = 10) {
//   console.log(value);
// };

// getValue();

let displayColors = function (message, ...colors) {
  console.log(message);

  for (let i in colors) {
    console.log(colors[i]);
  }
};

let message = 'list of colors';

displayColors(message, 'red');
displayColors(message, 'red', 'blue');
displayColors(message, 'red', 'blue', 'green');
