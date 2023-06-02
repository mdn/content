---
title: Immutable
slug: Glossary/Immutable
page-type: glossary-definition
---

{{GlossarySidebar}}

An immutable value is one whose content cannot be changed without creating an entirely new value.

In {{glossary("JavaScript")}}, {{Glossary("primitive", "primitive values")}} are immutable — once a primitive value is created, it cannot be changed, although the variable that holds it may be reassigned another value.
By contrast, {{Glossary("Object","objects")}} and {{Glossary("Array","arrays")}} are mutable by default — their properties and elements can be changed without reassigning a new value.

It can be beneficial to use immutable objects for several reasons:

- To improve performance (no planning for the object's future changes)
- To reduce memory use (make {{glossary("object reference","object references")}} instead of cloning the whole object)
- Thread-safety (multiple threads can reference the same object without interfering with one other)
- Lower developer mental burden (the object's state won't change and its behavior is always consistent)

Note that you can easily prove mutability: an object is mutable as long as it offers one way to change its properties. On the other hand, _immutability_ is hard to prove if there are no language semantics to secure it — it is a matter of developer contract. For example, {{jsxref("Object.freeze()")}} is a language-level method to make an object immutable in JavaScript.

## See also

- [Immutable](https://en.wikipedia.org/wiki/Immutable_object) on Wikipedia
- {{glossary("Mutable")}}
