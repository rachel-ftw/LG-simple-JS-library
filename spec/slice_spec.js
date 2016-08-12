import { slice } from "../src/slice.js"

describe( 'slice', () => {
  it('returns an empty array for null', () =>{
    expect(slice(null)).toEqual([])
  })

  it('returns an empty array for undefined', () =>{
    expect(slice(undefined)).toEqual([])
  })

  it('returns a piece of an intake array', () =>{
    expect(slice([3,4,5,7,6,8,2,3], 2, 5)).toEqual([5, 7, 6])
  })

  it('it returns an arrayified string for strings', () =>{
    expect(slice('hello')).toEqual(["h", "e", "l", "l", "o"])
  })

  it('returns an empty array for an object', () =>{
    expect(slice({})).toEqual([])
  })
})