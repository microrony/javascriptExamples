const ul = document.querySelector('.items');

// ul.remove();
ul.firstElementChild.textContent = 'hello';
ul.children[1].innerText = 'rony';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

const btn = document.querySelector('.btn');
btn.style.background = 'red';
