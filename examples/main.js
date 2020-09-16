const book1 = {
  title: 'Book One',
  author: 'Jhon Doe',
  year: '2020',
  getSammary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

const book2 = {
  title: 'Book Two',
  author: 'Jhon Doe',
  year: '2019',
  getSammary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book1);
console.log(book1.getSammary());
