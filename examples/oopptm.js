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

// //constructor
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// //ptototypes
// Book.prototype.getSummary = function () {
//   return `${this.title} is written by ${this.author} in ${this.year}`;
// };

// //instantiate an object
// const book1 = new Book('Book One', 'John Doe', '2020');
// const book2 = new Book('Book Two', 'John Doe', '2019');

// console.log(book1);
// console.log(book2.getSummary());

// // constructor
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// // prototype
// Book.prototype.getSummary = function () {
//   return `${this.title} is written by ${this.author} in ${this.year}`;
// };

// // instantiate an object
// const book1 = new Book('Book One', 'John Doe', 2020);
// const book2 = new Book('Book Two', 'John Doe', 2019);

// console.log(book1);
// console.log(book2.getSummary());

// // constructor
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// // ptototype
// Book.prototype.getSummary = function () {
//   return `${this.title} is written by ${this.author} in ${this.year}`;
// };

// // magazine constructor
// function Magazine(title, author, year, month) {
//   Book.call(this, title, author, year);

//   this.month = month;
// }

// // inherit prototype
// Magazine.prototype = Object.create(Book.prototype);

// // instantiate magazine object
// const mag1 = new Magazine('Magazine One', 'John Doe', '2020', 'Jan');

// // use magazine constructor
// Magazine.prototype.constructor = Magazine;

// console.log(mag1);

// // constructor
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// // prototype
// Book.prototype.getSummary = function () {
//   return `${this.title} is written by ${this.author} in ${this.year}`;
// };

// // Magazine constructor
// function Magazine(title, author, year, month) {
//   Book.call(this, title, author, year);

//   this.month = month;
// }

// // inherit prototype
// Magazine.prototype = Object.create(Book.prototype);

// //use magazine constructor
// Magazine.prototype.constructor = Magazine;

// // instantiate magazine object
// const mag1 = new Magazine('Magazine One', 'John Doe', '2020', 'Jan');

// console.log(mag1);

// // Object of protos
// const bookProtos = {
//   getSummary: function () {
//     return `${this.title} is written by ${this.author} in ${this.year}`;
//   },
// };

// // // Create object
// // const book1 = Object.create(bookProtos);
// // book1.title = 'Book One';
// // book1.author = 'John Doe';
// // book1.year = '2020';

// // another way of doing this
// const book1 = Object.create(bookProtos, {
//   title: { value: 'Book One' },
//   author: { value: 'John Doe' },
//   year: { value: '2020' },
// });

// console.log(book1);

// // Object of protos
// const bookProtos = {
//   getSummary: function () {
//     return `${this.title} is written by ${this.author} in ${this.year}`;
//   },
// };

// // // create object
// // const book1 = Object.create(bookProtos);
// // book1.tilte = 'Book One';
// // book1.author = 'John Doe';
// // book1.year = '2020';

// // another way of doing this
// const book1 = Object.create(bookProtos, {
//   title: { value: 'Book One' },
//   author: { value: 'John Doe' },
//   year: { value: '2020' },
// });

// console.log(book1);

// // classes
// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }
//   getSummary() {
//     return `${this.title} is written by ${this.author} in ${this.year}`;
//   }

//   static topBookStore() {
//     return 'Barnes & Noble';
//   }
// }

// // Instantiate an object
// const book1 = new Book('Book One', 'John Doe', '2020');
// const book2 = new Book('Book Two', 'John Doe', '2019');

// console.log(book1);
// console.log(book2.getSummary());
// console.log(Book.topBookStore());

// // classes
// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }

//   getSummary() {
//     return `${this.title} is written by ${this.author} in ${this.year}`;
//   }

//   static topBookStore() {
//     console.log('Noble');
//   }
// }

// // instantiate object
// const book1 = new Book('Book One', 'John Doe', '2020');

// console.log(book1);
// Book.topBookStore();

// //Magazine Subclass
// class Magazine extends Book {
//   constructor(title, author, year, month) {
//     super(title, author, year);

//     this.month = month;
//   }
// }

// // Instantiate Magazine
// const mag1 = new Magazine('Magazine One', 'John Doe', '2020', 'Jan');
// console.log(mag1);
// console.log(mag1.getSummary());

// // classes
// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }

//   getSummary() {
//     return `${this.title} is written by ${this.author} in ${this.year}`;
//   }

//   static topBookStore() {
//     console.log('Noble');
//   }
// }

// // instantiate object
// const book1 = new Book('Book One', 'John Doe', '2020');

// console.log(book1);
// Book.topBookStore();

// // Magazine subclasses
// class Magazine extends Book {
//   constructor(title, author, year, month) {
//     super(title, author, year);

//     this.month = month;
//   }
// }

// // Instentiate Magazine
// const mag1 = new Magazine('Magazine One', 'John Doe', '2020', 'Jan');

// console.log(mag1);
// console.log(mag1.getSummary());

// constructor
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// Book.prototype.getSummary = function () {
//   return `${this.title} is written by ${this.author} in ${this.year}`;
// };

// // instantiate an object
// const book1 = new Book('Book One', 'John Doe', '2020');

// console.log(book1);

// // magazine constructor
// function Magazine(title, author, year, month) {
//   Book.call(this, title, author, year);

//   this.month = month;
// }

// Magazine.prototype = Object.create(Book.prototype);
// Magazine.prototype.constructor = Magazine;

// // instantiate objecct
// const mag1 = new Magazine('Magazine One', 'John Doe', '2020', 'Jan');

// console.log(mag1);
// console.log(mag1.getSummary());

