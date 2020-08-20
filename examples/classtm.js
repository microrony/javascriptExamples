class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getBirthYear() {
    return this.dob.getFullYear();
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

}

const person1 = new Person('John', 'Doe', '4-2-2000');
const person2 = new Person('Marry', 'Smith', '11-14-2001');

// console.log(person2.dob);
console.log(person1.getBirthYear());
console.log(person1.getFullName());
