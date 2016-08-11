const toArray = input => {
  let result = []
  if (input instanceof String) {
    return input.split('')
  } else if (input instanceof Object) {
    return input.values()
  } else {
    return []
  }
}

export { toArray }