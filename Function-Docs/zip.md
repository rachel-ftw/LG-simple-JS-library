# Zip

### Overview

[Lodash zip](https://lodash.com/docs#zip)

Zip takes multiple arrays and resorts the entries into a new array of array's, like the teeth of a zipper.


### Technical Explanation

In our code we created a function that took many array inputs. We created a for loop that first checked that the input was an array and if not returned an empty array. if the entry was an array then if the array length was greater than 0 we set maxLength to the length of the array.

next we created concurent for loops that went over the array length (the number of arrays you have) and created smaller arrays consisting of the indicies of other arrays.
We pushed that to an array and returned it.

### Code Example

```
zip(['a', 'b'], [1, 2], [true, false]);
// [['a', 1, true], ['b', 2, false]]
```
