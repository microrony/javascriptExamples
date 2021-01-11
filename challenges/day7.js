function countVowelConsonant(str) {
  const splitForm = str.split("");
  const vowels = ["a", "e", "i", "o", "u"]
  let total = 0;

  for (var i = 0; i < splitForm.length; i++) {
      if (vowels.includes(splitForm[i])) {
          total += 1;
      } else {
          total += 2;
      }
  }
  return total
}
