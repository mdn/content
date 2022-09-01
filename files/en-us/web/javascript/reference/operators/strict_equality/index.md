---
title: Strict equality (===)
slug: Web/JavaScript/Reference/Operators/Strict_equality
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.strict_equality
---
{{jsSidebar("Operators")}}

The strict equality operator (`===`) checks whether its two operands are
equal, returning a Boolean result. Unlike the [equality](/en-US/docs/Web/JavaScript/Reference/Operators/Equality) operator,
the strict equality operator always considers operands of different types to be
different.

{{EmbedInteractiveExample("pages/js/expressions-strict-equality.html")}}

## Syntax

```js
x === y
```

## Description

The strict equality operators (`===` and `!==`) provide the [IsStrictlyEqual](/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#strict_equality_using) semantic.

- If the operands are of different types, return `false`.
- If both operands are objects, return `true` only if they refer to the
  same object.
- If both operands are `null` or both operands are `undefined`,
  return `true`.
- If either operand is `NaN`, return `false`.
- Otherwise, compare the two operand's values:

  - Numbers must have the same numeric values. `+0` and `-0`
    are considered to be the same value.
  - Strings must have the same characters in the same order.
  - Booleans must be both `true` or both `false`.

The most notable difference between this operator and the [equality](/en-US/docs/Web/JavaScript/Reference/Operators/Equality)
(`==`) operator is that if the operands are of different types, the
`==` operator attempts to convert them to the same type before comparing.

## Examples

### Comparing operands of the same type

```js
console.log("hello" === "hello");   // true
console.log("hello" === "hola");    // false

console.log(3 === 3);               // true
console.log(3 === 4);               // false

console.log(true === true);         // true
console.log(true === false);        // false

console.log(null === null);         // true
```

### Comparing operands of different types

```js
console.log("3" === 3);           // false

console.log(true === 1);          // false

console.log(null === undefined);  // false
```

### Comparing objects

```js
const object1 = {
  name: "hello"
}

const object2 = {
  name: "hello"
}

console.log(object1 === object2);  // false
console.log(object1 === object1);  // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Equality operator](/en-US/docs/Web/JavaScript/Reference/Operators/Equality)
- [Inequality operator](/en-US/docs/Web/JavaScript/Reference/Operators/Inequality)
- [Strict inequality operator](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
