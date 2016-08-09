import {stubArray} from "../dist/stubArray.js"

describe( 'stubArray', () => {
  it('outputs an empty array', () =>{
    expect(stubArray()).toEqual([])
  })
})
