# map

### Overview
Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with two arguments: mapItem and transform. It takes two arguments:
mapItem (Array|Object): The collection to iterate over.
(Function): The function invoked per iteration.


Returns
(Array): Returns the new mapped array.


### Technical Explanation

The inputs for the arguments are taken and then the function goes through a loop through every key in the mapItem and the results are pushed into a new array that is returned at the end of the loop.


### Code Examples


```
var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];

map(users, 'user');
// ➜ ['barney', 'fred']

```
