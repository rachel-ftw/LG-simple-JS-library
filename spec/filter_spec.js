import { filter } from '../dist/filter.js'

describe ('filter', () => {
  var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];

  it('can search by object multiple key/value pairs', () => {
    expect(filter(users, { 'age': 36, 'active': true } ))
      .toEqual([{ 'user': 'barney', 'age': 36, 'active': true }])
  })

  it( 'can search by truthy values', () => {
    expect(filter(users, 'active'))
      .toEqual( [{ 'user': 'barney', 'age': 36, 'active': true }])
  })

  it( 'can feed in a function to return values', () => {
    expect(filter(users, function(o) { return !o.active; })).toEqual([{ 'user': 'fred',   'age': 40, 'active': false }])
  })

  it( 'a string returns an array of the letters', () => {
    expect(filter('string')).toEqual( ["s", "t", "r", "i", "n", "g"] )
  })

  it( 'non string/object entries return empty array', () => {
    expect(filter(undefined)).toEqual( [] )
  })

  it( 'passes through the values of an array unchanged', () => {
    expect(filter([1,2,3])).toEqual( [1,2,3] )
  })
})
