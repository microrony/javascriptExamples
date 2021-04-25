var todos = ['Item 1', 'Item 2', 'Item 3'];

function add(todo) {
  todos.push(todo);
  console.log(todos);
}

function edit(position, todo) {
  todos[position] = todo;
  console.log(todos);
}

function remove(position) {
  todos.splice(position, 1);
  console.log(todos);
}

remove(0);
