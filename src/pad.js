const pad = (string='', length=0, chars=' ') => {
  result = ''
  //looks at length of input string
  //compares that to length
  let padsize = length - string.length
  if (length <= string.length) {
    return string
  } else {
    //if padsize is even, divide by two and padd chars for that many units around string
    //if padsize is odd, subtract one, divide by two, pad both sides, add one to butt?
  }

  //modulous with 2 and you get a remainder...
    //takes the length
  return result
}

export { pad }
