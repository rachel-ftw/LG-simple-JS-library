import { now } from '../dist/now.js'

describe('now', () => {
  it('prints the current UNIX timestamp in milliseconds', () => {
    expect( now() - Date.now() ).toEqual( 0 )
  })
})
