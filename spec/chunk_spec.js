import { chunk } from '../dist/chunk.js'

describe('chunk', () => {
  it( 'returns empty array for null input', () => {
    expect(chunk( null )).toEqual( [])
  })  

  it( 'returns empty array for undefined input', () => {
    expect(chunk( undefined )).toEqual( [])
  })

  it( 'returns empty array for object input', () => {
    expect(chunk( {} )).toEqual( [])
  })

  it( 'returns empty array for primitive input', () => {
    expect(chunk( 1 )).toEqual( [])
  })

  it( 'returns an array of arrays of size chunk', () => {
    expect(chunk( [ 1, 2, 3, 4 ], 2 )).toEqual( [ [1,2], [3,4] ])
  })

  it( 'returns an array of arrays of size chunk, putting leftovers in last entry', () => {
    expect(chunk( [ 1, 2, 3, 4 ], 3 )).toEqual( [ [1,2,3], [4] ])
  })

  it( 'returns an array of a single array element when chunk size larger than array size', () => {
    expect(chunk( [ 1, 2, 3, 4 ], 5 )).toEqual( [ [1,2,3,4] ])
  })
})