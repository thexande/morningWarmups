var str = "meerkats are men to me"
var removeMe = (str) => {return str.trim().replace(/me/g, "")}
console.log(removeMe(str))
