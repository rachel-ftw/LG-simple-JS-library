import { pad } from '../dist/pad.js'

describe('pad', () => {
  it('the length of the total string to be 8, when there is an odd num the extra are forced to the end', () => {
    expect( pad('abc', 8) ).toEqual( '  abc   ' )
  })

  it('other characters can be inserted instead of spaces', () => {
    expect( pad('abc', 8, '_-') ).toEqual( '_-abc_-_' )
  })

  it('when the length is equal to the string it just returns the letters', () => {
    expect( pad('abc', 3) ).toEqual( 'abc' )
  })

  it('when the length is less than the string it returns string', () => {
    expect( pad('abc', 2) ).toEqual( 'abc' )
  })
})