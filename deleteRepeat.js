var deleteRepeat = (str) => {
  return str.split("").filter((x, n, s) => { return s.indexOf(x) == n }).join("")
}
console.log(deleteRepeat('pooooooomba'))
