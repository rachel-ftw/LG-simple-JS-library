import {sum} from '../dist/sum.js'

describe('sum', () => {

  it('add together all number values in an array', () => {
    expect(sum([3,6,8])).toEqual(17)
  })

  it('returns 0 for non array entries', () => {
    expect(sum('hello')).toEqual(0)
  })

  it('concatonates strings in an array', () => {
    expect(sum(['Hello', ' World'])).toEqual('Hello World')
  })
})

//returns error for undefined things, how to handle errors?
