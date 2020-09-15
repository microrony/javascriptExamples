const friends = [
  {firstName: 'Sattar', lastName: 'Ahmed', birthYear: '1998' },
  {firstName: 'Mahabubur', lastName: 'Rahman', birthYear: '1999' },
  {firstName: 'Anis', lastName: 'Khan', birthYear: '2000' }
];

const ages = [22, 21, 20];

// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i].firstName);
// }

friends.forEach(friend => console.log(friend.firstName));
