# upperCase

### Overview

[Lodash upperCase](https://lodash.com/docs#upperCase)

We picked this one because we thought it would be easy. We were wrong. Turns out, regular expressions are a bitch.

Converts string, as space separated words, to upper case. When we got into testing we found that there were a bunch of edge cases we had to account for, and that was challenging.

### Technical Explanation

First, we created we created variables containing number and letters, in a string and array respectively. 

(What does caps mean again?)
(is this 'hashing'? I think so.)



### Code Example

```
upperCase('--foo-bar')
// 'FOO BAR'

upperCase('fooBar')
// 'FOO BAR'

upperCase('__foo_bar__')
// 'FOO BAR'
```
