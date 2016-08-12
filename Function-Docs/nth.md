# nth

### Overview
Gets the element at index n of array. If n is negative, the nth element from the end is returned. It takes two arguments:
  Array (array): The array to query.
  [n=0] (input): The index of the element to return.



Returns the nth element of an array.

### Technical Explanation

The arguments are taken and looks for the specific index to return from the array.

### Code Examples



```

var array = ['a', 'b', 'c', 'd'];

nth(array, 1);
// ➜ 'b'

nth(array, -2);
// ➜ 'c';

```
