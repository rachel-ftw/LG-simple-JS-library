let id = -1

const uniqueID = ( prefix='' ) => {
  id++
  return prefix === '' ? id + '' : `${prefix}-${id}`
}

export { uniqueID }