const mean = array => {
  let numberCount = 0
  let meanTotal = 0
  for(; numberCount < array.length; numberCount++){
    meanTotal += array[numberCount]
  }
  return meanTotal / numberCount
}
export { mean }
