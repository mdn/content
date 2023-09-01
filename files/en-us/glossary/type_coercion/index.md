---
title: Type coercion
slug: Glossary/Type_coercion
page-type: glossary-definition
---

{{GlossarySidebar}}

Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). _{{Glossary("Type conversion")}}_ is similar to _type coercion_ because they both convert values from one data type to another with one key difference — _type coercion_ is implicit whereas _type conversion_ can be either implicit _or_ explicit.

## Examples

```js
const value1 = "5";
const value2 = 9;
let sum = value1 + value2;

console.log(sum);
```

In the above example, JavaScript has _coerced_ the `9` from a number into a string and then concatenated the two values together, resulting in a string of `59`. JavaScript had a choice between a string or a number and decided to use a string.

The compiler could have coerced the `5` into a number and returned a sum of `14`, but it did not. To return this result, you'd have to explicitly convert the `5` to a number using the {{jsxref("Global_Objects/Number", "Number()")}} method:

```js
sum = Number(value1) + value2;
```

## See also

- [Type conversion](https://en.wikipedia.org/wiki/Type_conversion) (Wikipedia)
- [Glossary](/en-US/docs/Glossary)

  - {{Glossary("Type")}}
  - {{Glossary("Type conversion")}}
