## Quiz : [V2 Semicolons](https://watchandcode.com/courses/350615/lectures/23512381)

```javascript
var todos = ['Item 1', 'Item 2', 'Item 3'];

console.log(todos);

function add(todo) {
  todos.push(todo);
  console.log(todos);
}

function edit(position, newValue) {
  todos[position] = newValue;
  console.log(todos);
}

function remove(position) {
  todos.splice(position, 1);
  console.log(todos);
}
```

### Statement - True/False XX%

### Evidence

### Which of the following statements are true about the code above? (choose at least one)

1. **Every ) is followed immediately by a ;.**

   a. False - 99%

   b. Every ) is followed immediately by a ;, except function params );

1. **Every line of code ends with a ;.**

   a. False - 99%

   b. Every line of code not ends with a ;

1. **Every { of code ends with a ;.**

   a. False - 99%

   b. Every { of code not ends with a ;

1. **Every } is not followed by a ;.**

   a. True - 99%

   b. Checked every line.

1. **Every line of code ends with a ;, except for lines that end in { or }.**

   a. True - 99%

   b. Checkedd every line.

1. **None of the above**

   a. False - 99%

   b. Statement 4 and 5 are true.
