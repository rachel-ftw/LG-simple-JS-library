const size = input => {
  if (input instanceof Object) {
    return Object.keys(input).length
  }
  return input.length
}
export { size }