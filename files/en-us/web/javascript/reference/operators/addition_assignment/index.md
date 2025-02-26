---
title: Addition assignment (+=)
slug: Web/JavaScript/Reference/Operators/Addition_assignment
page-type: javascript-operator
browser-compat: javascript.operators.addition_assignment
---

{{jsSidebar("Operators")}}

The **addition assignment (`+=`)** operator performs [addition](/en-US/docs/Web/JavaScript/Reference/Operators/Addition) (which is either numeric addition or string concatenation) on the two operands and assigns the result to the left operand.

{{InteractiveExample("JavaScript Demo: Expressions - Addition assignment operator")}}

```js interactive-example
let a = 2;
let b = "hello";

console.log((a += 3)); // Addition
// Expected output: 5

console.log((b += " world")); // Concatenation
// Expected output: "hello world"
```

## Syntax

```js-nolint
x += y
```

## Description

`x += y` is equivalent to `x = x + y`, except that the expression `x` is only evaluated once.

## Examples

### Addition assignment using numbers

```js
let bar = 5;
bar += 2; // 7
```

Other non-string, non-BigInt values are coerced to numbers:

```js
let baz = true;
baz += 1; // 2
baz += false; // 2
```

### Addition assignment using BigInts

```js
let x = 1n;
x += 2n; // 3n

x += 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

### Addition assignment using strings

```js
let foo = "foo";
foo += false; // "foofalse"
foo += "bar"; // "foofalsebar"

let bar = 5;
bar += "foo"; // "5foo"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Addition (`+`)](/en-US/docs/Web/JavaScript/Reference/Operators/Addition)
