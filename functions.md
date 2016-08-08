#The List

Pulling data from [lodash](https://lodash.com/)

###Less Challenging

- [ ] [_.isArray](https://lodash.com/docs#isArray): Checks if a value is an a array, output is boolean
- [ ] [_.stubArray](https://lodash.com/docs#stubArray): This method returns a new empty array.
- [ ] [_.upperCase](https://lodash.com/docs#upperCase): Converts string, as space separated words, to upper case.
- [ ] [_.replace](https://lodash.com/docs#replace): Replaces matches for pattern in string with replacement. 
- [ ] [_.pad](https://lodash.com/docs#pad): Pads string on the left and right sides if it’s shorter than length. Padding characters are truncated if they can’t be evenly divided by length.
- [ ] [](): 


###More challenging

####Arrays

- [ ] [_.map](https://lodash.com/docs#map): Creates an array of values by running each element in collection thru iteratee. 
- [ ] [_.sortBy](https://lodash.com/docs#sortBy): Creates an array of elements, sorted in ascending order by the results of running each element in a collection thru each iteratee. This method performs a stable sort, that is, it preserves the original sort order of equal elements. The iteratees are invoked with one argument: (value).
- [ ] [_.filter](https://lodash.com/docs#filter): Iterates over elements of collection, returning an array of all elements predicate returns truthy for. 
- [ ] [_.slice](https://lodash.com/docs#slice): Creates a slice of array from start up to, but not including, end.
- [ ] [_.flow](https://lodash.com/docs#flow): Creates a function that returns the result of invoking the given functions with the this binding of the created function, where each successive invocation is supplied the return value of the previous.
- [ ] [_.bindAll](https://lodash.com/docs#bindAll): Binds methods of an object to the object itself, overwriting the existing method.


####Objects

- [ ] [_.merge](https://lodash.com/docs#merge): This method is like _.assign except that it recursively merges own and inherited enumerable string keyed properties of source objects into the destination object. Source properties that resolve to undefined are skipped if a destination value exists. Array and plain object properties are merged recursively. Other objects and value types are overridden by assignment. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources. 


###You're a super hero and you get extra credit.


- [ ] [_.chain](https://lodash.com/docs#chain): Creates a lodash wrapper instance that wraps value with explicit method chain sequences enabled. The result of such sequences must be unwrapped with _#value.
- [ ] [_.tap](https://lodash.com/docs#tap): This method invokes interceptor and returns value. The interceptor is invoked with one argument; (value). The purpose of this method is to "tap into" a method chain sequence in order to modify intermediate results.
