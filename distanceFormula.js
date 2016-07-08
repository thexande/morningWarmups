var calcDistance = (arr) => {
  return Math.sqrt(Math.pow((arr[0].x - arr[1].x), 2) + Math.pow((arr[0].y - arr[1].y), 2))
}
console.log(calcDistance([{x:0,y:1},{x:2,y:3}]))
