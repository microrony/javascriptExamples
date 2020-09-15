//Object Literal

const book1 = {
  name: 'Book one',
  author: 'John Doe',
  year: 2020,
  getSummary: function() {
    return `${this.name} was written by ${this.author} in ${this.year}`;
  }
};

console.log(book1.getSummary());

console.log(Object.values(book1));
console.log(Object.keys(book1));