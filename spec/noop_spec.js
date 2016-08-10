import { noop } from '../dist/noop.js'

describe('noop', () => {
  it('returns undefined', () => {
    expect(noop('a')).toEqual(undefined)
  })
})
