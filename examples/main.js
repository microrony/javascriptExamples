function addUp(num) {
  let result = 0;
  for (let i = num; i >= 1; i--) {
    console.log(i)
    result += i;
  }
  return result;
}

console.log(addUp(5))