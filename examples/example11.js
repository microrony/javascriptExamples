function goCoocoo() {
  document.body.style.backgroundColor = '#C00C00';
}

const coffeeButtons = document.querySelectorAll('.coffee-btn');

// coffeeButton.onclick = function() {
//   document.body.style.backgroundColor = '#C0FFEE';
// }

// coffeeButton.onmouseenter = goCoocoo;

function goCoffee() {
  document.body.style.backgroundColor = '#c0ffee';
}

coffeeButtons.forEach(function(button) {
  button.onclick = goCoffee;
});

const lalaButton = document.querySelector('.btn-lala');

function goLala() {
  document.body.style.backgroundColor = "#1a1a1a";
}

lalaButton.addEventListener('click', goLala);

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('mouseleave', goLala));