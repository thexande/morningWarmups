var input = [
  '2014-05-10',
  '2014-05-11',
  '2014-05-10',
  '2014-05-12',
  '2014-05-10'
]
var removeDupes = (dupes) => {
  return dupes.filter((value, index) => {
    return dupes.indexOf(value) == index;
  })
}
console.log(removeDupes(input));
