const map = ( mapItem, transform ) => { 
  const target = normalizeMapItem( mapItem )
  let result = []
  let index = 0

  for( index = 0; index < target.length; index++ ) {
    result.push( transform( target[ index ]))
  }

  return result
}

const normalizeMapItem = mapItem => {
  if( ! mapItem ) {
    return []
  } else if( Array.isArray( mapItem ) ) {
    return mapItem
  } else if( typeof( mapItem ) === 'object' ) {
    let result = []

    for( let key in mapItem ) {
      result.push( mapItem[ key ] )
    }

    return result
  } else {
    return mapItem
  }
}

export { map }