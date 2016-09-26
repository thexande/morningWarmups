var str = 'asdgfasdklasdalsdj123'

var returnAlpha  = (str) => {
  return str.split('').sort().join("")
}

console.log(returnAlpha(str));
