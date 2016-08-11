import { keys } from '../dist/keys.js'

describe( 'keys', () => {
  it( 'retuns keys in an object', () => {
    expect(keys({'a':1,'c':3,'b':2}) ).toEqual(['a','c','b'])
  })

})