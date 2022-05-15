---
title: Primitive
slug: Glossary/Primitive
tags:
  - CodingScripting
  - Glossary
  - JavaScript
---
In {{Glossary("JavaScript")}}, a **primitive** (primitive value, primitive data type) is data that is not an {{Glossary("object")}} and has no {{glossary("method","methods")}} or [properties](/en-US/docs/Glossary/property/JavaScript). There are 7 primitive data types: {{Glossary("string")}}, {{Glossary("number")}}, {{Glossary("bigint")}}, {{Glossary("boolean")}}, {{Glossary("undefined")}}, {{Glossary("symbol")}}, and {{Glossary("null")}}.

Most of the time, a primitive value is represented directly at the lowest level of the language implementation.

All primitives are **immutable**, i.e., they cannot be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.

## Example

### Autoboxing: primitive wrapper objects in JavaScript

Due to a feature known as "autoboxing", JavaScript primitives _appear_ to have methods and properties.
For example, below it looks like `toUpperCase()` and `length` are methods and properties of the string primitive.

```js
let mystring = "lower case string";
mystring.toUpperCase();
console.log(mystring);
// 'LOWER CASE STRING'
console.log(mystring.length)
// 17
```

What actually happens is that a wrapper object associated with the primitive is automatically accessed instead.
Except for `null` and `undefined`, all primitive values have object equivalents that wrap around the primitive values:

- {{jsxref("String")}} for the string primitive.
- {{jsxref("Number")}} for the number primitive.
- {{jsxref("BigInt")}} for the bigint primitive.
- {{jsxref("Boolean")}} for the boolean primitive.
- {{jsxref("Symbol")}} for the symbol primitive.

The wrapper's [`valueOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) method returns the primitive value.

### Primitives are immutable

This example will help you understand that primitive values are **immutable**.
A primitive can be replaced, but it can't be directly altered.

```js
// Using a string method doesn't mutate the string
let bar = "baz";
console.log(bar);               // baz
bar.toUpperCase();
console.log(bar);               // baz

// Assignment gives the primitive a new (not a mutated) value
bar = bar.toUpperCase();       
console.log(bar);               // BAZ

// By contrast, using an array method mutates the array
let foo = [];
console.log(foo);               // []
foo.push("plugh");
console.log(foo);               // ["plugh"]
```

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
