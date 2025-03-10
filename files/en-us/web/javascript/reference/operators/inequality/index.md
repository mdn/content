---
title: Inequality (!=)
slug: Web/JavaScript/Reference/Operators/Inequality
page-type: javascript-operator
browser-compat: javascript.operators.inequality
---

{{jsSidebar("Operators")}}

The **inequality (`!=`)** operator checks whether its two operands are not
equal, returning a Boolean result.
Unlike the [strict inequality](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality) operator,
it attempts to convert and compare operands that are of different types.

{{InteractiveExample("JavaScript Demo: Expressions - Inequality operator")}}

```js interactive-example
console.log(1 != 1);
// Expected output: false

console.log("hello" != "hello");
// Expected output: false

console.log("1" != 1);
// Expected output: false

console.log(0 != false);
// Expected output: false
```

## Syntax

```js-nolint
x != y
```

## Description

The inequality operator checks whether its operands are not equal. It is the negation
of the [equality](/en-US/docs/Web/JavaScript/Reference/Operators/Equality)
operator so the following two lines will always give the same result:

```js
x != y;

!(x == y);
```

For details of the comparison algorithm, see the page for the [equality](/en-US/docs/Web/JavaScript/Reference/Operators/Equality) operator.

Like the equality operator, the inequality operator will attempt to convert and compare
operands of different types:

```js
3 != "3"; // false
```

To prevent this, and require that different types are considered to be different, use
the [strict inequality](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality) operator instead:

```js
3 !== "3"; // true
```

## Examples

### Comparison with no type conversion

```js
1 != 2; // true
"hello" != "hola"; // true

1 != 1; // false
"hello" != "hello"; // false
```

### Comparison with type conversion

```js
"1" != 1; // false
1 != "1"; // false
0 != false; // false
0 != null; // true
0 != undefined; // true
0 != !!null; // false, look at Logical NOT operator
0 != !!undefined; // false, look at Logical NOT operator
null != undefined; // false

const number1 = new Number(3);
const number2 = new Number(3);
number1 != 3; // false
number1 != number2; // true
```

### Comparison of objects

```js
const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 != object2); // true
console.log(object1 != object1); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Equality (`==`)](/en-US/docs/Web/JavaScript/Reference/Operators/Equality)
- [Strict equality (`===`)](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [Strict inequality (`!==`)](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
