#The List

Pulling data from [lodash](https://lodash.com/)

##Less Challenging

- [ ] [_.isArray](https://lodash.com/docs#isArray): Checks if a value is an a array, output is boolean
- [ ] [_.stubArray](https://lodash.com/docs#stubArray): This method returns a new empty array.
- [ ] [_.upperCase](https://lodash.com/docs#upperCase): Converts string, as space separated words, to upper case.
- [ ] [_.replace](https://lodash.com/docs#replace): Replaces matches for pattern in string with replacement. 
- [ ] [_.pad](https://lodash.com/docs#pad): Pads string on the left and right sides if it’s shorter than length. Padding characters are truncated if they can’t be evenly divided by length.
- [ ] [_.sum](https://lodash.com/docs#sum): Computes the sum of the values in array.
- [ ] [_.toString](https://lodash.com/docs#toString): Converts value to a string. An empty string is returned for null and undefined values.
- [ ] [_.isString](https://lodash.com/docs#isString): Checks if value is classified as a String primitive or object.
- [ ] [_.nth](https://lodash.com/docs#nth): Gets the element at index n of array. If n is negative, the nth element from the end is returned.
- [ ] [_.toArray](https://lodash.com/docs#toArray): Converts value to an array.
- [ ] [_.wrap](https://lodash.com/docs#wrap): Creates a function that provides value to wrapper as its first argument. Any additional arguments provided to the function are appended to those provided to the wrapper. The wrapper is invoked with the this binding of the created function.




##More challenging

- [ ] [_.unary](https://lodash.com/docs#unary): Creates a function that accepts up to one argument, ignoring any additional arguments.

####Arrays

- [ ] [_.map](https://lodash.com/docs#map): Creates an array of values by running each element in collection thru iteratee. 
- [ ] [_.sortBy](https://lodash.com/docs#sortBy): Creates an array of elements, sorted in ascending order by the results of running each element in a collection thru each iteratee. This method performs a stable sort, that is, it preserves the original sort order of equal elements. The iteratees are invoked with one argument: (value).
- [ ] [_.filter](https://lodash.com/docs#filter): Iterates over elements of collection, returning an array of all elements predicate returns truthy for. 
- [ ] [_.slice](https://lodash.com/docs#slice): Creates a slice of array from start up to, but not including, end.
- [ ] [_.flow](https://lodash.com/docs#flow): Creates a function that returns the result of invoking the given functions with the this binding of the created function, where each successive invocation is supplied the return value of the previous.
- [ ] [_.bindAll](https://lodash.com/docs#bindAll): Binds methods of an object to the object itself, overwriting the existing method.
- [ ] [](): 

####Objects

- [ ] [_.merge](https://lodash.com/docs#merge): This method is like _.assign except that it recursively merges own and inherited enumerable string keyed properties of source objects into the destination object. Source properties that resolve to undefined are skipped if a destination value exists. Array and plain object properties are merged recursively. Other objects and value types are overridden by assignment. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources. 
- [ ] [_.keys](https://lodash.com/docs#keys): Creates an array of the own enumerable property names of object. 
- [ ] [_.invert](https://lodash.com/docs#invert): Creates an object composed of the inverted keys and values of object. If object contains duplicate values, subsequent values overwrite property assignments of previous values.
- [ ] [_.assign](https://lodash.com/docs#assign): Assigns own enumerable string keyed properties of source objects to the destination object. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources. 

##You're a super hero and you get extra credit.

- [ ] [_.chain](https://lodash.com/docs#chain): Creates a lodash wrapper instance that wraps value with explicit method chain sequences enabled. The result of such sequences must be unwrapped with _#value.
- [ ] [_.tap](https://lodash.com/docs#tap): This method invokes interceptor and returns value. The interceptor is invoked with one argument; (value). The purpose of this method is to "tap into" a method chain sequence in order to modify intermediate results.
- - [ ] [](): 
