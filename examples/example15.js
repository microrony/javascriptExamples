const speak = function ( time = 'day', name = 'rony') {
  console.log(`good ${time} ${name}`);
};

speak('day', 'sattar');

const calcArea = radius => 3.14 * radius**2;

const a = calcArea(5);
console.log(`Area is ${a}`);

const greet = () => 'hello, world';

const greeting = greet();
console.log(greeting);