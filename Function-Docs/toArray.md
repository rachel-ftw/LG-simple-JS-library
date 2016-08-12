# toArray

### Overview

[Lodash toArray](https://lodash.com/docs#toArray)

Converts value to an array.


### Technical Explanation

create function toArray that takes a single input. 
If our input is a string then split the string and return it.
If our input is an object the run through the contents of the object with a for loop and push the values to an empty array and return that empty array. In all other cases, return an empty array.

### Code Example

```
toArray({ 'a': 1, 'b': 2 })
// [1, 2]

toArray('abc')
// ['a', 'b', 'c']

toArray(1)
// []

toArray(null)
// []
```