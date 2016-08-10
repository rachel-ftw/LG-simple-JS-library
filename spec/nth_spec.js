import { nth } from '../dist/nth.js'

describe('nth', () => {
  it('returns the element in the given index of the array', () => {
    const array = [5, 6, 7, 8]
    expect(nth(array, 2)).toEqual(7)
  })
  it('uses the absolute value to return the element in the given index of the array', () => {
    const array = [8, 7, 3, 4, 6]
    expect(nth(array, -2)).toEqual(3)
  })
})
