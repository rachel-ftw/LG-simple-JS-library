import { map } from '../dist/map.js'

const identity = element => element

describe( 'map', () => {
  it( 'handles a null input by returning an empty array', () => {
    expect( map( null, identity ) ).toEqual( [] )
  })

  it( 'handles an undefined input by returning an empty array', () => {
    expect( map( undefined, identity ) ).toEqual( [] )
  })

  it( "handles an object input by returning all of that own object's keys", () => {
    const original = { a: 2, b: 4 }

    expect( map( original, identity ) ).toEqual( [ 2, 4 ] )
  })

  it( 'handles a string input by returning an array of characters in that string', () => {
    const original = "test string"

    expect( map( original, identity ) ).toEqual( original.split( '' ) )
  })

  it( 'applies the supplied transformation to each element in the array', () => {
    const original = [ 1, 2, 3, 4 ]
    const result = map( original, a => a * 2 )

    original.forEach( (element, index) => {
      expect( element * 2 ).toEqual( result[ index ] )
    })
  })

  it( 'does not mutate the original array', () => {
    const original = [ 1, 2, 3, 4 ]
    const result = map( original, a => a * 2 )

    expect( original ).not.toEqual( result )
  })

  it( 'invokes iteratee with value, index, array for an array input', () => {
    const test = ( value, index, array ) =>
      value + '-' + index + '-' + array[ index ]

    expect( map( [ 'a', 'b', 'c' ], test )).toEqual( [ 'a-0-a', 'b-1-b', 'c-2-c' ] )
  })

  it( 'invokes iteratee with value, key, object for an object input', () => {
    const test = ( value, key, object ) =>
      value + '-' + key + '-' + object[ key ]

    expect( map( { a: 1, b: 2, c: 3 }, test )).toEqual( [ '1-a-1', '2-b-2', '3-c-3' ] )

  })
})