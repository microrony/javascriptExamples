const original = 'rony';
const clone = 'RONY';

console.groupCollapsed('String');
console.log(original == clone);
console.log(original == 'rony');
console.log(original == clone.toLowerCase());
console.groupEnd();

const num1 = 10;
const num2 = '10';

console.groupCollapsed('Numbers');
console.log(num1 == num2);
console.log(num1 === num2);
console.log(num1 != num2);
console.log(num1 !== num2);
console.groupEnd();

let what;
let thing = null;

console.groupCollapsed('Booleans');
console.log(Boolean(what));
console.log(Boolean(thing));
console.log(Boolean(num1));
console.log(Boolean(num2));
console.log(Boolean());
console.log(Boolean(what));
console.groupEnd();

const firstArr = [1, 2, 3];
const secondArr = [1, 2, 3];
const firstObj = { color: 'red' };
const secondObj = { color: 'red' };

console.group('Array and Object');
console.log(Boolean(firstArr == secondArr));
console.log(Boolean(firstArr != secondArr));
console.log(Boolean(firstObj == secondObj));
console.log(Boolean(firstObj != secondObj));
console.groupEnd();
