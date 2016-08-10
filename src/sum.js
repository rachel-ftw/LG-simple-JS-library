const sum = input => {
  let total = input[ 0 ]

  for( let index = 1; index < input.length; index++ ) {
    total += input[ index ]
  }

  return total
}

export { sum }
