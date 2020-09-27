// let getValue = function (value = 10) {
//   console.log(value);
// };

// getValue();

// let displayColors = function (message, ...colors) {
//   console.log(message);

//   for (let i in colors) {
//     console.log(colors[i]);
//   }
// };

// let message = 'list of colors';

// displayColors(message, 'red');
// displayColors(message, 'red', 'blue');
// displayColors(message, 'red', 'blue', 'green');

// let displayColors = function (note, ...colors) {
//   console.log(note);

//   for (let i in colors) {
//     console.log(colors[i]);
//   }
// };

// let note = 'learning rest oparator';

// let colorsArray = ['orange', 'blue', 'red'];
// displayColors(note, ...colorsArray);

let displayColors = (note, ...colors) => {
  console.log(note);

  for (let i in colors) {
    console.log(colors[i]);
  }
};

let note = 'learning spread operator';

let colorsArray = ['orange', 'red', 'blue', 'yellow'];
displayColors(note, ...colorsArray);
