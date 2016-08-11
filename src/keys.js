const keys = object => {
  let values = []
  // for( var key in object ) {
  //   return Object.keys(object)
  // }
  // return values
  for( var key in object ) {
      values.push( key )
  }
  return values

}
export {keys}