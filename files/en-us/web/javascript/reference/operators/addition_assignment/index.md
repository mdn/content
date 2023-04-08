---
title: Addition assignment (+=)
slug: Web/JavaScript/Reference/Operators/Addition_assignment
page-type: javascript-operator
browser-compat: javascript.operators.addition_assignment
---

{{jsSidebar("Operators")}}

The **addition assignment (`+=`)** operator performs [addition](/en-US/docs/Web/JavaScript/Reference/Operators/Addition) (which is either numeric addition or string concatenation) on the two operands and assigns the result to the left operand.

{{EmbedInteractiveExample("pages/js/expressions-addition-assignment.html")}}

## Syntax

```js-nolint
x += y
```

## Description

`x += y` is equivalent to `x = x + y`.

## Examples

### Using addition assignment

```js
let baz = true;

// Boolean + Number -> addition
baz += 1; // 2

// Number + Boolean -> addition
baz += false; // 2
```

```js
let foo = "foo";

// String + Boolean -> concatenation
foo += false; // "foofalse"

// String + String -> concatenation
foo += "bar"; // "foofalsebar"
```

```js
let bar = 5;

// Number + Number -> addition
bar += 2; // 7

// Number + String -> concatenation
bar += "foo"; // "7foo"
```

```js
let x = 1n;

// BigInt + BigInt -> addition
x += 2n; // 3n

// BigInt + Number -> throws TypeError
x += 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assignment operators in the JS guide](/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Addition operator](/en-US/docs/Web/JavaScript/Reference/Operators/Addition)
