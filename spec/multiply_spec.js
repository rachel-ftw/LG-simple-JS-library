import {multiply} from '../dist/multiply.js'

describe ('multiply', () => {
  it('multiplies two numbers', () => {
    expect(multiply(4,5)).toEqual(20)
  })

  it( 'treats undefined as 1', () => {
    expect( multiply( 5, undefined ) ).toEqual( 5 )
  })

  it( 'treats null as 0', () => {
    expect( multiply( 5, null ) ).toEqual( 0 )
  })
})
