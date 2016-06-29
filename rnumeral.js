// roman numeral conversion
var toDecimal = (incoming) => {

  var lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  var arr = incoming.split("")
  var total
  for (var i = 0; i < incoming.length; i++) {
    incoming[i]
    if(i < arr.length-1 && (lookup[arr[i] < lookup[arr[i+1]]])){
      total -= lookup[arr[i]]
    } else {
      total += lookup[arr[i]]
    }
  }
  return total



  //
  // var reduce = roman.reduce((prev, curv, i , arr) => {
  //     //
  //
  //     console.log(decimals[i]);
  //     if()
  // }, [])
  // console.log(reduce);

}

console.log(toDecimal('IV'))
