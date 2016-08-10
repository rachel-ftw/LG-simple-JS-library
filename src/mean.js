const mean = array => {
  let meanTotal = 0

  for( let index = 0; index < array.length; index++ ){
    meanTotal += array[ index ]
  }

  return meanTotal / array.length
}
export { mean }
