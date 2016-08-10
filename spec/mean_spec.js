import { mean } from '../dist/mean.js'

describe ('mean', () => {
  it('calculates the average of a set of numbers in an array', () => {
    expect(mean([3,4,5,6,7])).toEqual(5)
  })

  it( 'returns NaN when non numeric input included', () => {
    expect( isNaN( mean( [1, 2, 3, 'hi'] ))).toBe( true )
  })
})
