// const book1 = {
//   title: 'Book One',
//   author: 'Jhon Doe',
//   year: '2020',
//   getSammary: function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   },
// };

// const book2 = {
//   title: 'Book Two',
//   author: 'Jhon Doe',
//   year: '2019',
//   getSammary: function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   },
// };

// console.log(book1);
// console.log(book1.getSammary());

// // Constructor
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// Book.prototype.getSummary = function () {
//   return `${this.title} was written by ${this.author} in ${this.year}`;
// };

// Book.prototype.getAge = function () {
//   const years = new Date().getFullYear() - this.year;
//   return `${this.title} book is ${years} years old.`;
// };

// Book.prototype.revise = function (thisYear) {
//   this.year = thisYear;
//   this.revised = true;
// };

// // Intantiate an Object
// const book1 = new Book('Book One', 'John Doe', '2020');
// const book2 = new Book('Book Two', 'John Doe', '2019');

// console.log(book1);
// console.log(book2.getSummary());
// console.log(book2.getAge());
// console.log(book1.revise('2021'));
// console.log(book1);

// Constractor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// Intantiate Objects
const book1 = new Book('Book One', 'John Doe', '2020');
const book2 = new Book('Book Two', 'John Doe', '2019');

console.log(book1);
