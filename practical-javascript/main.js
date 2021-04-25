var todos = ['Item 1', 'Item 2', 'Item 3'];

console.log(todos);

function add(newItem) {
  todos.push(newItem);
  console.log(todos);
}

add('another item');
