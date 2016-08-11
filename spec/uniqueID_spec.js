import { uniqueID } from '../dist/uniqueID.js'

describe( 'uniqueID', () => {
  it( 'generates unique IDs for two items in succession', () => {
    const first = uniqueID()
    const second = uniqueID()

    expect( first === second ).toBe( false )
  })

  it( 'prefixes the ID string with supplied input', () => {
    expect( uniqueID( 'prefix' ).startsWith( 'prefix-') ).toBe( true )
  })
})

