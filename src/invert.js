const invert = object => {
  let result = {}

  for( let key in object ) {
    result[ object[ key] ] = key
  }

  return result
}

export { invert }