const todos = [
  {
    id: 1,
    task: 'work from home',
    inCompleted: true
  },
  {
    id: 2,
    task: 'work from home',
    inCompleted: true
  },
  {
    id: 3,
    task: 'work from home',
    inCompleted: false
  }
]

const todoTask = todos.filter(function (todo) {
  return todo.inCompleted === true;
}).map(function (todo) { return todo.task });

console.log(todoTask);

for (let todo of todos) {
  console.log(todo.task);
}

for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].task);
}

console.log(todos[1].task);

const todosJSON = JSON.stringify(todos);
console.log(todosJSON);
