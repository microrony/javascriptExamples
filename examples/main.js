let string = 'racecar';

function func(param) {
  if (param.length === 0 || param.length === 1) {
    return true;
  }

  if (param.charAt(0) === param.charAt(param.length - 1)) {
    return func(param.substring(1, param.length - 1));
  }

  return false;
}

console.log(func(string));
