import { invert } from '../dist/invert.js'

describe('invert', () => {

  it('creates a new object with the keys and values reversed', () => {
    expect(invert({ 'a': 1, 'b': 2, 'c': 1 })).toEqual({ '1': 'c', '2': 'b' })
  })

  it('for an array it returns the items in the array as the key names, with the values as their array indices', () => {
    expect(invert(['a','b','c'])).toEqual({a: "0", b: "1", c: "2"})
  })

  it( 'returns an empty object for a null input', () =>{
    expect( invert( null )).toEqual( {} )
  })

  it( 'returns an empty object for a undefined input', () =>{
    expect( invert( undefined )).toEqual( {} )
  })
})