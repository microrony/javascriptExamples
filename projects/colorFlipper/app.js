// variables
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const body = document.body;

// function
const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
}

const flipColor = () => {
  // get randoem number 0 - 3
  const randomNumber = getRandomNumber();
  body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
}
// event 
btn.addEventListener('click', flipColor);