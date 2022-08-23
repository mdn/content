---
title: Mutable
slug: Glossary/Mutable
tags:
  - CodingScripting
  - Glossary
  - NeedsContent
---
_Mutable_ is a type of variable that can be changed. In {{glossary("JavaScript")}}, only {{Glossary("Object","objects")}} and {{Glossary("Array","arrays")}} are mutable, not {{Glossary("primitive", "primitive values")}}.

(You _can_ make a variable name point to a new value, but the previous value is still held in memory. Hence the need for garbage collection.)

A **mutable object** is an object whose state can be modified after it is created.

**Immutables** are the objects whose state cannot be changed once the object is created.

**Strings and Numbers** are **Immutable**. Lets understand this with an example:

```js
let immutableString = "Hello";

// In the above code, a new object with string value is created.

immutableString = `${immutableString} World`;

// We are now appending "World" to the existing value.
```

On appending the "immutableString" with a string value, following events occur:

1. Existing value of "immutableString" is retrieved
2. "World" is appended to the existing value of "immutableString"
3. The resultant value is then allocated to a new block of memory
4. "immutableString" object now points to the newly created memory space
5. Previously created memory space is now available for garbage collection.

## See also

- [Immutable object](https://en.wikipedia.org/wiki/Immutable_object) on Wikipedia
