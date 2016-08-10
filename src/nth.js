const nth = ( array, input ) => {
  let n = input > 0 ? input : array.length + input

  return array[ n ]
}

export { nth }
