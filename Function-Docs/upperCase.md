# upperCase

### Overview

[Lodash upperCase](https://lodash.com/docs#upperCase)

We picked this one because we thought it would be easy. We were wrong. Turns out, regular expressions are a bitch.

Converts string, as space separated words, to upper case. When we got into testing we found that there were a bunch of edge cases we had to account for, and that was challenging.

### Technical Explanation

First, we created we created variables containing number and letters, in a string and array respectively. 

Created hashing-maps in order to be able to parse through te given argument, then check if they match the criteria. Then, when they match they are replaced with the given elements of the hashing-map that corelates to that given character by either turning the letter into an uppercase, adding a space between the characters, or completely omitting the character in that index key. We used regexp characters in order t express the iteration of the function through the string and check its validity with the hashing-map.



### Code Example

```
upperCase('--foo-bar')
// 'FOO BAR'

upperCase('fooBar')
// 'FOO BAR'

upperCase('__foo_bar__')
// 'FOO BAR'
```
