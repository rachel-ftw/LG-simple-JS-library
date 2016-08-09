const indentity = value => value

const baseSum = (array, iteratee) => {
  let result
  let index = -1,
  length = array.length

  while (++index < length) {
    let current = iteratee(array[index])
    if (current !== undefined) {
      result = result === undefined ? current : (result + current)
    }
  }
  return result
}

const sum = input => {
  return (input && input.length)
    ? baseSum(input, identity)
    : 0
}


export { sum }
