// //Object Literal

// const book1 = {
//   name: 'Book one',
//   author: 'John Doe',
//   year: 2020,
//   getSummary: function() {
//     return `${this.name} was written by ${this.author} in ${this.year}`;
//   }
// };

// console.log(book1.getSummary());

// console.log(Object.values(book1));
// console.log(Object.keys(book1));

// function Book() {
//   console.log('book');
// }

// const b = new Book();

// //constructor
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// // Instatiate an Object
// const book1 = new Book('Book One', 'Jhone Doe', 2013);
// const book2 = new Book('Book Two', 'Jne Doe', 2016);

// console.log(book1);

// constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// getSummary
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
}

// getAge
Book.prototype.getAge = function() {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
}

// revise
Book.prototype.revise = function(thisYear) {
  this.year = thisYear;
  this.revised = true;
}

// Instatiate an Object
const book1 = new Book('Book One', 'Jhone Doe', 2013);
const book2 = new Book('Book Two', 'Jne Doe', 2016);

console.log(book1);
book1.revise(2020);

console.log(book1);
  