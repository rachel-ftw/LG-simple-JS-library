import { toArray } from '../dist/toArray.js'

describe('toArray', () => {
  it('converts strings to array', () => {
    expect (toArray('hi')).toEqual(['h', 'i'])
  })
  
  it('converts objects to array', () => {
    expect (toArray({ 'a': 1, 'b': 2 })).toEqual([1, 2])
  })
  
  it('returns empty array for numbers', () => {
    expect (toArray(1)).toEqual([])
  })
  
  it('returns empty array for null', () => {
    expect (toArray(null)).toEqual([])
  })

  it('returns empty array for undefined', () => {
    expect (toArray(undefined)).toEqual([])
  })
})

