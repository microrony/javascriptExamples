// const name = prompt('What is your name?');
// const username = 'microrony';

// if
// if (name == 'rony') {
//   alert('hello!');
// } else if (name == 'ruksana') {
//   console.log('I LOVE YOU <3');
// } else {
//   prompt('type again!');
// }

// for loop
const dogsList = document.querySelector('.dogs-list');
const dogs = [
  { name: 'kalu', type: 'lalu' },
  { name: 'lalu', type: 'kalu' },
];

// for (let i = 0; i < dogs.length; i++) {
//   const dog = dogs[i];
//   const dogData = document.createElement('div');
//   dogData.classList.add('jumbotron', 'text-center');
//   dogData.innerText = `${dog.name} is a ${dog.type}`;
//   dogsList.appendChild(dogData);
// }

// while loop
// let i = 0;
// while (i < dogs.length) {
//   const dog = dogs[i];
//   const dogData = document.createElement('div');
//   dogData.classList.add('jumbotron', 'text-center');
//   dogData.innerText = `${dog.name} is a ${dog.type}`;
//   dogsList.appendChild(dogData);

//   i++;
// }

// do while loop
// let i = 0;

// do {
//   const dog = dogs[i];
//   const dogData = document.createElement('div');
//   dogData.classList.add('jumbotron', 'text-center');
//   dogData.innerText = `${dog.name} is a ${dog.type}`;
//   dogsList.appendChild(dogData);

//   i++;
// } while (i < dogs.length);

// for of iteration
for (let dog of dogs) {
  const dogData = document.createElement('div');
  dogData.classList.add('jumbotron', 'text-center');
  dogData.innerText = `${dog.name} is a ${dog.type}`;
  dogsList.appendChild(dogData);
}
