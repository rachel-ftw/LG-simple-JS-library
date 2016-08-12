const zip = ( ...inputs ) => {
  let maxLength = 0
  let result = []

  for( let index = 0; index < inputs.length; index++ ) {
    const array = inputs[ index ]

    if( ! ( array instanceof Array ) ) {
      return []
    }

    if( array.length > maxLength ) {
      maxLength = array.length
    }
  }

  for( let index = 0; index < maxLength; index++ ) {
    let baby = []

    for( let arrayIndex = 0; arrayIndex < inputs.length; arrayIndex++ ) {
      baby.push( inputs[ arrayIndex ][ index ] )
    }

    result.push( baby )
  }

  return result
}

export { zip }
