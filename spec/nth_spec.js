import { nth } from '../dist/nth.js'

describe('nth', () => {
  it('returns the element in the given index of the array', () => {
    const array = [5, 6, 7, 8]

    expect(nth(array, 2)).toEqual( array[ 2 ] )
  })

  it('uses the absolute value to return the element in the given index of the array', () => {
    const array = [8, 7, 3, 4, 6]
    const negative_n = -2
    const offset = array.length + negative_n

    expect(nth(array, negative_n)).toEqual( array[ offset ] )
  })

  it( 'returns undefined for out of bound indeces', () => {
    expect( nth( [1,2], 100 )).toBe( undefined )
  })
})
