const filter = ( collection, predicate ) => {
  if( collection === undefined ) {
    return []
  }

  const fn = predicate || ( a => a )

  if( typeof( fn ) === 'function' ) {
    return filterByFunction( collection, fn )
  } else if ( typeof( fn ) === 'string' ) {
    return filterByKeyValue( collection, fn )
  } else {
    return filterByObject( collection, fn )
  }
}

const filterByFunction = ( collection, predicate ) => {
  let result = []

  for (let index = 0; index < collection.length; index++){
    if( predicate( collection[ index ] ) ) {
      result.push( collection[ index ] )
    }
  }

  return result
}

const filterByObject = ( collection, predicate ) => {
  let result = []

  for (let index = 0; index < collection.length; index++) {
    let keysMatch = true

    for( const key in predicate ) {
      keysMatch = keysMatch && ( collection[ index ][ key ] === predicate[ key ] )
    }

    if( keysMatch ) {
      result.push( collection[ index ] )
    }
  }

  return result
}

const filterByKeyValue = ( collection, key ) => {
  let result = []

  for (let index = 0; index < collection.length; index++){
    if( collection[ index ][ key ] ) {
      result.push( collection[ index ] )
    }
  }

  return result
}

export { filter }