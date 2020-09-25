// variables
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const body = document.body;

// functions
const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
}

const flipColor = () => {
  // get random number 0 - 3
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
}

// events
btn.addEventListener('click', flipColor);