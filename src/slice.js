const slice = (input, start=0, end=input.length) => {
  if( ! ( input instanceof Array) || (input instanceof String) ) {
    return []
  } 
  let result = []
  for (let i = start; i < end; i++) {
    result.push(input[i])
  }
  return result
}

export { slice }