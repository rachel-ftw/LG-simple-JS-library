import { lt } from '../dist/lt.js'

describe('lt', () => {
  it('is true if the first number is lower than the second', () => {
    expect(lt(1,5)).toEqual(true)
  })

  it('is false if the first number is higher than the second', () => {
    expect(lt(5,1)).toEqual(false)
  })

  it('is false if the first number is equal to the second', () => {
    expect(lt(5,5)).toEqual(false)
  })
})

//check what happens if you enter 3 numbers when we get console workin with lodash
