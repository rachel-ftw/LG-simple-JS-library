const toArray = input => {
  if ( typeof(input) === 'string' ) {
    return input.split('')
  } else if (input instanceof Object) {
    let values = []

    for( var key in input ) {
      values.push( input[ key ] )
    }

    return values
  } else {
    return []
  }
}

export { toArray }