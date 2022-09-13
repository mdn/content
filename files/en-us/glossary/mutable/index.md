---
title: Mutable
slug: Glossary/Mutable
tags:
  - CodingScripting
  - Glossary
  - NeedsContent
---

_Mutable_ is a type of variable that can be changed without creating an entirely new value. In {{glossary("JavaScript")}}, {{Glossary("Object","objects")}} and {{Glossary("Array","arrays")}} are mutable by default, but {{Glossary("primitive", "primitive values")}} are not — once a primitive value is created, it cannot be changed, although the variable that holds it may be reassigned.

Note that you can easily prove mutability: an object is mutable as long as it offers one way to change its properties. On the other hand, _immutability_ is hard to prove if there are no language semantics to secure it — it is a matter of developer contract. For example, {{jsxref("Object.freeze()")}} is a language-level method to make an object immutable in JavaScript.

## See also

- [Immutable object](https://en.wikipedia.org/wiki/Immutable_object) on Wikipedia
- {{glossary("Immutable")}}
