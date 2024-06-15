---
title: Mutable
slug: Glossary/Mutable
page-type: glossary-definition
---

{{GlossarySidebar}}

A **mutable** value is one that can be changed without creating an entirely new value, in comparison with {{Glossary("immutable", "immutable values")}}.

In {{glossary("JavaScript")}}, {{Glossary("Object","objects")}} and {{Glossary("Array","arrays")}} are mutable by default — their properties and elements can be changed without reassigning a new value.
By contrast, {{Glossary("primitive", "primitive values")}} are immutable — once a primitive value is created, it cannot be changed, although the variable that holds it may be reassigned another value.

It can be beneficial to use mutable objects for several reasons:

- To allow for dynamic changes to the object's properties
- Performance and memory (no need to create a new object)

## See also

- [Immutable object](https://en.wikipedia.org/wiki/Immutable_object) on Wikipedia
- Glossary
  - {{glossary("Immutable")}}
