# Keys

### Overview

Creates an array of the own enumerable property names of object. It takes one argument:
(Object): The object to query.


### Technical Explanation

Takes an object which it iterates through and returns the keys of the object. For strings the index number of each character is treated as a key. The keys are then returned grouped together in an array.

### Code Examples

```

keys('hi');
// ➜ ['0', '1']

```
