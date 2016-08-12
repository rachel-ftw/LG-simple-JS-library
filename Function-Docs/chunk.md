# Chunk

### Overview
The chunk function returns an array of arrays of the specified chunk size.



### Technical Explanation
The chunk function takes two parameters: an input and a chunk size. If the input is not an array, the function will return an empty array. 

The function contains two loops. The outer loop creates the array and the inner loop designates the size of the chunks. The new arrays are then pushed to the empty array that was created, and the result is returned.


### Code Examples



```
_.chunk( [ 1, 2, 3, 4 ], 2 )
// [1,2], [3,4]
```