function depositProfit(deposit, rate, threshold) {
  let years = 0;
  let money = deposit;

  while(money <= threshold) {
    money += (money * (rate / 100))
    years ++
  }
  return years
}

console.log(depositProfit(100, 20, 570));