const groupBy = (xs, key) =>
  xs.reduce(function (rv, x) {
    ;(rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, {})

console.log(groupBy(['q', 'a'], 'genaral'))
