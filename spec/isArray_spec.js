import {isArray} from '../dist/isArray.js'

// Write a test to check if an input is an array; it should return true or false

describe('isArray', () => {
  
  it('isArray checks if input is an array', () => {
    const arrayThing = [1, 2, 3]
    expect(isArray(arrayThing)).toEqual(true)
  })

  it('isArray returns false if input is not an array', () => {
    const stringThing = "This is not an array"
    expect(isArray(stringThing)).toEqual(false)
  })
})