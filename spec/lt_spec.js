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

  it( 'compares the first two numbers', () => {
    expect( lt( 1, 2, 3 ) ).toBe( true )
  })

  it( 'treats null as less than positive numbers', () => {
    expect( lt( null, 1 ) ).toBe( true )
  })

  it( 'treats null as greater than negative numbers', () => {
    expect( lt( null, -1 ) ).toBe( false )
  })

})
