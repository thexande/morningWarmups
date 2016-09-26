// clock angle problem
const clockAngle = function(hour, minute) {
  // calc angle
  let angle = .5 * Math.abs((60 * hour) - (11 * minute))
  if(angle > 180){
    return 360 - angle
  } else {
    return angle
  }
}

// and the es6 one liner
const cA = (h, m) => .5 * Math.abs((60*h) - (11*m)) > 180 ? 360 - .5 * Math.abs((60*h) - (11*m)) : .5 * Math.abs((60*h) - (11*m))

//es6 fat function
const cAFat = (h, m) => {
  let ang = .5 * Math.abs((60*h) - (11*m))
  return ang > 180 ? 360 - ang : ang
}

console.log(clockAngle(10, 16))
console.log(clockAngle(2, 20))
console.log("es6 one liner")
console.log(cA(10, 16))
console.log(cA(2, 20))
console.log("es6 fat")
console.log(cAFat(10, 16))
console.log(cAFat(2, 20))
