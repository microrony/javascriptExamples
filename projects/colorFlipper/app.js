// variables
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const body = document.body;

// functions
const flipColor = () => {
  // get random number 0 - 3
  const randomNumber = 2;
  body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
}

// events
btn.addEventListener('click', flipColor);