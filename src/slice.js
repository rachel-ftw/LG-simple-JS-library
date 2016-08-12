const slice = ( input, start=0, end ) => {
  if( ! ( input instanceof Array || typeof( input ) === 'string' ) ) {
    return []
  }

  let result = []

  for( let i = start; i < ( end || input.length ); i++ ) {
    result.push( input[i] )
  }

  return result
}

export { slice }