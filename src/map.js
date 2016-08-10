const map = ( mapItem, transform ) => {
  const target = mapItem || []
  let result = []

  for( let key in mapItem ) {
    result.push( transform( target[ key ], key, target ))
  }

  return result
}

export { map }