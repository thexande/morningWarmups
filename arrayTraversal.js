var input = [
      ['a', 'a', 'a', 'a'],
      ['b', 'b', 'b', 'b'],
      ['c', 'c', 'c', 'c'],
      ['d', 'd', 'd', 'd'],
    ];
var result = input[0].map((col, i) => {
  return input.map((row) => {
    return row[i]
  })
})
console.log(result);
