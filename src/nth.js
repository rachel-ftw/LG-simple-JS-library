const nth = (array, input) => {
  let n =  Math.abs(input)
  if (input >= 0) {
    return array[n]
  } else if (input < 0) {
    return array[array.length - (n + 1)]
  }

}

export { nth }
