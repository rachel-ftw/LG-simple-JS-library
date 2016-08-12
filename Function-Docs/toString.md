# toString

### Overview

[Lodash toString](https://lodash.com/docs#toString)

Converts value to a string. An empty string is returned for null and undefined values. The sign of -0 is preserved.

### Technical Explanation

We created the function toString that takes a value. if intake is null or undefined then it returns an empty string, otherwise it concatonates the intake value into a string.

### Code Example

```
toString(null)
// ''

toString(-0)
// '-0'

toString([1, 2, 3])
// '1,2,3'
```