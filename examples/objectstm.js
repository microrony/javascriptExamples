const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  hobbies: ['biking', 'hiking', 'swemming'],
  address: {
    districk: 'Dhaka',
    thana: 'Trishal',
    village: 'Dhaliman'
  }
}

console.log(person.hobbies[1]);
const { firstName, lastName, address: { thana } } = person
console.log(firstName);
console.log(thana);
