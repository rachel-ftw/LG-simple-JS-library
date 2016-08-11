import { divide } from '../dist/divide.js'

describe('divide', () => {
  it('divides two numbers', () => {
    expect(divide(100, 25)).toEqual(4)
  })
})