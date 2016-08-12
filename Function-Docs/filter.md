# Filter

### Overview

Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with two arguments: (collection): The collection to iterate over.
(predicate): The function invoked per iteration.


### Technical Explanation

The function iterates over the collection and returns the specific elements that match the criteria. There are multiple methods used in this function which differentiate in the manner in which they iterate over the collection and push the matching elements into the new array in a specified manner according to their index key within the object and list of objects.

### Code Examples

```

var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

filter(users, function(o) { return !o.active; });
// ➜ objects for ['fred']

filter(users, { 'age': 36, 'active': true });
// ➜ objects for ['barney']

filter(users, ['active', false]);
// ➜ objects for ['fred']

filter(users, 'active');
// ➜ objects for ['barney']

```
