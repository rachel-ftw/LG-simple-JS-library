# Slice

### Overview

[Lodash Slice](https://lodash.com/docs#slice)

Creates a slice of array from start up to, but not including, end. 

### Technical Explanation

We created the slice function that takes the input array, a starting slice location which defaults to 0 and an ending slice location.
If your input wasn't an array or string we returned an ampty array.
we created an empty array
using a for loop we pushed the indicy of input to that array.
at the end we returned the resulting array.


### Code Example

```
slice([1,2,3,4,5,6,7], 1, 4)
// [2,3,4,5]
```
