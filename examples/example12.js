const sayHi = document.querySelector('h1');

function hide() {
  sayHi.style.display = 'none';
}

sayHi.addEventListener('click', hide);