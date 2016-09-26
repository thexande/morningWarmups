let ints = [1,2,3,4,5,6,7,8,9]
let highestProduct = (ints) => {
  let products = []
  for(let i = 0;  i< ints.length; i++) {
    for(let j = i + 1; j < ints.length; j++) {
      products.push(ints[i] * ints[j])
    }
  }
  return Math.max.apply(null, products)
}

let highProd = (ints) => ints.sort((a, b) => b - a)[0] * ints.sort((a, b) => b - a)[1] 
 
console.log(highProd(ints))
console.log(highestProduct(ints))