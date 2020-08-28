// console.dir(document);
// console.log(document.all);

// console.log(document.getElementById('header-title'));

// let headerTitle = document.getElementById('header-title');

// console.log(headerTitle);

// headerTitle.innerText = 'hello';
// headerTitle.textContent = 'gello';
// console.log(headerTitle.textContent);
// headerTitle.innerHTML = '<h1> google </h1>';
// let header = document.getElementById('main-header');
// header.style.borderBottom = '3px solid black';

// let header = document.querySelector('#main-header');
// header.style.borderBottom = '3px solid #ccc';
// let li = document.querySelector('li');
// li.style.color = 'red';
// let li = document.querySelector('li:nth-child(3)');
// li.style.color = 'red';
// let title = document.querySelector('.title');
// title.style.color = 'red';
// console.log(title);
// let title = document.querySelectorAll('.title:nth-child(odd)');

// for (let i = 0; i < title.length; i++) {
//   title[i].style.color = 'red';
// }

// let itemsList = document.querySelector('#items');


// console.log(itemsList.parentNode);
// console.log(itemsList.parentElement);
// console.log(itemsList.childNodes);
// console.log(itemsList.children);
// console.log(itemsList.firstChild);
// console.log(itemsList.firstElementChild);
// console.log(itemsList.lastChild);
// console.log(itemsList.lastElementChild);
// console.log(itemsList.nextSibling);
// console.log(itemsList.nextElementSibling);
// console.log(itemsList.previousSibling);
// console.log(itemsList.previousElementSibling);
// console.log(itemsList.parentNode);
// console.log(itemsList.parentElement);
// console.log(itemsList.childNodes);
// console.log(itemsList.children);
// console.log(itemsList.firstChild);
// console.log(itemsList.firstElementChild);
// console.log(itemsList.lastChild);
// console.log(itemsList.lastElementChild);
// console.log(itemsList.nextSibling);
// console.log(itemsList.nextElementSibling);
// console.log(itemsList.previousSibling);
// console.log(itemsList.previousElementSibling);
// console.log(itemsList.firstElementChild);
// console.log(itemsList.lastElementChild);

// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');
// let newDiv = document.createElement('div');
// let divText = document.createTextNode('hello, world');
// newDiv.appendChild(divText);
// newDiv.classList = 'hello';
// newDiv.id = 'hello';
// newDiv.setAttribute('title', 'hello div');

// container.insertBefore(newDiv, h1);

let button = document.getElementById('button').addEventListener('click', clicked);

function clicked(e) {
  console.log(e);
  // console.log(e.target);
  // console.log(e.target.id);
  // console.log(e.target.classList);
  // console.log(e.type);
  // console.log(e.clientX);
  // console.log(e.clientY);
  // console.log(e.offsetX);
  // console.log(e.offsetY);
  // console.log(e.ctrlKey);
}