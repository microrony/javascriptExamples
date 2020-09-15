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

function Book() {
  console.log('book');
}

const b = new Book();

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