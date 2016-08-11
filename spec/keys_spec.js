import { keys } from '../dist/keys.js'

describe( 'keys', () => {
  it( 'returns keys in an object', () => {
    expect(keys({'a':1,'c':3,'b':2}) ).toEqual(['a','c','b'])
  })

  it( 'returns an empty array when given an empty object', () => {
    expect(keys({}) ).toEqual([])
  })

  it( 'returns an the numbers of the characters in an array for a string', () => {
    expect(keys('yes') ).toEqual(["0", "1", "2"])
  })

  it( 'returns the number of the indicies for an array with content', () => {
    expect(keys(['yes','no','maybe']) ).toEqual(["0", "1", "2"])
  })

  it( 'returns an empty array for a number entry', () => {
    expect(keys(40) ).toEqual([])
  })
})