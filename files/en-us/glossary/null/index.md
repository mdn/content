---
title: "Null"
slug: Glossary/Null
page-type: glossary-definition
---

{{GlossarySidebar}}

In computer science, a **`null`** value represents a reference that points, generally intentionally, to a nonexistent or invalid {{glossary("object")}} or address. The meaning of a null reference varies among language implementations.

In {{Glossary("JavaScript")}}, `null` is marked as one of the {{Glossary("Primitive", "primitive values")}}, because its behavior is seemingly primitive. However, when using the [`typeof`](/en-US/docs/Web/JavaScript/Reference/Operators/typeof) operator, it returns `"object"`.

```js
console.log(typeof null); // "object"
```

This is considered [a bug](/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null), but one which cannot be fixed because it will break too many scripts.

## See also

- [JavaScript data types](/en-US/docs/Web/JavaScript/Data_structures)
- The JavaScript global object: [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null)
- [Null pointer](https://en.wikipedia.org/wiki/Null_pointer) on Wikipedia
- **[Glossary](/en-US/docs/Glossary)**

  - {{Glossary("JavaScript")}}
  - {{Glossary("string")}}
  - {{Glossary("number")}}
  - {{Glossary("bigint")}}
  - {{Glossary("boolean")}}
  - {{Glossary("null")}}
  - {{Glossary("undefined")}}
  - {{jsxref("Symbol")}}
