---
title: Primitive
slug: Glossary/Primitive
tags:
  - CodingScripting
  - Glossary
  - JavaScript
---
In {{Glossary("JavaScript")}}, a **primitive** (primitive value, primitive data type) is data that is not an {{Glossary("object")}} and has no {{glossary("method","methods")}}. There are 7 primitive data types: {{Glossary("string")}}, {{Glossary("number")}}, {{Glossary("bigint")}}, {{Glossary("boolean")}}, {{Glossary("undefined")}}, {{Glossary("symbol")}}, and {{Glossary("null")}}.

Most of the time, a primitive value is represented directly at the lowest level of the language implementation.

All primitives are **immutable**, i.e., they cannot be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.

## Example

This example will help you understand that primitive values are **immutable.**

### JavaScript

```js
// Using a string method doesn't mutate the string
var bar = "baz";
console.log(bar);               // baz
bar.toUpperCase();
console.log(bar);               // baz

// Using an array method mutates the array
var foo = [];
console.log(foo);               // []
foo.push("plugh");
console.log(foo);               // ["plugh"]

// Assignment gives the primitive a new (not a mutated) value
bar = bar.toUpperCase();       // BAZ
```

A primitive can be replaced, but it can't be directly altered.

## Primitive wrapper objects in JavaScript

Except for `null` and `undefined`, all primitive values have object equivalents that wrap around the primitive values:

- {{jsxref("String")}} for the string primitive.
- {{jsxref("Number")}} for the number primitive.
- {{jsxref("BigInt")}} for the bigint primitive.
- {{jsxref("Boolean")}} for the boolean primitive.
- {{jsxref("Symbol")}} for the symbol primitive.

The wrapper's [`valueOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) method returns the primitive value.

## See also

- [JavaScript data types](/en-US/docs/Web/JavaScript/Data_structures)
- {{Interwiki("wikipedia", "Primitive data type")}} (Wikipedia)
- [Glossary](/en-US/docs/Glossary)

  - {{Glossary("JavaScript")}}
  - {{Glossary("string")}}
  - {{Glossary("number")}}
  - {{Glossary("bigint")}}
  - {{Glossary("boolean")}}
  - {{Glossary("null")}}
  - {{Glossary("undefined")}}
  - {{Glossary("symbol")}}
