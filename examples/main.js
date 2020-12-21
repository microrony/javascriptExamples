// Fetch API

fetch('Todos/raju.json').then(res => {
  return res.json();
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log(err);
})