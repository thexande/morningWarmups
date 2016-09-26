let getCombinations = (chars) => {
  var result = [];
  var recursiveAppend = (prefix, chars) => {
    for (var i = 0; i < chars.length; i++) {
      result.push(prefix + ',' + chars[i]);
      recursiveAppend(prefix +  ',' + chars[i], chars.slice(i + 1));
    }
  }
  recursiveAppend('', chars);
  // construct array of arrays of combinations
  return result.map((i) => i.slice(1, i.lenth).split(','))
}

let flightMovie = (flightLength, flightMovieArr) => {
  var movieCombo = getCombinations(flightMovieArr)
    // convert array of strings to numbers
    .map((i) => i.map((i) => Number(i)))
    // how many movies do they want to watch?
    .filter((i) => i.length === 2)
    // construct array of objects of sums and movies
    .map((combo, index) => {
      return {
        moviesLengthSum: combo.reduce((p, c) => p + c, 0),
        movies: combo
        }
    })
    
    // check against flightLength
    .filter((i) => i.moviesLengthSum === flightLength)
    console.log("Movie Combinations: ", movieCombo)
    return movieCombo.length > 0 ? true : false 
}
 
// call
console.log(flightMovie(200, [100, 29, 80, 120]))

