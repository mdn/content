---
title: Type
slug: Glossary/Type
page-type: glossary-definition
---

{{GlossarySidebar}}

**Type** is a characteristic of a {{glossary("value")}} affecting what kind of data it can store, and the structure that the data will adhere to. For example, a {{Glossary("boolean")}} [Data Type](/en-US/docs/Web/JavaScript/Data_structures) can hold only a `true` or `false` value at any given time, whereas a {{Glossary("string")}} has the ability to hold a string or a sequence of characters, a {{Glossary("number")}} can hold numerical values of any kind, and so on.

A value's data type also affects the operations that are valid on that value. For example, a value of type number can be multiplied by another number, but not by a string - even if that string contains _only_ a number, such as the string "2".

Types also provides us with useful knowledge about the comparison between different values. Comparison between structured types is not always an easy assumption, as even if the previous data structure is the same, there could be inherited structures inside of the [Prototype Chain](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

If you are unsure of the type of a value, you can use the [`typeof`](/en-US/docs/Web/JavaScript/Reference/Operators/typeof) operator.

## See also

- [Data type](https://en.wikipedia.org/wiki/Data_type) on Wikipedia
- [JavaScript data types](/en-US/docs/Web/JavaScript/Data_structures)
- [Glossary](/en-US/docs/Glossary)

  - {{Glossary("JavaScript")}}
  - {{Glossary("string")}}
  - {{Glossary("number")}}
  - {{Glossary("bigint")}}
  - {{Glossary("boolean")}}
  - {{Glossary("null")}}
  - {{Glossary("undefined")}}
  - {{Glossary("symbol")}}
