---
title: Strict inequality (!==)
slug: Web/JavaScript/Reference/Operators/Strict_inequality
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.strict_inequality
---
{{jsSidebar("Operators")}}

The strict inequality operator (`!==`) checks whether its two operands are
not equal, returning a Boolean result. Unlike the [inequality](/en-US/docs/Web/JavaScript/Reference/Operators/Inequality)
operator, the strict inequality operator always considers operands of different types to
be different.

{{EmbedInteractiveExample("pages/js/expressions-strict-inequality.html")}}

## Syntax

```js
x !== y
```

## Description

The strict inequality operator checks whether its operands are not equal.
It is the negation of the
[strict equality](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) operator
so the following two lines will always give the same result:

```js
x !== y

!(x === y)
```

For details of the comparison algorithm, see the page for the
[strict equality](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) operator.

Like the strict equality operator, the strict inequality operator will always consider
operands of different types to be different:

```js
3 !== "3"; // true
```

## Examples

### Comparing operands of the same type

```js
console.log("hello" !== "hello");   // false
console.log("hello" !== "hola");    // true

console.log(3 !== 3);               // false
console.log(3 !== 4);               // true

console.log(true !== true);         // false
console.log(true !== false);        // true

console.log(null !== null);         // false
```

### Comparing operands of different types

```js
console.log("3" !== 3);           // true

console.log(true !== 1);          // true

console.log(null !== undefined);  // true
```

### Comparing objects

```js
const object1 = {
  name: "hello"
}

const object2 = {
  name: "hello"
}

console.log(object1 !== object2);  // true
console.log(object1 !== object1);  // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Equality operator](/en-US/docs/Web/JavaScript/Reference/Operators/Equality)
- [Inequality operator](/en-US/docs/Web/JavaScript/Reference/Operators/Inequality)
- [Strict equality operator](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)
