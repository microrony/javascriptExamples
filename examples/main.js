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

// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// Intantiate an Object
const book1 = new Book('Book One', 'John Doe', '2020');
const book2 = new Book('Book Two', 'John Doe', '2019');

console.log(book1);
// console.log(book2.getSammary());
