// object literal
const book1 = {
  title: 'Book One',
  year: '2020',
  author: 'John Doe',
  getSummary() {
    return `${this.title} is written by ${this.author} in ${this.year}`;
  },
};

const book2 = {
  title: 'Book Two',
  year: '2019',
  author: 'John Doe',
  getSummary() {
    return `${this.title} is written by ${this.author} in ${this.year}`;
  },
};

console.log(book2.getSummary());
