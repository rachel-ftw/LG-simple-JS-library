# Pad

### Overview
Pads string on the left and right sides if it’s shorter than length. Padding characters are truncated if they can’t be evenly divided by length. It takes three arguments:
  (input): The string to pad.
  (length): The padding length expressed by number.
  (charset): The string used as padding.


Returns
(string): Returns the padded string.

### Technical Explanation

The arguments are taken and the length of the string given is calculated, then the function calculates the remainder to put evenly between the front and end of the string. If the remainder is an odd number, then the back gets the extra character to put, which is by default a space, unless specified in the charset argument.

### Code Examples



```

pad('abc', 8);
// ➜ '  abc   '

pad('abc', 8, '_-');
// ➜ '_-abc_-_'

pad('abc', 3);
// ➜ 'abc'

```
