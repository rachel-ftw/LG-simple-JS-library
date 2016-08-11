import { size } from '../dist/size.js'

describe('size', () => {
  it('returns the length of an array', () => {
    expect(size([1, 2, 3])).toEqual(3)
  })

  it('returns the length of an object', () => {
    expect(size({'a':1, 'b':2, 'c':3})).toEqual(3)
  })

  it('returns the length of a string', () => {
    expect(size('hello')).toEqual(5)
  })
})