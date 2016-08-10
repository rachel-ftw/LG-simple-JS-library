import {add} from "../dist/add.js"

describe('add', ()=> {
  it('adds two numbers together', () => {
    expect(add(3,4)).toEqual(7)
  })
})
