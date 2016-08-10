import {multiply} from '../dist/multiply.js'

describe ('multiply', () => {
  it('multiplies two numbers', () => {
    expect(multiply(4,5)).toEqual(20)
  })
})
