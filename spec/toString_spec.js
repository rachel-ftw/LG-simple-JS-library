import { toString } from '../dist/toString.js'

describe('toString', () => {

  it('it converts a value to a string', () => {
    expect(toString(1)).toEqual('1')
  })

  it('it converts a value to a string', () => {
    expect(toString([1, 2, 3])).toEqual('1,2,3')
  })

  it('returns an empty string for null and undefined values', () => {
    let empty = null||undefined
    expect(toString(empty)).toEqual("")
  })
  // can this be two tests? were having some trouble getting null || undefined to be graceful in toString.js
})