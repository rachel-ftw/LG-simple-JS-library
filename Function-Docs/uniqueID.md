#Unique ID

###Overview

[Lodash uniqueID](https://lodash.com/docs#uniqueId)

Generates a unique ID. If prefix is given, the ID is appended to it.


###Technical Explanation

This ended up being comparitively simple.  We set the var id to -1, so that our count would start at 0. We created a function that took the prefix and ++'d id every time it was called. we returned a turnary that made the prefix empty if there wasn't one, otherwise it added the prefix and the current id number.

If we were to work on it more we'd add precautionary measures so that if this were running in different places it wouldn't potentially cover the same id#'s


### Code Example

```
uniqueId('contact_');
// 'contact_104'

uniqueId();
// '105'
```