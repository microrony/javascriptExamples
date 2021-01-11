function candies(children, candy) {
  let eachChildrenEat = Math.floor(candy / children);
  let totalEaten = eachChildrenEat * children;
  return totalEaten;
}

console.log(candies(4, 10));
