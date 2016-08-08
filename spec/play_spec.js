import hello from '../dist/play.js'

// hello => (a,b) {
//   return a + b
// }

describe('Hello', function() {
  it('should add two numbers', function() {
    expect(hello(1,2)).toEqual(3)
  })
})