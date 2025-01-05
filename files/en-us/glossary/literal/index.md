---
title: Literal
slug: Glossary/Literal
page-type: glossary-definition
---

{{GlossarySidebar}}

**Literals** represent values in JavaScript. These are fixed values—not variables—that you _literally_ provide in your script.

- [Array literals](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals)
- [Boolean literals](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#boolean_literals)
- [Floating-point literals](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#floating-point_literals)
- [Numeric literals](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#numeric_literals)
- [Object literals](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals)
- [RegExp literals](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#regexp_literals)
- [String literals](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#string_literals)

## Examples

### String literals

A string literal is zero or more characters enclosed in double (`"`) or single quotation marks (`'`). A string must be delimited by quotation marks of the same type (that is, either both single quotation marks, or both double quotation marks).

The following are examples of string literals:

```js
"foo";
"bar";
"1234";
"one line \n new line";
"Joyo's cat";
```

### Object literals

An object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces (`{}`).

The following is an example of an object literal. The first element of the `car` object defines a property, `myCar`, and assigns to it a new string, `"Toyota"`; the second element, the `getCar` property, is immediately assigned the result of invoking the function `carTypes('Honda')`; the third element, the `special` property, uses an existing variable (`sales`).

```js
const sales = "BMW";

function carTypes(name) {
  return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
}

const car = {
  myCar: "Toyota",
  getCar: carTypes("Honda"),
  special: sales,
};

console.log(car.myCar); // Toyota
console.log(car.getCar); // Honda
console.log(car.special); // BMW
```

## See also

- [Literal](<https://en.wikipedia.org/wiki/Literal_(computer_programming)>) on Wikipedia
