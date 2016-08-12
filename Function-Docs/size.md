# Size

### Overview
Gets the size of collection by returning its length for array-like values or the number of own enumerable string keyed properties for objects.
It takes one argument, which is the collection to inspect that can be an array, an object or a string.

Returns
(number): Returns the collection size.

### Technical Explanation

Takes a given object and calculates the length of the object and returns the result of that calculation.

### Code Examples



```

size([1, 2, 3]);
// ➜ 3

size({ 'a': 1, 'b': 2 });
// ➜ 2

size('pebbles');
// ➜ 7

```
