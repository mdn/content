---
title: 'Null'
slug: Glossary/Null
tags:
  - CodingScripting
  - Glossary
---
In computer science, a **`null`** value represents a reference that points, generally intentionally, to a nonexistent or invalid {{glossary("object")}} or address. The meaning of a null reference varies among language implementations.

In {{Glossary("JavaScript")}}, `null` is marked as one of the {{Glossary("Primitive", "primitive values")}}, because its behavior is seemingly primitive.

But in certain cases, `null` is not as "primitive" as it first seems! Every Object is derived from `null` value, and therefore `typeof` operator returns `object` for it:

```js
typeof null === 'object' // true
```

## See also

- [JavaScript data types](/en-US/docs/Web/JavaScript/Data_structures)
- The JavaScript global object: {{jsxref("null")}}
- {{Interwiki("wikipedia", "Null pointer")}} on Wikipedia
- **[Glossary](/en-US/docs/Glossary)**

  - {{Glossary("JavaScript")}}
  - {{Glossary("string")}}
  - {{Glossary("number")}}
  - {{Glossary("bigint")}}
  - {{Glossary("boolean")}}
  - {{Glossary("null")}}
  - {{Glossary("undefined")}}
  - {{Glossary("symbol")}}
