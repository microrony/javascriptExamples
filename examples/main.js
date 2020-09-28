// // object literal
// const book1 = {
//   title: 'Book One',
//   year: '2020',
//   author: 'John Doe',
//   getSummary() {
//     return `${this.title} is written by ${this.author} in ${this.year}`;
//   },
// };

// const book2 = {
//   title: 'Book Two',
//   year: '2019',
//   author: 'John Doe',
//   getSummary() {
//     return `${this.title} is written by ${this.author} in ${this.year}`;
//   },
// };

// console.log(book2.getSummary());

// //constructor
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
//   this.getSummary = function () {
//     return `${this.title} is written by ${this.author} in ${this.year}`;
//   };
// }

// // instantiate an object
// const book1 = new Book('Book One', 'John Doe', '2020');
// const book2 = new Book('Book Two', 'John Doe', '2019');

// console.log(book1);
// console.log(book2.getSummary());

// // constructor
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
//   this.getSummary = function () {
//     return `${this.title} is written by ${this.author} in ${this.year}`;
//   };
// }

// // instantiate an object
// const book1 = new Book('Book One', 'John Doe', '2020');
// const book2 = new Book('Book Two', 'John Doe', '2019');

// console.log(book1);
// console.log(book2.getSummary());

//constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

//ptototypes
Book.prototype.getSummary = function () {
  return `${this.title} is written by ${this.author} in ${this.year}`;
};

//instantiate an object
const book1 = new Book('Book One', 'John Doe', '2020');
const book2 = new Book('Book Two', 'John Doe', '2019');

console.log(book1);
console.log(book2.getSummary());
