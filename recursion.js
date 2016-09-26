var power = (base, exponent) => {
  if(exponent === 0){
    return 1
  } else {
    return base * power(base, exponent - 1)
  }
}

const pow = (b,e) => e === 0 ? 1 : b * pow(b, e - 1)

// CALL 1: 2 * 2
// CALL 2: 2 * ( 2 * 2 )
// CALL 3: 2 * ( 2 * ( 2 * 2 ) )

console.log(pow(2, 4))


