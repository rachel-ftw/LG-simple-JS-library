import {upperCase} from '../dist/upperCase.js'

describe('upperCase', () => {

  it ('upperCase converts any letter character in string to upper case', () => {
    expect(upperCase('abc')).toEqual('ABC')
    //better to put variables in const or hard code?
  })

  it('adds space mid word for camelCase', () => {
    expect(upperCase('camelCase')).toEqual('CAMEL CASE')
  })

  it('adds space before number', () => {
    expect(upperCase('abc123')).toEqual('ABC 123')
    //should this be broken into two different tests?
  })

  it('converts a special character to a space when it is directly between two letters or numbers', () => {
    expect(upperCase('foo_bar')).toEqual('FOO BAR')
  })

  it('deletes the space at beginning and end of string', () => {
    expect(upperCase('  foo bar  ')).toEqual('FOO BAR')
  })

  it('only takes one argument', () => {
    expect(upperCase('fooBar', 'somethingElse')).toEqual('FOO BAR')
  })

  it('converts numbers to a string', () => {
    expect(upperCase(123)).toEqual('123')
  })
//write a test for passing variables containing strings? 
//should we write test for passing undefined words(not a string)
//converts multiple special characters into 1 space
//empty returns empty string
})
