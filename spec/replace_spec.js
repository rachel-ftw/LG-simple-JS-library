import { replace } from '../dist/replace.js'

describe('replace', () => {
  it('replaces specified expression with a string', () => {
    expect(replace('Hi Fred', 'Fred', 'Barney')).toEqual('Hi Barney')
  })
})
