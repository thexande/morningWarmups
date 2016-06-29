["red", "blue", "green", "red", "green", "white", "purple", "red", "red"].reduce(function(prev, curv){
  prev[curv] ? prev[curv]++ : prev[curv] = 1
  return prev
}, {})



console.log([1,2,3].reduce((p,c) => {
  return p + c;
}))
