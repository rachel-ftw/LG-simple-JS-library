const pad = ( input='', length=0, chars=' ' ) => {
  const padsize = length - input.length
  let result = input
  let front = false

  while( result.length < length ) {
    if( front ) {
      result = `${chars}${result}`
    } else {
      result = `${result}${chars}`
    }

    front = ! front

    if( result.length > length ) {
      result = result.slice( 0, length )
    }
  }

  return result
}

export { pad }
