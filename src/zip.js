const zip = input => {
  if(!(input instanceof Array)) {
    return []
  }
  let result = []

  for( var keys in input ) {
    let baby = []
    baby.push(input[keys])
    result.push(baby)
  }

  return result

}

export { zip }

// Take an entry of arrays 
// Not really taking the input of multiple arrays