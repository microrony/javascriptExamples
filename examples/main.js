// default paramiters
// let getValue = function (value = 10) {
//   console.log(value);
// };

// getValue();

// rest operator
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

// spread operator
// let displayColors = function (note, ...colors) {
//   console.log(note);

//   for (let i in colors) {
//     console.log(colors[i]);
//   }
// };

// let note = 'learning rest oparator';

// let colorsArray = ['orange', 'blue', 'red'];
// displayColors(note, ...colorsArray);

// let displayColors = (note, ...colors) => {
//   console.log(note);

//   for (let i in colors) {
//     console.log(colors[i]);
//   }
// };

// let note = 'learning spread operator';

// let colorsArray = ['orange', 'red', 'blue', 'yellow'];
// displayColors(note, ...colorsArray);

// object literals
// let firstName = 'mahabubur';
// let lastName = 'rahman';

// let person = {
//   firstName,
//   lastName,
// };

// let createPerson = (firstName, lastName, age) => {
//   let fullName = `${firstName} ${lastName}`;
//   return {
//     firstName,
//     lastName,
//     fullName,
//     isSenior() {
//       return age > 18;
//     },
//   };
// };

// let p = createPerson('mahabubur', 'rahman', 20);
// console.log(p.firstName);
// console.log(p.lastName);
// console.log(p.fullName);
// console.log(p.isSenior());
// console.log(person);

// destructuring array
let me = ['mahabubur', 'rahman', 'male'];
let [fname, lname, gender] = me;

console.log(fname);
console.log(lname);
console.log(gender);
