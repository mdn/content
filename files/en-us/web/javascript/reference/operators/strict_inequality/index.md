---
title: Strict inequality (!==)
slug: Web/JavaScript/Reference/Operators/Strict_inequality
page-type: javascript-operator
browser-compat: javascript.operators.strict_inequality
---

{{jsSidebar("Operators")}}

The **strict inequality (`!==`)** operator checks whether its two operands are
not equal, returning a Boolean result. Unlike the [inequality](/en-US/docs/Web/JavaScript/Reference/Operators/Inequality)
operator, the strict inequality operator always considers operands of different types to
be different.

{{EmbedInteractiveExample("pages/js/expressions-strict-inequality.html")}}

## Syntax

```js-nolint
x !== y
```

## Description

The strict inequality operator checks whether its operands are not equal.
It is the negation of the
[strict equality](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) operator
so the following two lines will always give the same result:

```js
x !== y;

!(x === y);
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
"hello" !== "hello"; // false
"hello" !== "hola"; // true

3 !== 3; // false
3 !== 4; // true

true !== true; // false
true !== false; // true

null !== null; // false
```

### Comparing operands of different types

```js
"3" !== 3; // true
true !== 1; // true
null !== undefined; // true
```

### Comparing objects

```js
const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 !== object2); // true
console.log(object1 !== object1); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Equality (`==`)](/en-US/docs/Web/JavaScript/Reference/Operators/Equality)
- [Inequality (`!=`)](/en-US/docs/Web/JavaScript/Reference/Operators/Inequality)
- [Strict equality (`===`)](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)
