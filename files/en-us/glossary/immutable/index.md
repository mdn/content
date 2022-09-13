---
title: Immutable
slug: Glossary/Immutable
tags:
  - CodingScripting
  - Glossary
---

An immutable {{glossary("object")}} is one whose content cannot be changed.
An object can be immutable for various reasons, for example:

- To improve performance (no planning for the object's future changes)
- To reduce memory use (make {{glossary("object reference","object references")}} instead of cloning the whole object)
- Thread-safety (multiple threads can reference the same object without interfering with one other)
- Lower developer mental burden (the object's state won't change and its behavior is always consistent)

Note that you can easily prove mutability: an object is mutable as long as it offers one way to change its properties. On the other hand, _immutability_ is hard to prove if there are no language semantics to secure it — it is a matter of developer contract. For example, {{jsxref("Object.freeze()")}} is a language-level method to make an object immutable in JavaScript.

## See also

- [Immutable](https://en.wikipedia.org/wiki/Immutable_object) on Wikipedia
- {{glossary("Mutable")}}
