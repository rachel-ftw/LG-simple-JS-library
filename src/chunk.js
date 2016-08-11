const chunk = ( input, chunkSize=1 ) => {
  if( ! ( input instanceof Array ) ) {
    return []
  }

  let result = []

  for( let i = 0; i < input.length; i += chunkSize ) {
    let baby = []

    for( let j = 0; j < chunkSize && i + j < input.length; j++ ) {
      baby.push( input[ i + j ] )
    }

    result.push( baby )
  }

  return result
}

export { chunk }