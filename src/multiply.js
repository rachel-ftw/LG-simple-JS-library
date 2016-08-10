const multiply = ( num1, num2 ) => {
  let value_one = num1 === undefined ? 1 : num1
  let value_two = num2 === undefined ? 1 : num2

  return value_one * value_two
}

export { multiply }
