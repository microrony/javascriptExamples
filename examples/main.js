// async & await

const getTodos = async () => {
  const response = await fetch('Todos/raju.json');

  if(response.status !== 200) {
    throw new Error('cannot fetch the data');
  }

  const data = await response.json();
  return data;
}

getTodos()
    .then(data => console.log(data))
    .catch(err => console.log(err));