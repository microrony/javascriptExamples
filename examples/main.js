class Book {
	constructor(title, author, year) {
		this.title = title;
		this.author= author;
		this.year= year;
	}

	getSummary() {
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}
}

class Magazine extends Book {
	constructor(title, author, year, month) {
		super(title, author, year);

		this.month = month;
	}
}

const book1 = new Book('Book One', 'John', '2013');

console.log(book1.getSummary())

const mag1 = new Magazine('Magazine One', 'Jogn', '2018', 'Jan');
console.log(mag1.getSummary())