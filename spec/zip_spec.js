import { zip } from '../dist/zip.js'

describe('zip', () => {
  it('returns a group of arrays for every element in one array', () => {
    expect(zip([1,2,3])).toEqual([1],[2],[3])
  })

  it('returns a group of arrays with undefined as place holders', () => {
    expect(zip([1,2,3] , [4] , [5,6])).toEqual([1,4,5],[2, undefined, 6],[3, undefined, undefined])
  })

  it('returns an empty array for non-array inputs', () => {
    expect(zip({})).toEqual([])
  })

  it('returns a alternating group of arrays for every element when qty in arrays are equal', () => {
    expect(zip([1,2,3], [4,5,6], [7,8,9])).toEqual([1,4,7],[2,5,8],[3,6,9])
  })
})