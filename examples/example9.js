function saySomething(message = 'hello!', whisper = false) {
  if (whisper) {
    console.log(`%c${message}`, 'font-size:5px');
  } else {
    console.log(message);
  }
}

saySomething('goodbye', true);
saySomething();
saySomething();

const squared = (a) => {
  return a * a;
};
