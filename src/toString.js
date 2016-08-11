const toString = intake => {
  let output = ""

  if (intake === undefined){
    return output
    } else if ( intake === null) {
      return output
    } else {
      return output += intake
    }
}

export { toString }